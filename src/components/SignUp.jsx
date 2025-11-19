import React, { useState } from "react";

const Signup = ({ onClose, onSwitchToLogin, onSignup }) => {
  // Added onSignup prop
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
    if (message.text) setMessage({ text: "", type: "" });
  };

  // FIXED: Changed fullName to fullname to match state
  const validateForm = () => {
    if (!formData.fullname.trim()) {
      return "Please enter your full name";
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      return "Please enter a valid email";
    }
    if (formData.password.length < 6) {
      return "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      return "Passwords do not match";
    }
    if (!formData.agreeToTerms) {
      return "Please agree to terms and conditions";
    }
    return null;
  };

  // ADDED: Missing handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setMessage({ text: error, type: "error" });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const userData = {
        id: Date.now(),
        fullName: formData.fullname,
        email: formData.email,
        createdAt: new Date().toISOString(),
      };

      console.log("✅ New user registered:", userData);

      setMessage({
        text: "🎉 Account created successfully!",
        type: "success",
      });
      setIsSubmitting(false);

      if (onSignup) {
        onSignup({
          email: formData.email,
          name: formData.fullname,
        });
      } else {
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    }, 1500);
  };

  const handleSocialLogin = (provider) => {
    setIsSubmitting(true);
    setTimeout(() => {
      const userData = {
        id: Date.now(),
        email: `user@${provider}.com`,
        name: provider.charAt(0).toUpperCase() + provider.slice(1) + " User",
        createdAt: new Date().toISOString(),
      };

      console.log("✅ New user registered via", provider, ":", userData);

      setMessage({
        text: `🎉 Signed up with ${provider} successfully!`,
        type: "success",
      });
      setIsSubmitting(false);

      if (onSignup) {
        onSignup({
          email: userData.email,
          name: userData.name,
        });
      } else {
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 shadow-lg transition-all"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-8 mx-auto">
          <div className="bg-white rounded-t-lg p-8">
            <p className="text-center text-sm text-gray-400 font-light">
              Sign up with
            </p>
            <div className="flex items-center justify-center space-x-4 mt-3">
              <button
                onClick={() => handleSocialLogin("facebook")}
                disabled={isSubmitting}
                className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 disabled:opacity-50"
              >
                {/* Facebook SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-3"
                  viewBox="0 0 24 24"
                  fill="#1877F2"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </button>
              <button
                onClick={() => handleSocialLogin("google")}
                disabled={isSubmitting}
                className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 disabled:opacity-50"
              >
                {/* Google SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-3"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#fbc02d"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  />
                  <path
                    fill="#e53935"
                    d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                  />
                  <path
                    fill="#4caf50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  />
                  <path
                    fill="#1565c0"
                    d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                  />
                </svg>
                Google
              </button>
            </div>
          </div>

          <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
            <p className="text-center text-sm text-gray-500 font-light">
              Or sign up with credentials
            </p>

            {message.text && (
              <div
                className={`mt-4 p-3 rounded-md text-center text-sm ${
                  message.type === "error"
                    ? "bg-red-100 text-red-700"
                    : message.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {message.text}
              </div>
            )}

            <div className="mt-6">
              {/* Full Name Input - FIXED ID */}
              <div className="relative">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="fullname"
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullname}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Email Input */}
              <div className="relative mt-3">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>

              {/* Password Input  */}
              <div className="relative mt-3">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                  </svg>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-[-350px] inset-y-0 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>

              {/* Confirm Password Input  */}
              <div className="relative mt-3">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                  </svg>
                </div>
              </div>

              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all ${
                          formData.password.length < 6
                            ? "w-1/3 bg-red-500"
                            : formData.password.length < 10
                            ? "w-2/3 bg-yellow-500"
                            : "w-full bg-green-500"
                        }`}
                      />
                    </div>
                    <span className="text-xs text-gray-500">
                      {formData.password.length < 6
                        ? "Weak"
                        : formData.password.length < 10
                        ? "Medium"
                        : "Strong"}
                    </span>
                  </div>
                </div>
              )}

              {/* Terms and Conditions - FIXED checkbox ID */}
              <div className="mt-4 flex items-center text-gray-500">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="mr-3"
                  disabled={isSubmitting}
                />
                <div className="flex gap-20">
                  <label htmlFor="agreeToTerms" className="text-[10px]">
                    I agree to the Terms and Conditions
                  </label>
                  <button
                    type="button"
                    className="text-blue-500 hover:text-blue-600 font-semibold underline cursor-pointer"
                    onClick={onSwitchToLogin}
                    disabled={isSubmitting}
                  >
                    Sign in
                  </button>
                </div>
              </div>

              {/* Sign Up Button */}
              <div className="flex items-center justify-center mt-8">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`text-white py-2 px-4 uppercase rounded shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-indigo-500 hover:bg-indigo-600"
                  }`}
                >
                  {isSubmitting ? "Creating Account..." : "Sign up"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
