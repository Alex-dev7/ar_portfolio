import {useForm }from "react-hook-form"

export default function ContactForm() {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const onSubmit = (formData) => {
        window.location.href = `mailto:rusualexei1995@gmail.com?subject=${formData.subject}&body=${formData.message}`
    }

     console.log(errors)
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", {required: "This is required."})} placeholder="name" />
        <input {...register("email", {required: "This is required."})} placeholder="email"/>
        <input {...register("subject", {required: "This is required."})} placeholder="subject" />
        <input {...register("message", {required: "This is required.", minLength: 4})} placeholder="message"/>
        <input type="submit" />
      </form>
    );
  }