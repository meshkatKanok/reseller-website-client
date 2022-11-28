import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Loading from '../../Loading/Loading';
 


const AddproductCard = () => {
  const date=new Date()
  const minutes=date.getMinutes()
  const hours=date.getHours()
  let ampm = hours >= 12 ? 'pm' : 'am';
 let  h = hours % 12;
 let th = hours ? hours : 12;  
 let mi = minutes < 10 ? '0'+minutes : minutes;
  const strTime = h + ':' + mi + ' ' + ampm;
  
 




  
  const { register,reset, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
    console.log( data);
    const {name:productname,categorey,
      condition,
      discription,
      mobile,
      price,
      location,
      resellerprice



    }=data
    const hostImg="09e31f3e45976bbd5dc75e4b28575da9"
    const image=data.image[0]
    const formData = new FormData();
        formData.append('image',image);
         const url=`https://api.imgbb.com/1/upload?&key=${hostImg}`
         fetch(url,{
          method:'POST',
          body:formData
          
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data.data);
          <Loading/>
          const {url}=data.data
          const postinfo={
           productname,
            categorey,
            condition,
            discription,
            mobile,
            price,
            location,
            url,
            resellerprice,
            date:strTime
      
          }
          reset()
          if(data.success){
            
            toast.success('successfully Added')
         }
         fetch(`https://carreseller-server-side.vercel.app/addpruduct`,{
          method:'POST',
          headers:{
              'content-type':'application/json',
              // authorization:`bearer ${localStorage.getItem('accesstoken')}`

          },
          body:JSON.stringify(postinfo)
      })
       .then(res=>res.json())
       .then(data=>{
        if(!data){
          <Loading/>
        }
       })
        
       
      })
  };
    return (
        <div>
          <h1 className='text-center'>ADD A NEW PRODUCT</h1>
             <div className="card mx-auto" style={{width:"600px"}}  >
  <div className="card-body">
    
  <form onSubmit={handleSubmit(onSubmit)}>
  
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form6Example1" className="form-control" {...register("name")}  />
        <label className="form-label" for="form6Example1">Product name</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form6Example2" className="form-control" {...register("price")}  />
        <label className="form-label" for="form6Example2">Product Price</label>
      </div>
    </div>
  </div>
  <div className="mb-4 mt-3">
  <label className="form-label select-label">Condition Type</label>
                    <div className="form-outline flex-fill mb-0">      
                  <select {...register("condition")} className="select  form-control-lg w-100">
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                   
                   
                  </select>
                       
                    </div>
                  </div>

 
  <div className="form-outline mb-4">
    <input type="text" id="form6Example3" className="form-control" {...register("mobile")} />
    <label className="form-label" for="form6Example3">Mobile Number</label>
  </div>
  <div className="form-outline mb-4">
    <input type="text" id="form6Example3" className="form-control" {...register("resellerprice")} />
    <label className="form-label" for="form6Example3">Resellerprice</label>
  </div>
 
  <div className="form-outline mb-4">
    <input type="text" id="form6Example4" className="form-control" {...register("location")} />
    <label className="form-label" for="form6Example4">Location</label>
  </div>
 
  <div className="form-outline mb-4">
    <input type="text" id="form6Example5" className="form-control" {...register("categorey")} />
    <label className="form-label" for="form6Example5">Product Categorey</label>
  </div>
  <div className='mb-5'>
              <h6>Add a photo</h6>
              <input type="file" id="form3Example1cg" className="form-control form-control-lg"  {...register("image")} />
              </div>
  <div className="form-outline mb-4">
    <textarea {...register("discription")} className="form-control" id="form6Example7" rows="4"></textarea>
    <label className="form-label" for="form6Example7">Description</label>
  </div>

  <input type="submit" className="btn btn-primary border-0 btn-block mb-4 w-100" style={{background:'#eb7434'}} value='ADD A PRODUCT'/>
</form>
   
  </div>
</div>


            
        </div>
    );
};

export default AddproductCard;