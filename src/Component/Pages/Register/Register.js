import React, { createContext, useContext, useState } from 'react';
import { json, Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../../Loading/Loading';
import useToken from '../useToken.js/useToken';
import UseBuyer from '../../Usebuyer/UseBuyer';
export const Contextuth=createContext()

const Register = () => {
  const navigate=useNavigate()
  const [createUser,setCreateEmail]=useState('')
  const [token]=useToken(createUser)
  const {loading,creatUser,updatePro,googleLogin}=useContext(AuthContext)
  const [hosatingdata,setHostingdata]=useState(null)
  const [formdata,setFormdata]=useState()
 
  const { register,  handleSubmit,reset,formState: { errors } } = useForm();
  if(hosatingdata?.data){
  const {title,url}=hosatingdata?.data
 
  }
  else{
    if(loading){
      return  <Loading/>

  }
}

if(token){
  navigate('/')
}


  const registerSub = data => 
  

  {
    console.log(data);
    localStorage.setItem('data',data.selectoption)
    setFormdata(data)
    const {name,email,selectoption}=data
    creatUser(data.email,data.password)
    .then(res=>{
      if(loading){
        return <Loading/>
        }
      const user=res.user
      console.log(user);
      const nameInfo={
        displayName:name
       }
       updatePro(nameInfo)
    .then((res)=>{
      console.log(res);
    })
    .catch(e=>{
  
      console.log(e);
    })
  
    })
    .catch(e=>console.error(e))
    const image=data.image[0]
    const hostImg="09e31f3e45976bbd5dc75e4b28575da9"
    const formData = new FormData();
        formData.append('image',image);
         const url=`https://api.imgbb.com/1/upload?&key=${hostImg}`
         fetch(url,{
          method:'POST',
          body:formData
          
      })
      .then(res=>res.json())
      .then(data=>{
         
          reset()
        
        if(data.success){
            setHostingdata(data)
            toast.success('SignUp Successfully')
         }
         const{url}=data.data
         const postinfo={
          name,
      email,
      selectoption,
          url
         }

         fetch(`https://carreseller-server-side.vercel.app/signupuser`,{
          method:'POST',
          headers:{
              'content-type':'application/json',
              
          },
          body:JSON.stringify(postinfo)
      })
      .then(res=>res.json())
      .then(result=>{
        console.log(result )
         if(result.acknowledged){
          setCreateEmail(email)
         }
         
      })
      })

  };

  
  const googlesign=()=>{
    googleLogin()
    .then(res=>{
      const user=res.user
      navigate('/')
     
     
     
      
    })
    .catch(e=>console.error(e))
  }
    return (
        <Contextuth.Provider value={formdata}>
          <div>
            <Navbar/>


            <section className="vh-100 bg-image"
  style={{backgroundImage:"url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)"}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius:'15px'}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <form onSubmit={handleSubmit(registerSub)}>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg"  {...register("name")} />
                  <label className="form-label" for="form3Example1cg">Your Name</label>
                </div>

                <div className="form-outline mb-4">
                <input type="email" id="form3Example1cg" className="form-control form-control-lg"  {...register("email")} />
                  <label className="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example1cg" className="form-control form-control-lg"  {...register("password")} />
                  <label className="form-label" for="form3Example4cg">Password</label>
                </div>
                <div className='mb-5'>
              <h6>Add a photo</h6>
              <input type="file" id="form3Example1cg" className="form-control form-control-lg"  {...register("image")} />
              </div>

                <div className="d-flex flex-row align-items-center mb-4 mt-3">
                    <div className="form-outline flex-fill mb-0">      
                  <select className="select form-control-lg" {...register("selectoption")}>
                    <option value="Buyer">Buyer</option>
                    <option value="Seller">Seller</option>
                   
                   
                  </select>
                  <label className="form-label select-label">Choose option</label>
                       
                    </div>
                  </div>

                <div className="form-check d-flex justify-content-center mb-5">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label className="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>
               
              <div className="d-flex justify-content-center ">
                  <button  onClick={googlesign}  type="button"
                    className="btn btn-lg btn-block btn-primary w-100 mb-3"><i className="fab fa-google me-2"></i>GooGle</button>
                </div>

                <div className="d-flex justify-content-center">
                  <input type="submit" value='REGISTER'
                    className="btn btn-danger   text-white w-100"/> 
                </div>

                <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login"
                    className="fw-bold text-body"><u>Login here</u></Link></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>  
        </div>
        </Contextuth.Provider>
    );
};

export default Register;