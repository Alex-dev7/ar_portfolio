import { useForm }from "react-hook-form"
import './contact.scss'
import { ToggleContext } from "../../context/ToggleContext"
import { useContext } from 'react';

export default function ContactForm() {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const { toggle, changeToggle } = useContext(ToggleContext);

    const onSubmit = (formData) => {
        window.location.href = `mailto:rusualexei1995@gmail.com?subject=${formData.subject}&body=${formData.message}, (${formData.email})`
        changeToggle()
    }


 
    return (
      <div className="contact-container" id="contact"   style={{opacity: toggle ?  "1" : "0" }} >
          <span className="close-button" onClick={changeToggle}>x</span>
          <p>contact/</p>
          <form onSubmit={handleSubmit(onSubmit)}>
              {/* <h4>Please do not hesitate to contact me!</h4> */}
              <div>
                  <input {...register("name", {required: "This is required."})} placeholder="name" />
                  <input {...register("email")} placeholder="email"/>            
              </div>
              <input {...register("subject", {required: "This is required."})} placeholder="subject" />
              <textarea {...register("message", {required: "This is required.", minLength: 4})} placeholder="message"/>
              <input type="submit" />
          </form>      
          <div className="contact-info-container">
              <p>
                  <span>Email:</span> rusualexei1995@gmail.com
              </p>
          
          </div>
      </div>

    );
  }
 