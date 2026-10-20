from types import SimpleNamespace
from unittest.mock import patch

from django.contrib.auth.hashers import make_password
from django.test import SimpleTestCase, override_settings
from foodordering.models import User
from rest_framework.test import APIClient


@override_settings(PASSWORD_HASHERS=["django.contrib.auth.hashers.MD5PasswordHasher"])
class UserLoginTests(SimpleTestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = SimpleNamespace(
            id=1,
            first_name="Test",
            last_name="User",
            password=make_password("correct-password", hasher="md5"),
        )

    @patch("foodordering.views.User.objects.get")
    def test_login_accepts_email_or_mobile(self, get_user):
        get_user.return_value = self.user

        for identifier in ("user@example.com", "5551234"):
            with self.subTest(identifier=identifier):
                response = self.client.post(
                    "/api/login/",
                    {"emailcont": identifier, "password": "correct-password"},
                    format="json",
                )

                self.assertEqual(response.status_code, 200)
                self.assertEqual(response.data["userId"], self.user.id)
                lookup = get_user.call_args.args[0]
                self.assertEqual(
                    [field for field, _ in lookup.children],
                    ["email", "mobile"],
                )

    @patch("foodordering.views.User.objects.get")
    def test_login_returns_401_for_unknown_user(self, get_user):
        get_user.side_effect = User.DoesNotExist

        response = self.client.post(
            "/api/login/",
            {"emailcont": "missing@example.com", "password": "password"},
            format="json",
        )

        self.assertEqual(response.status_code, 401)
        self.assertEqual(response.data["message"], "Invalid credentials")
