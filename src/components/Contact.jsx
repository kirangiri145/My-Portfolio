import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formURL = "https://getform.io/f/anlqjqza";
    const formDataToSend = new FormData();

    for (const key in data) {
      formDataToSend.append(key, data[key]);
    }

    try {
      const response = await fetch(formURL, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        toast.success("Your Message has been sent! 🎉");
        reset(); // Clears the form after successful submission
      } else {
        toast.error("Something went wrong! Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit. Please check your connection.");
    }
  };

  return (
    <div name="Contacts" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <div className="text-left mb-6">
        <h1 className="text-3xl font-bold mb-2">Contact Me</h1>
        <p className="text-gray-600">Please fill out the form below to contact me.</p>
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-400 p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-center font-bold mb-4">Send Your Message Here</h1>

          <input
            {...register("name", { required: "This field is required" })}
            type="text"
            placeholder="Full Name"
            className="p-3 border rounded-md w-full mb-3"
          />
          {errors.name && <span className="text-red-600">{errors.name.message}</span>}

          <input
            {...register("email", { required: "This field is required" })}
            type="email"
            placeholder="Email Address"
            className="p-3 border rounded-md w-full mb-3"
          />
          {errors.email && <span className="text-red-600">{errors.email.message}</span>}

          <input
            {...register("phone", { required: "This field is required" })}
            type="tel"
            placeholder="Phone Number"
            className="p-3 border rounded-md w-full mb-3"
          />
          {errors.phone && <span className="text-red-600">{errors.phone.message}</span>}

          <textarea
            {...register("message", { required: "This field is required" })}
            placeholder="Enter Your Query"
            className="p-3 border rounded-md w-full mb-3"
          ></textarea>
          {errors.message && <span className="text-red-600">{errors.message.message}</span>}

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
