import React, {Component}       from 'react';
import Banner      from "../banner";
import Footer      from "../footer";
import ContactForm from "../contact-form";

class ContactPage extends Component{

  render() {
    const theme = 'contact';
    return (
      <>
        <Banner theme={theme}/>
        <ContactForm theme={theme}/>
        <Footer/>
      </>
    )
  }
}

export default ContactPage;