import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Navbar from '../../Navbar/Navbar';
import useToken from '../useToken.js/useToken';
 

const Login = ({formdata}) => {
  console.log(formdata);
  const [loginuser,setLoginUser]=useState('')
  const [token]=useToken(loginuser)
  const {userinfo, signin,  googleLogin}=useContext(AuthContext) 
  const navigate=useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
  if(token){
    navigate(from, { replace: true });
  }
  const LoginSubmit = data =>{
 
    console.log(data);
    signin(data.email,data.password)
    .then(result=>{
      setLoginUser(data.email)
      reset()
      toast.success("Login Successful")
      const user=result.user
    })
    .catch(e=>console.error(e))
   
  };

  const googlelogin=()=>{
    googleLogin()
    .then(res=>{
      const user=res.user
      navigate('/')
    })
    .catch(e=>console.error(e))
  }
  
    return (
        <div>
            <Navbar/>
            <section class="vh-100 mt-5">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        < form onSubmit={handleSubmit(LoginSubmit)}>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Sign in with</p>
            <button onClick={googlelogin} type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address"  {...register("email",{required:true})} />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>
  
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password"  {...register("password",{required:true})} />
            <label class="form-label" for="form3Example4">Password</label>
          </div>
          

          <div class="d-flex justify-content-between align-items-center">
          
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <input type="submit" class="btn btn-primary btn-lg" value='Login'
              style={{paddingLeft:'2.5rem',paddingRight:'2.5rem'}}/>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/register"
                class="link-danger">Register</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
</section>
            
        </div>
    );
};

export default Login;