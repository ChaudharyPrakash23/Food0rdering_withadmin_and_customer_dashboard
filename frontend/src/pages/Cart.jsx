import { useState, useEffect } from "react";
import PublicLayout from "../components/PublicLayout";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
    const navigate=useNavigate();
    const userId=localStorage.getItem('userId')
    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
    const[cartItems,setCartItems]=useState([])
    const[grandTotal,setGrandTotal]=useState(0)

    useEffect(()=>{
        if(!userId){
        navigate('/login');
        return;
        }
        fetch(`${BASEURL}/api/cart/${userId}`)
        .then(res =>res.json())
        .then(data=>{
            setCartItems(data);
            const total=data.reduce((sum,item)=>sum+item.food.item_price*quantity,0)
            setCartItems(total);
        })
    },[userId])
  return (
    <PublicLayout>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container py-5">

      </div>
    </PublicLayout>
  );
};

export default Cart;
