 
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import UseAdmin from '../../../UseAdmin.js/UseAdmin';



const Allseller = () => {
  const {userinfo}=useContext(AuthContext)
  const [sellerdata, setsellter]=useState()
  const [deletedata,setDelete]=useState(null)
const [isAdmin]=UseAdmin(userinfo?.email) 
const { isLoading, refetch, isError, data, error } = useQuery({
  queryKey: ['userdata'],
  queryFn: fetch(`https://carreseller-server-side.vercel.app/allseller`)
  .then(res=>res.json())
  .then(data=>{
    setsellter(data)

  })
})
 
  
 


const handleDelte=id=>{
  fetch(`https://carreseller-server-side.vercel.app/allseller/${id}`,{
      method:'DELETE',
       
   })
   .then(res=>res.json())
   .then(data=>{
    if(data.deletedCount>0){
      toast.success('successfully deleted')
      refetch()
      const reaming=deletedata.filter(deleteinfo=>deleteinfo._id!==id)
      setDelete(reaming)
     
     
      
  }
   })
     
     
  
   
   
   

}
 
  
    return (
        <div>
            <div>
               
               <header class="navbar navbar-dark sticky-top  flex-md-nowrap p-0 shadow">
                <Link class="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/">SGU MARKET</Link>
                 <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
                 </button>
                 <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
                 <div class="navbar-nav">
                   <div class="nav-item text-nowrap">
                    <Link class="nav-link px-3" to="/">Back To Home</Link>
                   </div>
                 </div>
               </header>
               
               <div class="container-fluid">
                 <div class="row">
                   <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                     <div class="position-sticky pt-3 mt-5">
                       <ul class="nav flex-column">
                         <li class="nav-item">

                          {
                            isAdmin === true ?<><li class="nav-item">
                            <Link class="nav-link" to="/Dashboard/allseller">
                                All Seller
                             </Link>
                           </li>
                           <li class="nav-item">
                            <Link class="nav-link" to="/Dashboard/allbuyer">
                               All Buyer
                             </Link>
                           </li></>:<></>
                          }
                      </li>  
                       </ul>
                
                        
                     </div>
                   </nav>
               
                   <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                     <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                       <h1 class="h2">{isAdmin === true ?<><h1>Admin Page</h1></>:<></>}</h1>
                        
                     </div>
               
                    
               
                     <h2>Seller data</h2>
                     <div class="table-responsive">
                       <table class="table table-striped table-sm">
                         <thead>
                           <tr>
                             
                             <th scope="col">Image</th>
                             <th scope="col">Email</th>
                             <th scope="col">Name</th>
                           </tr>
                         </thead>
                         <tbody>
                            
                           {
                            sellerdata?.map(seler=> 
                              <tr key={seler._id} >
                                <td className="mt-3"> 
                                <img src={seler?.url} class="rounded-circle" style={{width:'60px'}}
  alt="Avatar" />
                                </td >
                                <td>{seler?.name}</td>
                                <td >{seler?.email}</td>
                                <td><button onClick={()=>handleDelte(seler?._id)} className='btn btn-danger mt-2'>Delete User</button></td>

                                
                              </tr>)
                           }
                           
                      
                         </tbody>
                       </table>
                     </div>
                   </main>
                 </div>
               </div>
                           
                
                
                           
                       </div>
        </div>
    );
};

export default Allseller;