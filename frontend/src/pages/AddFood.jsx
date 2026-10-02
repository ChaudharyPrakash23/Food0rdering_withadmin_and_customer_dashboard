import React, { useState, useEffect } from "react";
import AdminLayout from "../components/AdminLayout";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPizzaSlice, FaPlus, FaPlusCircle} from "react-icons/fa";
const AddFood = () => {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
  const [categories, setCategories] = useState([]);
  const [formData,setFormData]=useState({
    category:'',
    item_name:'',
    item_price:'',
    item_description:'',
    image:null,
    item_quantity:'',
  })
    useEffect(() => {
      fetch(`${BASEURL}/api/all-categories/`)
        .then((res) => res.json())
        .then((data) => {
          setCategories(data);
        });
    }, []);

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }))
  }
  const handleFileChange=()=>{
   setFormData((prev)=>({
    ...prev,
    image:e.target.files[0]
   })) 
  }

  const handleSubmit=()=>{

  }
  return (
    <AdminLayout>
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="row">
        <div className="col-md-8">
          <div className="shadow-sm p-4 rounded bg-white">
            <div className="d-flex align-items-center mb-4">
              <FaPlusCircle className="text-primary me-2" size={32} />
              <h4 className="mb-0">Add Food Item</h4>
            </div>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="mb-3">
                <label className="form-label fw-semibold">Food Categories</label>
                <select name="category" className="form-select" onChange={handleChange} value={formData.category}required>
                  <option>Seect Category</option>
                  {categories.map((categoty)=>(
                    <option key={categoty.id} value={categoty.id}>{categoty.category_name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Food Item Name
                </label>
                <input
                  name="item_name"
                  value={formData.item_name}
                  type="text"
                  className="form-control"
                  placeholder="Enter Name of Food Item"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Description
                </label>
                <textarea
                  name="item_description"
                  value={formData.item_description}
                  className="form-control"
                  placeholder="Item Description"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Quantity
                </label>
                <input
                  name="item_quantity"
                  value={formData.item_quantity}
                  type="text-field"
                  className="form-control"
                  placeholder="Eg: 2 plates/half"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Price(रु)
                </label>
                <input
                  name="item_price"
                  value={formData.item_price}
                  step=".01"
                  type="number"
                  className="form-control"
                  placeholder="Item price"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Item Image
                </label>
                <input
                  name="image"
                  multiple
                  type="file"
                  accept="image/*"
                  className="form-control"
                  placeholder="Item price"
                  onChange={handleFileChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                <FaPlus className="me-2" />
                Add Food Item
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <FaPizzaSlice style={{ color: "#e5e5e5" }} size={200} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddFood;