import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'

const AdminLayout = () => {
  return (
    <div className='d-flex'>
        <AdminSidebar/>
        <div id='page-content-wrapper'>
            <AdminHeader/>
            <div className='container-fluid mt-4'>

            </div>
        </div>
    </div>
  )
}

export default AdminLayout