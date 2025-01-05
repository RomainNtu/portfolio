import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';
import emailjs from 'emailjs-com';
import contact from '../images/contact.png';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yi49puj', 'template_faxewul', form.current, 'dV0YQl7ZioDPt9sxc')
      .then((result) => {
          console.log(result.text);
          alert('Message envoyé avec succès !');
      }, (error) => {
          console.log(error.text);
          alert('Une erreur est survenue, veuillez réessayer.');
      });
  };

  const handleScroll = (e) => {
    if (e.deltaY < 0) {
      scroller.scrollTo('projects', {
        duration: 500,
        smooth: true,
      });
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-16 bg-gray-200 text-gray-800 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      onWheel={handleScroll}
    >
      <h2 className="text-4xl font-bold mb-6">Contactez-moi</h2>
      <p className="text-lg max-w-3xl mx-auto mb-8">
        Si vous êtes intéressé par mes projets ou souhaitez discuter d'une collaboration, n'hésitez pas à me contacter !
      </p>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:block">
          <img src={contact} alt="Contact Illustration" className="w-400 h-400 object-contain" />
        </div>
        <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-gray-700 font-bold mb-2">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left text-gray-700 font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;