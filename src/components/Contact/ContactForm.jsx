import {set, useForm }from "react-hook-form"
import './contact.scss'


export default function ContactForm({toggle, setToggle}) {
    const { register, handleSubmit, formState: {errors} } = useForm()

    const onSubmit = (formData) => {
        window.location.href = `mailto:rusualexei1995@gmail.com?subject=${formData.subject}&body=${formData.message}, (${formData.email})`
        setToggle(!toggle)
    }


    //  console.log(errors)
    return (
      <div className="contact-container" id="contact"   style={{transform: toggle ?  "translateX(0%)" : "translateX(100%)" }} >
        <button className="close-button" onClick={() => setToggle(!toggle)}>X</button>
        <p>contact/</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4>Let's Connect!👋</h4>
          <div>
            <input {...register("name", {required: "This is required."})} placeholder="name" />
            <input {...register("email")} placeholder="email"/>            
          </div>
          <input {...register("subject", {required: "This is required."})} placeholder="subject" />
          <textarea {...register("message", {required: "This is required.", minLength: 4})} placeholder="message"/>
          <input type="submit" />
        </form>        
      </div>

    );
  }
 