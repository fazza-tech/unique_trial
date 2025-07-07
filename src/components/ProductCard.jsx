const ProductCard = ({product}) => {

   const {image,title,price} = product

    return(
        <div className="bg-white shadow rounded-xl p-4 flex flex-col">
            <img className="w-48 h-48 object-contain mx-auto" src={image} alt="" />
            <h2>{title}</h2>
            <p>{price}</p>
        </div>
    )
}

export default ProductCard