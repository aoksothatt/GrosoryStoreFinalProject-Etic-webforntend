import React from "react";
import { useCart } from "../components/CartContext";
import { useAuth } from "../components/AuthContext";
import { Trash2, Plus, Minus, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Cart = () => {
  const { isAuthenticated, openLogin } = useAuth();
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
  } = useCart();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    // Check if user is authenticated
    if (!isAuthenticated) {
      toast.error("Please login to complete your purchase");
      openLogin(); // This will open your login/signup modal
      return; // Stop here if not logged in
    }

    // Check if cart is empty
    if (cartItems.length === 0) {
      toast.error("Your cart is empty", {
        duration: 3000,
      });
      return;
    }

    // Proceed with checkout only if authenticated AND cart has items
    const loadingToast = toast.loading("Processing your order...");

    try {
      // Simulate API call for checkout
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.dismiss(loadingToast);
      toast.success(
        "🎉 Order placed successfully! Thank you for your purchase!",
        {
          duration: 4000,
          icon: "✅",
        }
      );
      clearCart();
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Failed to process order. Please try again.");
    }
  };

  // Handle quantity updates
  const handleIncrease = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      updateQuantity(itemId, item.quantity + 1);
    }
  };

  const handleDecrease = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      updateQuantity(itemId, item.quantity - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">
            Your cart is empty
          </h2>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
              >
                {/* Product Image */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 100)}
                    className="bg-gray-200 hover:bg-gray-300 p-1 rounded"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-bold">{item.quantity}g</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 100)}
                    className="bg-gray-200 hover:bg-gray-300 p-1 rounded"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                {/* Remove Button */}

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}

            {/* Clear Cart Button */}
            <div className="flex justify-end">
              <button
                onClick={clearCart}
                className="px-4 py-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-50 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>
                  Items (
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                  ):
                </span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>$5.00</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>${(getTotalPrice() + 5).toFixed(2)}</span>
              </div>
            </div>

            {/* Authentication Warning */}
            {!isAuthenticated && (
              <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
                <Lock size={18} />
                <span className="text-sm">
                  Please create an account or login to checkout
                </span>
              </div>
            )}

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              disabled={!isAuthenticated || cartItems.length === 0}
              className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors ${
                isAuthenticated && cartItems.length > 0
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {!isAuthenticated && <Lock size={18} />}
              {isAuthenticated
                ? cartItems.length > 0
                  ? "Proceed to Checkout"
                  : "Cart is Empty"
                : "Login to Checkout"}
            </button>

            {/* Continue Shopping Button */}
            <button
              onClick={() => navigate("/")}
              className="w-full mt-3 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
