import React, { useState } from 'react';
import { userRows } from './../../data';
import './UsersList.css';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {Link} from 'react-router-dom'
import { MdDeleteOutline } from "react-icons/md";

export default function UserList() {
  const [userData, setUserData] = useState(userRows);
  const deleteUser= id=>{
    setUserData(userData.filter(item=>item.id!==id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user',
      headerName: 'User',
      width: 230,
      renderCell: (params) => {
        return(
          <>
          <Link to='/'>
            <div className='userListUser'>
              <img className='userListImg' src={params.row.avatar} alt='' />
              {params.row.username}
            </div>
          </Link>
        </>
        )
      }
           
    },
    {field: 'email', headerName: 'Email', width: 230},
    {field: 'status', headerName: 'Status', width: 120},
    {field: 'transaction', headerName: 'Transaction', width: 160},
    {field: 'action', headerName: 'Action', width: 200,
      renderCell: (params)=>{
        return(
          <div>
          <Link to={`/user/${params.row.id}`}>
            <button className='userListEdit'>
               Edit
            </button>
          </Link> 
          <button className='userListDelete'
          onClick={()=>deleteUser(params.row.id)}>
              Delete
          </button>
          </div>
        )
      }
    },
  ];

  return (
    <Box sx={{ height: 400, width: '90%' }} className='userList'>
      <DataGrid
        rows={userData}
        columns={columns}
        pageSize={4}
        disableSelectionOnClick
        rowHeight={60}
      />
      
    </Box>
  );
}
