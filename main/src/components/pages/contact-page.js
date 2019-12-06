import React       from 'react';
import Banner      from "../banner";
import Footer      from "../footer";
import ContactForm from "../contact-form";

const ContactPage = () => {
  const theme = 'contact';
  return (
    <>
    <Banner theme={theme}/>
    <ContactForm theme={theme}/>
    <Footer/>
    </>
  )
};

export default ContactPage;