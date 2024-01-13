import React,{useState} from 'react'

const ContactForm = () => {
    const[formData,setFormData]=useState(
        {
            name:"",
            email:"",
            petname:"",
            pettype:"",
            phone:"",
            message:'',
        }
    )
    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormData((prev)=>{
            return(
                {...prev,[name]:value}
            )
        })


    }
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <>
     <form onSubmit={handleSubmit} className="">
      
     <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="block px-6 md:py-3 py-2 rounded-xl border  text-gray-700  w-full md:mb-4 mb-2 bg-amber-100"
        placeholder="Your Name"
      />
      <input
        type="text"
        name="petname"
        value={formData.name}
        onChange={handleChange}
        className="block px-6 md:py-3 py-2 rounded-xl border  text-gray-700  w-full md:mb-4 mb-2 bg-amber-100"
        placeholder="Your pets name"
      />
        <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="block px-6 md:py-3 py-2 rounded-xl border  text-gray-700  w-full md:mb-4 mb-2 bg-amber-100"
        placeholder="Your Email"
      />
           <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="block px-6 md:py-3 py-2 rounded-xl border  text-gray-700  w-full md:mb-4 mb-2 bg-amber-100"
        placeholder="Phone Number"
      />
        <select
          name="pettype"
          value={formData.pettype}
          onChange={handleChange}
          className="block px-6 md:py-3 py-2 rounded-xl border text-gray-700 w-full md:mb-4 mb-2 bg-amber-100"
        >
          <option value="" >Select Pet Type</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
           <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        cols="10"
        rows="10"
        className="w-full bg-amber-100 px-6 rounded-xl md:py-2 border  text-gray-700 "
        placeholder="Message"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-amber-500 text-white px-4 md:py-3 py-2 rounded-lg md:mt-5 mt-2"
      >
        lets connect
      </button>

     </form>
    </>
  )
}

export default ContactForm