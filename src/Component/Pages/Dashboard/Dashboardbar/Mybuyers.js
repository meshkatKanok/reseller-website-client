import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Useseller from '../../../Useseller/Useseller';

const Mybuyers = () => {
  const {userinfo}=useContext(AuthContext)
 const [isSeller]=Useseller(userinfo?.email)
  
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
               
                    
               
                     <h2>Section title</h2>
                     <div class="table-responsive">
                       <table class="table table-striped table-sm">
                         <thead>
                           <tr>
                             <th scope="col">#</th>
                             <th scope="col">Header</th>
                             <th scope="col">Header</th>
                             <th scope="col">Header</th>
                             <th scope="col">Header</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>1,001</td>
                             <td>random</td>
                             <td>data</td>
                             <td>placeholder</td>
                             <td>text</td>
                           </tr>
                           <tr>
                             <td>1,002</td>
                             <td>placeholder</td>
                             <td>irrelevant</td>
                             <td>visual</td>
                             <td>layout</td>
                           </tr>
                           <tr>
                             <td>1,003</td>
                             <td>data</td>
                             <td>rich</td>
                             <td>dashboard</td>
                             <td>tabular</td>
                           </tr>
                           
                      
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

export default Mybuyers;