import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductDetail = () => {
  const [data, setData] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchData()
  }, [id])

  async function fetchData() {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const json = await res.json()
      setData(json)
    } catch (error) {
      console.error("Failed to fetch product:", error)
    }
  }

  if (!data) return <div className="text-center mt-10">Loading...</div>

  return (
    <div className="max-w-xl mx-auto bg-white shadow rounded-xl p-6 mt-8">
      <img className="w-64 h-64 object-contain mx-auto" src={data.image} alt={data.title} />
      <h2 className="text-xl font-semibold mt-4">{data.title}</h2>
      <h3 className="text-lg text-gray-700 mt-2">${data.price}</h3>
      <p className="mt-2 text-gray-600">{data.description}</p>
    </div>
  )
}

export default ProductDetail
