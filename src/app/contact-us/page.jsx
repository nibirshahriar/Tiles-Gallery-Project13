import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-gray-900">Contact Us</h1>

        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Have questions about our premium tile collections? We would love to
          hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#2A3C50] text-xl" />
              <span>support@tilesgallery.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#2A3C50] text-xl" />
              <span>+880 1234-567890</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#2A3C50] text-xl" />
              <span>Rajshahi, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2A3C50]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2A3C50]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2A3C50]"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2A3C50]"
            />

            <button
              type="submit"
              className="w-full bg-[#2A3C50] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
