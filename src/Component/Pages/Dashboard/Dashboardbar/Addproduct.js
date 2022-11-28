import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Useseller from '../../../Useseller/Useseller';
import AddProductCard from '../../Dashboard/AddproductCard'

const Addproduct = () => {
  const {userinfo}=useContext(AuthContext)
 const [isSeller]=Useseller(userinfo?.email)
  
  return (
    <div>
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
            isSeller && <>
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
            
            </>
          }
             
                       </ul>
                
                        
                     </div>
                   </nav>
               
                   <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                     <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                       <h1 class="h2">{isSeller && <h1>Seller Page</h1> }</h1>
                        
                     </div>
                  <AddProductCard/>

     
                   </main>
                 </div>
               </div>
                           
                
                
                           
                       </div>
        </div>
      
    </div>
  );
};

export default Addproduct;