import React,{useState,useEffect} from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import "../styles/admin.css";
const AdminLayout = ({ children }) => {

  const[sidebarOpen,SetsidebarOpen]=useState(true)

  useEffect(()=>{
    const handleResize=()=>{
      if(window.innerWidth<768){
        SetsidebarOpen(false)
      }else{
        SetsidebarOpen(true)
      }
    }
    handleResize()

    window.addEventListener("resize",handleResize)
    return()=>removeEventListener("resize",handleResize)
  },[])

  const toggleSidebar=()=>SetsidebarOpen(prev=>!prev)
  return (
    <div className="d-flex">
      {sidebarOpen && <AdminSidebar />}
      <div id="page-content-wrapper" className={`w-100 ${sidebarOpen ? 'width-sidebar':'full-width'}`}>
        <AdminHeader toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        <div className="container-fluid mt-4">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
