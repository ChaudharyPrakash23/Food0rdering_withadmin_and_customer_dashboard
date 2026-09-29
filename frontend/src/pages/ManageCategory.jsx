import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import { FaDatabase, FaEdit, FaListAlt, FaTrash } from "react-icons/fa";

const ManageCategory = () => {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
  const [categories,setCategories]=useState([])

  useEffect(()=>{
    fetch(`${BASEURL}/api/all-categories/`)
      .then(res=>res.json())
      .then(data=>{
        setCategories(data)
      })
  },[])
  return (
    <AdminLayout>
      <div>
        <h3 className="text-center text-primary mb-4">
          <FaListAlt className="me-1" />
          Mangage Food Category
        </h3>
        <h5 className="text-end text-muted">
          <FaDatabase className="me-2" />
          Total Categories<span className="ms-2 badge bg-success">{categories.length}</span>
        </h5>
        <div className="mb-3">
            <input type="text" className="form-control w-50" placeholder="search by category name..."/>
        </div>
        <table className="table table-bordered table-hover table-stripped">
          <thead className="table-dark">
            <tr>
              <th>S.No</th>
              <th>Category</th>
              <th>Creation date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category,index)=>(
            <tr key={category.id}>
              <td>{index}</td>
              <td>{category.category_name}</td>
              <td>{new Date(category.creation_date).toDateString()}</td>
              <td className="gap-1 flex items-center">
                <Link className="btn btn-sm btn-primary me-2">
                  <FaEdit className="me-1" />
                  Edit
                </Link>
                <button className="btn btn-sm btn-danger">
                  <FaTrash className="me-1" />
                  Delete
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default ManageCategory;
