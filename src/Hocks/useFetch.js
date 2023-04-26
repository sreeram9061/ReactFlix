import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch=(url,custoumParams={})=>{
    const [data, setData] = useState([]);
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    const option={
        method:'get',
        baseURL:"https://api.themoviedb.org/3/",
        url,
        params:{
            api_key:"781863a3b657bab95db555e52c26a23b",
            ...custoumParams
        }
    }

    const{page,query}=custoumParams
    
    useEffect(()=>{
        const fetchData= async()=>{
            try{
              let {data}=await axios(option)
              setData(data);
              setLoading(false)
            }catch(error){
              setError(error.message)
              setLoading(false)
            }
        }
        fetchData()
    },[page,query,url])

    
    return [data,loading,error]
}