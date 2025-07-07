import { useSelector, useDispatch } from "react-redux"
import { removeFromCart, addToCart, clearCart } from "../features/cartSlice"

const Cart = () => {
    const items = useSelector(state => state.cart.items)
    const dispatch = useDispatch()

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    if (items.length === 0) {
        return <h1 className=" mt-10">Cart is empty</h1>
    }

    return (
        <div className="max-w-2xl mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            {items.map(item => (
                <div key={item.id} className="flex items-center justify-between bg-white shadow p-4 mb-2 rounded">
                    <div className="flex items-center">
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-contain mr-4" />
                        <div>
                            <h2 className="font-semibold">{item.title}</h2>
                            <p>${item.price}</p>
                            <div className="flex items-center mt-2">
                                
                                <span className="mx-2">{item.quantity}</span>
                                <button
                                    className="px-2 py-1 bg-gray-200 rounded"
                                    onClick={() => dispatch(addToCart(item))}
                                >+
                                </button>
                            </div>
                        </div>
                    </div>
                    <button
                        className="px-3 py-1 bg-red-500 text-white rounded"
                        onClick={() => dispatch(removeFromCart(item.id))}
                    >
                        Remove
                    </button>
                </div>
            ))}
            <div className="flex justify-between items-center mt-6">
                <span className="text-xl font-bold">Total: ${total.toFixed(2)}</span>
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                    onClick={() => dispatch(clearCart())}
                >
                    Clear Cart
                </button>
            </div>
        </div>
    )
}

export default Cart