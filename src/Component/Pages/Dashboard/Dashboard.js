 import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../../Loading/Loading';
import UseAdmin from '../../UseAdmin.js/UseAdmin';
import UseBuyer from '../../Usebuyer/UseBuyer';
import Useseller from '../../Useseller/Useseller';
 
import './Dashboard.css'

const Dashboard = () => {
   
 const {userinfo}=useContext(AuthContext)
 const [isSeller]=Useseller(userinfo?.email)
 const[isBuyer]=UseBuyer(userinfo?.email)
 const [isAdmin]=UseAdmin(userinfo?.email)
 const { isLoading, isError, data:bookdata, error } = useQuery({
  queryKey: ['bookdata'],
  queryFn:()=>fetch(`https://carreseller-server-side.vercel.app/bookingdata`)
  .then(res=>res.json())
  .then(data=>{
    if(isLoading){
      <Loading/>
    }
    console.log(data);
    return data
  })
})
 
 
  
    return (
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
      <div class="position-sticky pt-3 mt-4 ">
        <ul class="nav flex-column">
          {
            isSeller === true ? <>
             <li class="nav-item">
           <Link class="nav-link" to="/Dashboard/addProduct">
               Add a Product
            </Link>
          </li>
          <li class="nav-item">
                     <Link class="nav-link" to="/Dashboard/myproduct">
                        My Product
                      </Link>
                    </li>
                    <li class="nav-item">
           <Link class="nav-link" to="/Dashboard/mybuyer">
              
              My Buyers
            </Link>
          </li>
            
            </> :<></> &&
             
              isBuyer === true ? <>
              <li class="nav-item ">
            <Link class="nav-link mt-5" to="/Dashboard/myorder">
               My orders
             </Link>
           </li>
              </>:<></>|| isAdmin === true ? <>
              <li class="nav-item">
           <Link class="nav-link" to="/Dashboard/allseller">
               All Seller
            </Link>
          </li>
          <li class="nav-item">
           <Link class="nav-link" to="/Dashboard/allbuyer">
              All Buyer
            </Link>
          </li>
              
              </>:<></>
           
          }



          
        </ul>
 
         
      </div>
    </nav>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">
          {
            isSeller === true ?<h1>Seller Page</h1>:<></>&&
            isBuyer ===true ?<h1>Buyer Page</h1>:<></> || isAdmin ===true ? <h1>Admin Page</h1>:<></>
          }
           


        </h1>
         
      </div>

     
 {
  isBuyer === true ? <>
  <h2>Section title</h2>
                     <div class="table-responsive">
                       <table class="table table-striped table-sm">
                         <thead>
                           <tr>
                              
                             <th scope="col">Image</th>
                             <th scope="col">Title</th>
                             <th scope="col">Price</th>
                             <th scope="col">Pay button</th>
                           </tr>
                         </thead>
                         <tbody>
                           {
                            bookdata?.map(bookdeta=><tr key={bookdeta._id} >
                             
                           <td> <img src={bookdeta?.img} class="rounded-circle mt-2" style={{width:'70px'}}
  alt="Avatar" /></td> 
                              <td className='mt-2'>
                              {bookdeta?.carsname}
                                </td>
                              <td className='mt-2'>{bookdeta?.reseleprice}</td>
                              <td><button className='btn btn-dark mt-2'>pay</button></td>
                            </tr>)
                           }
                            
                            
                      
                         </tbody>
                       </table>
                     </div>
  </>:<><h1 className='text-primary'>Chose your side bar option and Click now show your Data</h1></>
 }
    </main>
  </div>
</div>
            
 
 
            
        </div>
    );
};

export default Dashboard;