import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import { useAuth } from "../components/AuthContext";
import {
  Trash2,
  Plus,
  Minus,
  Lock,
  MapPin,
  Truck,
  CreditCard,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Cart = () => {
  const { isAuthenticated, openLogin, user } = useAuth();
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
  } = useCart();
  const navigate = useNavigate();

  const [checkoutStep, setCheckoutStep] = useState(0);
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    deliveryOption: "standard",
    deliveryInstructions: "",
    saveAddress: false,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateShippingForm = () => {
    const newErrors = {};
    if (!shippingInfo.fullName.trim())
      newErrors.fullName = "Full name is required";
    if (!shippingInfo.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(shippingInfo.email))
      newErrors.email = "Invalid email format";
    if (!shippingInfo.phone.trim())
      newErrors.phone = "Phone number is required";
    if (!shippingInfo.address.trim()) newErrors.address = "Address is required";
    if (!shippingInfo.city.trim()) newErrors.city = "City is required";
    if (!shippingInfo.state.trim()) newErrors.state = "State is required";
    if (!shippingInfo.zipCode.trim())
      newErrors.zipCode = "ZIP code is required";
    if (!shippingInfo.country.trim()) newErrors.country = "Country is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceedToShipping = () => {
    if (!isAuthenticated) {
      toast.error("Please login to complete your purchase");
      openLogin();
      return;
    }
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    setCheckoutStep(1);
  };

  const handleProceedToReview = () => {
    if (validateShippingForm()) {
      setCheckoutStep(2);
    } else {
      toast.error("Please fill in all required fields");
    }
  };

  const handleFinalCheckout = async () => {
    const loadingToast = toast.loading("Processing your order...");
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.dismiss(loadingToast);
      toast.success("🎉 Order placed successfully!", {
        duration: 4000,
        icon: "✅",
      });
      setCheckoutStep(3);
      clearCart();
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Failed to process order. Please try again.");
    }
  };

  const getShippingCost = () => {
    return shippingInfo.deliveryOption === "express" ? 15.0 : 5.0;
  };

  const renderInput = (
    label,
    name,
    type = "text",
    placeholder,
    required = true,
    colSpan = 1
  ) => (
    <div className={colSpan === 2 ? "md:col-span-2" : ""} key={name}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={shippingInfo[name]}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          errors[name] ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
      )}
    </div>
  );

  // Empty Cart View
  if (cartItems.length === 0 && checkoutStep === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">
            Your cart is empty
          </h2>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {checkoutStep === 0 && "Shopping Cart"}
        {checkoutStep === 1 && "Checkout - Shipping"}
        {checkoutStep === 2 && "Checkout - Review"}
        {checkoutStep === 3 && "Order Complete"}
      </h1>

      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        {["Cart", "Shipping", "Review", "Complete"].map((step, index) => (
          <React.Fragment key={step}>
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                checkoutStep >= index
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {checkoutStep > index ? <CheckCircle size={20} /> : index + 1}
            </div>
            <span
              className={`ml-2 text-sm ${
                checkoutStep >= index
                  ? "text-green-600 font-semibold"
                  : "text-gray-400"
              }`}
            >
              {step}
            </span>
            {index < 3 && (
              <div
                className={`w-12 h-1 mx-2 ${
                  checkoutStep > index ? "bg-green-500" : "bg-gray-200"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step 0: Cart Items */}
      {checkoutStep === 0 && (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
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
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
            <div className="flex justify-end">
              <button
                onClick={clearCart}
                className="px-4 py-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-50"
              >
                Clear Cart
              </button>
            </div>
          </div>
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
            {!isAuthenticated && (
              <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
                <Lock size={18} />
                <span className="text-sm">Please login to checkout</span>
              </div>
            )}
            <button
              onClick={handleProceedToShipping}
              disabled={!isAuthenticated || cartItems.length === 0}
              className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 ${
                isAuthenticated && cartItems.length > 0
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {!isAuthenticated && <Lock size={18} />}
              {isAuthenticated ? "Proceed to Shipping" : "Login to Checkout"}
              {isAuthenticated && <ArrowRight size={18} />}
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full mt-3 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      {/* Step 1: Shipping Form */}
      {checkoutStep === 1 && (
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="text-green-500" size={24} />
              <h2 className="text-2xl font-bold">Shipping Information</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {renderInput("Full Name", "fullName", "text", "username")}
              {renderInput("Email", "email", "email", "user@example.com")}
              {renderInput("Phone Number", "phone", "tel", "+855 123-4567")}
              {renderInput("Country", "country", "text", "Cambodia")}
              {renderInput(
                "Street Address",
                "address",
                "text",
                "123 Main Street",
                true,
                2
              )}
              {renderInput(
                "Apartment, Suite, etc.",
                "addressLine2",
                "text",
                "Apt 4B",
                false,
                2
              )}
              {renderInput("City", "city", "text", "Phnom Penh")}
              {renderInput("State/Province", "state", "text", "NY")}
              {renderInput("ZIP/Postal Code", "zipCode", "text", "10001")}

              {/* Delivery Options */}
              <div className="md:col-span-2 mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  <Truck className="inline mr-2" size={18} /> Delivery Option
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  <label
                    className={`flex items-center p-4 border rounded-lg cursor-pointer ${
                      shippingInfo.deliveryOption === "standard"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="deliveryOption"
                      value="standard"
                      checked={shippingInfo.deliveryOption === "standard"}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <div>
                      <p className="font-semibold">Standard Delivery</p>
                      <p className="text-sm text-gray-500">
                        5-7 business days - $5.00
                      </p>
                    </div>
                  </label>
                  <label
                    className={`flex items-center p-4 border rounded-lg cursor-pointer ${
                      shippingInfo.deliveryOption === "express"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="deliveryOption"
                      value="express"
                      checked={shippingInfo.deliveryOption === "express"}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <div>
                      <p className="font-semibold">Express Delivery</p>
                      <p className="text-sm text-gray-500">
                        1-2 business days - $15.00
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Delivery Instructions */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Instructions (Optional)
                </label>
                <textarea
                  name="deliveryInstructions"
                  value={shippingInfo.deliveryInstructions}
                  onChange={handleInputChange}
                  placeholder="Gate code, leave at door, etc."
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Save Address */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="saveAddress"
                    checked={shippingInfo.saveAddress}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-green-500"
                  />
                  <span className="text-sm text-gray-700">
                    Save this address for future orders
                  </span>
                </label>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setCheckoutStep(0)}
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <ArrowLeft size={18} /> Back to Cart
              </button>
              <button
                onClick={handleProceedToReview}
                className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Review Order <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Review Order */}
      {checkoutStep === 2 && (
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-green-500" size={20} />
                <h3 className="text-xl font-bold">Shipping Details</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold">{shippingInfo.fullName}</p>
                <p>{shippingInfo.address}</p>
                {shippingInfo.addressLine2 && (
                  <p>{shippingInfo.addressLine2}</p>
                )}
                <p>
                  {shippingInfo.city}, {shippingInfo.state}{" "}
                  {shippingInfo.zipCode}
                </p>
                <p>{shippingInfo.country}</p>
                <p className="pt-2">{shippingInfo.phone}</p>
                <p>{shippingInfo.email}</p>
                {shippingInfo.deliveryInstructions && (
                  <p className="pt-2 text-sm italic">
                    Note: {shippingInfo.deliveryInstructions}
                  </p>
                )}
              </div>
              <button
                onClick={() => setCheckoutStep(1)}
                className="mt-4 text-blue-500 hover:underline text-sm"
              >
                Edit Shipping Info
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Truck className="text-green-500" size={20} />
                <h3 className="text-xl font-bold">Delivery Method</h3>
              </div>
              <p className="font-semibold capitalize">
                {shippingInfo.deliveryOption} Delivery
              </p>
              <p className="text-gray-600">
                {shippingInfo.deliveryOption === "express"
                  ? "1-2 business days"
                  : "5-7 business days"}
              </p>
              <p className="text-lg font-bold mt-2">
                ${getShippingCost().toFixed(2)}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Order Items</h3>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border-b pb-4"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-gray-500">{item.quantity}g</p>
                    </div>
                    <p className="font-bold">
                      ${(item.price * (item.quantity / 100)).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>${getShippingCost().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-2 border-t">
                  <span>Total:</span>
                  <span>
                    ${(getTotalPrice() + getShippingCost()).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCheckoutStep(1)}
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <ArrowLeft size={18} /> Back to Shipping
            </button>
            <button
              onClick={handleFinalCheckout}
              className="flex items-center gap-2 px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 font-bold"
            >
              <CreditCard size={18} /> Place Order
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Order Complete */}
      {checkoutStep === 3 && (
        <div className="max-w-lg mx-auto text-center py-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <CheckCircle className="text-green-500 mx-auto mb-4" size={80} />
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              Order Confirmed!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase. We've sent a confirmation email to{" "}
              <strong>{shippingInfo.email}</strong>
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-500">Estimated Delivery</p>
              <p className="font-bold text-lg">
                {shippingInfo.deliveryOption === "express"
                  ? "1-2 business days"
                  : "5-7 business days"}
              </p>
            </div>
            <button
              onClick={() => navigate("/")}
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-bold"
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
