import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [data,setdata] = useState(null)

    useEffect(()=> {
        fetchData()
    },[url])
    
    async function fetchData(){
        const res = await fetch(api)
        const json = await res.json

        setdata(json)
    }
    return { data }
}

export default useFetch