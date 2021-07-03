import React, { useState } from "react"
import { navigate } from "gatsby"


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}


export default function ContactForm() {
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(loading)
    const form = e.target
    fetch('/thanks/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state
      }),
    })
    .then(() => navigate(form.getAttribute('action')))
    .catch((error) => alert(error))
  }

  return (
    <>
    <div className=" w-50 contactFormCard">
    
       
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            <input type="hidden" name="bot-field" onChange={handleChange} />
          </label>
        </p>

        <h3>Get In Touch</h3>

  <form
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      >  
        <p>
          <label htmlFor="name">Name: </label>
          <br />
          <input type="text" id="name" name="name" onChange={handleChange} required />
        </p>  
      
          <p>
        
          <label htmlFor="email">Email: </label>
          <br />
          <input type="email" id="email" name="email" onChange={handleChange} required />
       </p>
        

        <p>
          <label htmlFor="message">Message: </label>
          <br />
          <textarea 
            rows="3"
            id="message"
            name="message"           
            onChange={handleChange}
            size="lg"
            required
            />
         </p>
       
<div className="w-100 d-flex">
<button className="w-25 formBtn" type="submit" disabled={loading} >Submit</button>
</div>
         </form>
        

     

     
</div>

    </>
  )
}
