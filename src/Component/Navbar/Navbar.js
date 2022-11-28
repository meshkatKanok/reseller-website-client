import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import '../Share/Style.css'

const Navbar = () => {
    const {userinfo, signout}=useContext(AuthContext)
    const SignOut=()=>{
        signout()
        .then(()=>{})
        .catch(e=>console.error(e))
    }
    return (
        <div>
               {/* Header Start  */}
    <div  className="container-fluid bg-dark px-0">
        <div className="row gx-0">
            <div className="col-lg-3 bg-dark d-none d-lg-block">
                <a href="index.html" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                    <h1 className="m-0 display-4  text-uppercase" style={{color:'#FB5B21'}}>SGU MARKET</h1>
                </a>
            </div>
            <div className="col-lg-9">
                <div className="row gx-0 bg-secondary d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                            <i style={{color:'#FB5B21'}} className="fa fa-envelope  me-2"></i>
                            <h6 className="mb-0 text-white">meshkatkanok12@gmail.com</h6>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-2">
                            <i style={{color:'#FB5B21'}} className="fa fa-phone-alt  me-2"></i>
                            <h6 className="mb-0 text-white">+8801789011636</h6>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="d-inline-flex align-items-center py-2">
                            <a className="btn btn-light btn-square rounded-circle me-2" href="">
                                <i style={{color:'#FB5B21'}}  className="fab fa-facebook-f"></i>
                            </a>
                            <a className="btn btn-light btn-square rounded-circle me-2" href="">
                                <i style={{color:'#FB5B21'}} className="fab fa-twitter"></i>
                            </a>
                            <a className="btn btn-light btn-square rounded-circle me-2" href="">
                                <i style={{color:'#FB5B21'}} className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="btn btn-light btn-square rounded-circle me-2" href="">
                                <i style={{color:'#FB5B21'}} className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
                    <a href="index.html" className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 display-4 text-primary text-uppercase">SGU MARKET</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                        <Link to="/home" className="nav-item nav-link">Home</Link>
                        <Link to="/blog" className="nav-item nav-link">Blog Detail</Link>
                            {
                                userinfo?.uid? 
                                 <>
                                  <Link to="/Dashboard" className="nav-item nav-link ">Dashboard</Link>
                                  <Link onClick={SignOut} className="nav-item nav-link ">Logout</Link>
                                 
                                </>:<>
                                <Link to="/login" className="nav-item nav-link">Login</Link>
                                </>
                            }
                          
                           
                        </div>
                      {
                        userinfo?.uid?<>
                        </>:<>
                        <Link to="/register" style={{background:'#FB5B21'}} className="btn py-md-3 px-md-5 d-none d-lg-block text-white mb-4">REGISTER NOW</Link>
                        </>
                      }
                    </div>
                </nav>
            </div>
        </div>
    </div>
     {/* Header End */}
            
        </div>
    );
};

export default Navbar;