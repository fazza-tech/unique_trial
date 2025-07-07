import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import { Link } from "react-router-dom"

const Body = () => {

    const [list, setList] =useState([])

    useEffect(()=> {
        fetchData()
    },[])

    async function fetchData(){
        const data = await fetch("https://fakestoreapi.com/products")
        const json = await data.json()
        setList(json)
        console.log(json)

    }

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {list.map( item =>(
                <Link key={item.id} to={`/product/${item.id}`}>
                    <ProductCard product={item} />
                </Link>
            ))}
        </div>
    )
}

export default Body