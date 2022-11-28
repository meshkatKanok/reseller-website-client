import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Categoreymodal = ({resellerdata,setRellerdata,url
}) => {
    const {userinfo}=useContext(AuthContext)
    const { carsname, location, reseleprice,

    } =resellerdata
    const { register,reset,refetch,handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data,event) =>{
        const from=event.target
        const phone=from.phone.value
        const mettinglocation=from.mettinglocation.value
        const modalData={
           email :userinfo.email,
            carsname,
            mettinglocation,
            reseleprice,
            phone,
            
        }
         fetch(`https://carreseller-server-side.vercel.app/bookingcollection`,{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(modalData)
         })
         .then(res=>res.json())
         .then(data=>{
            if(data.acknowledged){
              setRellerdata(null)
              toast.success("Booking Successfully")
              refetch()
              reset()
               
            }
         })
       
    };
    const handlerefreh=()=>{
      setRellerdata(null)
    }

    return (
        <div>

<div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Prodect Deatils</h5>
        <button onClick={handlerefreh} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">User Email</label>
            <input type="email" className="form-control" id="recipient-name" disabled  defaultValue={userinfo?.email} {...register("email")}/>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label">Product Name</label>
            <input type="text" className="form-control" id="recipient-name" disabled  defaultValue={carsname} {...register("name")}/>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label">Location</label>
            <input type="text" className="form-control" id="recipient-name" disabled  defaultValue={location} {...register("location")}/>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label">Product Price</label>
            <input type="text" className="form-control" id="recipient-name"  disabled defaultValue={reseleprice} {...register("price")}/>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label">Buyer Phone Number</label>
            <input type="text" name="phone" className="form-control" id="recipient-name"{...register("phone")}/>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label">Buyer Metting Location</label>
            <input type="text" name="mettinglocation" className="form-control" id="recipient-name"   {...register("mettinglocation")}/>
          </div>
          <div className="modal-footer">
        <input type="submit" style={{ background: '#FB5B21',width:"500px",border:'none',color:'white',padding:'4px',borderRadius:'5px' }} classNameName="form-control btn-primary text-white btn-close w-100"  data-bs-dismiss="modal" aria-label="Close" value='submit'/>
       

      </div>
        </form>
      </div>
     
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Categoreymodal;