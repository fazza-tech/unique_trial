const ProductCard = ({product}) => {

   const {image,title,price} = product

    return(
        <div className="flex flex-col bg-white shadow rounded p-4 ">
            <img className="w-48 h-48 object-contain mx-auto" src={image} alt="" />
            <h2 className="font-semibold">{title}</h2>
            <p className="font-bold">{"$"+price}</p>
        </div>
    )
}

export default ProductCard