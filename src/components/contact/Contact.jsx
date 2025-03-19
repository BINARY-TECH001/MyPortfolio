import "aos/dist/aos.css";
import "./contact.css";
import AOS from "aos";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { toast } from "sonner";

// ..
AOS.init({
  duration: 2000,
});


const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_i2mdb46', 'template_w9y1llc', form.current, 'cuHmTJVWYL4wlXr37')

  //   e.target.reset()
  // };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable inputs during submission
    try {
      const result = await emailjs.sendForm('service_i2mdb46', 'template_w9y1llc', form.current, 'cuHmTJVWYL4wlXr37');
      console.log(result.text);
      if (result.text === "OK") {
        console.log('Calling toast.success');
        window.alert("sent")
        toast.success('Message sent successfully!');
      }
      e.target.reset();
      setIsSubmitting(false); // Re-enable inputs on success
    } catch (error) {
      console.log(error);
      toast.error('Failed to send message. Please try again.');
      setIsSubmitting(false); // Re-enable inputs on error
    }

  };

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm('service_i2mdb46', 'template_w9y1llc', form.current, 'cuHmTJVWYL4wlXr37')
  //     .then((result) => {
  //       console.log(result.text);
  //       toast.success('Message sent successfully!');
  //       e.target.reset(); // Reset only on success
  //     })
  //     .catch((error) => {
  //       console.log(error.text);
  //       toast.error('Failed to send message. Please try again.');
  //     });
  // };

  return (
    <section id="contact" data-aos="zoom-in-down">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="underline"></div>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>mubarakbdlrf@gmail.com</h5>
            <a href="mailto:mubarakbdlrf@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Abdulrafiu Mubarak</h5>
            <a href="https://m.me/" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+234-9059-3436-02</h5>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=2349059343602">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary' disabled={isSubmitting}> {isSubmitting ? "Sending..." : "Send Message"} </button>
        </form>

        <button
          className="toast-button"
          onClick={() => {
            console.log("clicked")
            toast('A Sonner toast', {
              className: 'my-classname',
              description: 'With a description and an icon',
              duration: 5000,
              icon: <MyIcon />,
            });
          }}
        >
          Render toast
        </button>
      </div>
    </section>
  )
}

function MyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
      <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
      <path
        fillRule="evenodd"
        d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Contact