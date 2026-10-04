import React,{useState,useEffect} from 'react'
import AdminLayout from '../components/AdminLayout'
import { Link } from 'react-router-dom'
import {CSVLink} from 'react-csv'
import { FaDatabase, FaEdit, FaFileCsv, FaListAlt, FaTrash } from "react-icons/fa";

const ManageFood = () => {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
    const [foods, setFoods] = useState([]);
    const [allfoods, setAllFoods] = useState([]);
  
    useEffect(() => {
      fetch(`${BASEURL}/api/all-foods/`)
        .then((res) => res.json())
        .then((data) => {
          setFoods(data);
          setAllFoods(data);
        });
    }, []);
  
    const handleSearch = (s) => {
      const keyword = s.toLowerCase();
      if (!keyword) {
        setFoods(allfoods);
      } else {
        const filtered = allfoods.filter((c) =>
          c.item_name.toLowerCase().includes(keyword),
        );
        setFoods(filtered);
      }
    };
  return (
   <AdminLayout>
     <div>
            <h3 className="text-center text-primary mb-4">
              <FaListAlt className="me-1" />
              Mangage Food Items
            </h3>
            <h5 className="text-end text-muted">
              <FaDatabase className="me-2" />
              Total Food Items
              <span className="ms-2 badge bg-success">{foods.length}</span>
            </h5>
            <div className="mb-3 d-flex justify-content-between">
              <input
                type="text"
                className="form-control w-50"
                placeholder="search by Food Item name..."
                onChange={(e) => handleSearch(e.target.value)}
              />
              <CSVLink data={foods} className="btn btn-success" filename="foods_list">
               <FaFileCsv/> Export to CSV
              </CSVLink>
            </div>
            <table className="table table-bordered table-hover table-stripped">
              <thead className="table-dark">
                <tr>
                  <th>S.No</th>
                  <th>Category Name</th>
                  <th>Food Item Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {foods.map((food, index) => (
                  <tr key={food.id}>
                    <td>{index + 1}</td>
                    <td>{food.category_name}</td>
                    <td>{food.item_name}</td>
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
  )
}

export default ManageFood