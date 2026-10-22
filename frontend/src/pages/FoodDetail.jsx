import React,{useState,useEffect} from 'react'
import PublicLayout from '../components/PublicLayout'
import { useParams,useNavigate,Link } from 'react-router-dom'
const FoodDetail = () => {
    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
    const [foods, setFoods] = useState([]);
      useEffect(() => {
        fetch(`${BASEURL}/api/random_foods/`)
          .then((res) => res.json())
          .then((data) => {
            setFoods(data);
          });
      }, []);
  return (
    
    <PublicLayout>

    </PublicLayout>
  )
}

export default FoodDetail