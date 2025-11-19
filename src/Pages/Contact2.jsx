import React from "react";

const Contact2 = () => {
  return (
    <div
      id="contact-section"
      className="pt-4 w-full h-auto flex flex-col md:flex-row justify-center gap-6 px-4"
    >
      {/* Contact Form */}
      <div className="w-full md:w-[500px] border-2 border-gray-400 rounded-2xl p-4">
        <h3 className="font-extrabold text-[20px]">Get in Touch</h3>
        <p className="text-neutral-500 text-[13px] mb-3">
          We'd love to hear you. Fill out the forms, and we'll get back to you
          as soon as possible.
        </p>

        {/* Name */}
        <label>Name</label>
        <input
          className="border border-gray-400 p-2.5 rounded-2xl w-full mb-2 placeholder:text-gray-400"
          type="text"
          placeholder="Your Name"
        />

        {/* Email */}
        <label>Email</label>
        <input
          className="border border-gray-400 p-2.5 rounded-2xl w-full mb-2 placeholder:text-gray-400"
          type="text"
          placeholder="Your Email"
        />

        {/* Subject */}
        <label>Subject</label>
        <input
          className="border border-gray-400 p-2.5 rounded-2xl w-full mb-2 placeholder:text-gray-400"
          type="text"
          placeholder="Subject"
        />

        {/* Message */}
        <label>Message</label>
        <textarea
          className="border border-gray-400 p-2.5 rounded-2xl w-full mb-2 placeholder:text-gray-400"
          rows="4"
          placeholder="Your message"
        ></textarea>

        {/* Button */}
        <button className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          Send Message
        </button>
      </div>

      {/* Location Section */}
      <div className="w-full md:w-[500px] border-2 border-gray-400 rounded-2xl p-4 space-y-4">
        <h3 className="font-extrabold text-[20px]">Our Location</h3>
        <p className="text-neutral-500 text-[13px]">
          Visit our store or contact us directly.
        </p>

        {/* Address */}
        <div className="flex items-start space-x-3">
          <span className="text-blue-600 text-lg">📍</span>
          <p className="text-sm text-gray-700">
            Phnom Penh,  
            Yothapol Khemarak Phoumin Blvd (271), St 160
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-3">
          <span className="text-green-600 text-lg">📞</span>
          <a
            href="tel:+85515468787"
            className="text-sm text-gray-700 hover:underline"
          >
            +855 015-46-8787
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-3">
          <span className="text-purple-600 text-lg">✉️</span>
          <a
            href="mailto:support23@gmail.com"
            className="text-sm text-gray-700 hover:underline"
          >
            support23@gmail.com
          </a>
        </div>

        {/* Map */}
        <div className="w-full h-[220px] sm:h-[260px] md:h-[290px] overflow-hidden rounded-xl border-none">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107846.96282512358!2d104.79675112058351!3d11.382208560795384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31094390cf91e51d%3A0xeeef1fc10417eebe!2sPrey%20ToTueng!5e0!3m2!1sen!2skh!4v1763483487809!5m2!1sen!2skh"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Responsive Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
