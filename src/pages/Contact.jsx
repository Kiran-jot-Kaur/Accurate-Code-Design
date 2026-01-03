import { useState } from "react";
import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Thank you! We will contact you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <PageWrapper>
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-gray-600">
            Get in touch with ACD Tech for course details, internships, or
            general queries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Contact Information</h2>
            <p className="mb-6 text-gray-600">
              We are happy to help you with any questions related to our
              programs and training approach.
            </p>

            <ul className="space-y-4 text-gray-600 border-l-4 border-white pl-4">
              <li>
                📍 <strong className="text-gray-500">Location:</strong> Mohali,
                Punjab, India
              </li>
              <li>
                📧 <strong className="text-gray-500">Email:</strong>{" "}
                info@acdtech.in
              </li>
              <li>
                📞 <strong className="text-gray-500">Phone:</strong> +91
                XXXXXXXXXX
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="rounded-lg border p-8">
            <h2 className="mb-6 text-2xl font-semibold">Send Us a Message</h2>

            {/* Name */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="mb-1 block text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2"
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-md bg-gray-600 px-6 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors duration-200"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
