import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import Banner from '../components/Banner';
import ContactForm from '../components/ContactForm';


function ContactPage() {
 
  return (
    <div>
      <Banner />
      <div className="sticky top-0 z-50 mt-20 md:mt-12">
        <Header />
      </div>
     <div>
        <ContactForm />
     </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ContactPage;
