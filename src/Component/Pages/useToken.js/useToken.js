import { useEffect, useState } from "react"

const useToken=email=>{
    const [token,setToken]=useState()
    useEffect(()=>{
        if(email){
        fetch(`https://carreseller-server-side.vercel.app/jwt?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
          if(data.accesstoken){
            localStorage.setItem('accessToken',data.accesstoken)
         setToken(data.accesstoken)
          }
  
        })
        }
    },[email])
    return [token]
}
export default useToken;