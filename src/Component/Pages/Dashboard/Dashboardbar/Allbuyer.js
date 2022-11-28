import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loading from '../../../Loading/Loading';
import UseAdmin from '../../../UseAdmin.js/UseAdmin';

const Allbuyer = () => {
  const {userinfo}=useContext(AuthContext)
  const [isAdmin]=UseAdmin(userinfo?.email) 
  const [Buhyerdata, setBuyer]=useState()
  const [buyerdata,setbuyerData]=useState()
  const { isLoading, isError,refetch, data, error } = useQuery({
    queryKey: ['buyerdata'],
    queryFn:()=>fetch(`https://carreseller-server-side.vercel.app/allbuyer`)
    .then(res=>res.json())
    .then(data=>{
      <Loading/>
      setbuyerData(data)
      
    })
  })

  const BuyerDelete=id=>{
    fetch(`https://carreseller-server-side.vercel.app/allbuyer/${id}`,{
      method:'DELETE',
       
   })
   .then(res=>res.json())
   .then(data=>{
    if(data.deletedCount>0){
      toast.success('successfully deleted')
      refetch()
      const reaming=buyerdata.filter(deleteinfo=>deleteinfo._id!==id)
      setBuyer(reaming)
     
     
      
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
                       </ul>
                
                        
                     </div>
                   </nav>
               
                   <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                     <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                       <h1 class="h2">{isAdmin === true ?<><h1>Admin Page</h1></>:<></>}</h1>
                        
                     </div>
               
                    
               
                     <h2>Buyer Data</h2>
                     <div class="table-responsive">
                       <table class="table table-striped table-sm">
                         <thead>
                           <tr>
                             
                             <th scope="col">Image</th>
                             <th scope="col">Name</th>
                             <th scope="col">Email</th>
                            
                           </tr>
                         </thead>
                         <tbody>
                         {
                          buyerdata?.map(buyedeta=><tr key={buyedeta._id}>
                            <td><img src={buyedeta?.url} class="rounded-circle" style={{width:'60px'}}
  alt="Avatar" /></td>
                            <td>{buyedeta?.name}</td>
                            <td>{buyedeta?.email}</td>
                            <td><button onClick={()=>BuyerDelete(buyedeta?._id)} className='btn btn-danger mt-2'>Delete buyer</button></td>
                           
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

export default Allbuyer;