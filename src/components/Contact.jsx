import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [submitState, setSubmitState] = useState({ status: 'idle', message: '' });

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = Object.fromEntries(formData.entries());
    payload._subject = 'New enquiry from Tip Top Tailors website';
    payload._captcha = 'false';

    setSubmitState({ status: 'submitting', message: '' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/tiptoptailors.main@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }

      form.reset();
      setSubmitState({
        status: 'success',
        message: 'Thank you for writing to us. Our team will respond within one business day.',
      });
    } catch (error) {
      setSubmitState({
        status: 'error',
        message: 'Unable to send your message right now. Please try again in a moment.',
      });
    }
  };

  return (
  <main>

    
    <section className="contact-hero" id="contact-hero">
      <p className="contact-hero-tag">GET IN TOUCH</p>
      <h1 className="contact-hero-title">We'd Love to<br/><em>Hear From You</em></h1>
      <p className="contact-hero-sub">Every great garment begins with a conversation.</p>
    </section>

    
    <div className="contact-main">

      
      <div className="contact-info" id="contact-info">
        <div className="section-tag" style={{textAlign: "left", marginBottom: "12px", }}>OUR ATELIER</div>
        <h2 className="contact-info-title">Visit Us or<br/><em>Write to Us</em></h2>
        <p className="contact-info-sub">Our doors (and inbox) are always open.</p>

        <div className="contact-cards">

          <div className="contact-card" id="contact-card-address">
            <div className="contact-card-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="contact-card-body">
              <div className="contact-card-label">ATELIER ADDRESS</div>
              <div className="contact-card-value">
                New Tip Top Tailors , Navrangpura,<br/>
                Near National collage , Ahmedabad , 380009<br/>
                India
              </div>
            </div>
          </div>

          <div className="contact-card" id="contact-card-phone">
            <div className="contact-card-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div className="contact-card-body">
              <div className="contact-card-label">TELEPHONE</div>
              <div className="contact-card-value">
                <a href="tel:+91 9924124507">+91 9924124507</a><br/>
                <a href="tel:+919820001234">  </a>
              </div>
            </div>
          </div>

          <div className="contact-card" id="contact-card-email">
            <div className="contact-card-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="contact-card-body">
              <div className="contact-card-label">EMAIL</div>
              <div className="contact-card-value">
                <a href="mailto:tiptoptailors.main@gmail.com">tiptoptailors.main@gmail.com</a><br/>
            
              </div>
            </div>
          </div>

          <div className="contact-card" id="contact-card-hours">
            <div className="contact-card-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div className="contact-card-body">
              <div className="contact-card-label">ATELIER HOURS</div>
              <div className="contact-card-value">
                <table className="hours-table">
                  <tbody>
                    <tr><td>Monday – Friday</td><td className="hours-open">10:00 AM – 8:00 PM</td></tr>
                    <tr><td>Saturday</td><td className="hours-open">10:00 AM – 8:00 PM</td></tr>
                    <tr><td>Sunday</td><td style={{color: "var(--text-light)"}}>By Appointment</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

        
        <a
          className="map-section map-link"
          id="map-section"
          aria-label="Open Tip Top Tailor location in Google Maps"
          href="https://maps.app.goo.gl/xjjvSR4R5rw2fJHQ6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="map-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className="map-content">
            <div className="contact-card-label">LOCATION</div>
            <span className="map-label">TIP TOP TAILOR</span>
            <p className="map-address-text">New Tip Top Tailors, Navrangpura, Ahmedabad</p>
          </div>
        </a>

      </div>

      
      <div className="contact-form-wrap reveal-up" id="contact-form-wrap">
        <h2 className="form-title">Send Us a Message</h2>
        <p className="form-sub">We typically respond within one business day.</p>

        <form id="contact-form" noValidate onSubmit={handleContactSubmit}>
          <div className="form-grid">

            <div className="form-group">
              <label className="form-label" htmlFor="cf-name">Full Name *</label>
              <input className="form-input" type="text" id="cf-name" name="name" placeholder="Om Vaghela" required autoComplete="name"/>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="cf-email">Email Address *</label>
              <input className="form-input" type="email" id="cf-email" name="email" placeholder="omvaghela95@email.com" required autoComplete="email"/>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="cf-phone">Phone Number</label>
              <input className="form-input" type="tel" id="cf-phone" name="phone" placeholder="+91 63525 38594" autoComplete="tel"/>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="cf-enquiry">Enquiry Type *</label>
              <select className="form-select" id="cf-enquiry" name="enquiry" required>
                <option value="" disabled>Select enquiry type</option>
                <option value="bespoke-suit">Bespoke Suit</option>
                <option value="bespoke-shirt">Bespoke Shirt</option>
                <option value="outerwear">Outerwear / Coat</option>
                <option value="pants">Pants</option>
                <option value="accessories">Accessories</option>
                <option value="consultation">Book a Consultation</option>
                <option value="alteration">Alteration / Repair</option>
                <option value="gift-card">Gift Card</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group full">
              <label className="form-label" htmlFor="cf-message">Your Message *</label>
              <textarea className="form-textarea" id="cf-message" name="message" placeholder="Tell us about your requirements, preferred fabric, fit, occasion, or any questions you might have…" required></textarea>
            </div>

            <div className="form-group full">
              <label className="form-label" htmlFor="cf-occasion">Occasion / Event Date</label>
              <input className="form-input" type="text" id="cf-occasion" name="occasion" placeholder="e.g. Wedding on 15 March 2025"/>
            </div>

          </div>

          <div className="form-submit-row">
            <p className="form-consent">By submitting this form you agree to our Privacy Policy. We will use your details solely to respond to your enquiry.</p>
            <button type="submit" className="btn-submit-contact" id="cf-submit" disabled={submitState.status === 'submitting'}>
              {submitState.status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </div>

          {submitState.status !== 'idle' && (
            <div className={`form-success-msg show ${submitState.status === 'error' ? 'error' : ''}`} role="alert">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <p>{submitState.message}</p>
            </div>
          )}
        </form>
      </div>

    </div>

    
    <section className="contact-strip" id="contact-strip">
      <div className="section-tag" style={{marginBottom: "12px", }}>READY TO BEGIN?</div>
      <h2 className="contact-strip-title">Start Your Bespoke Journey Today</h2>
      <p className="contact-strip-sub">From first consultation to final fitting — every step, we are with you.</p>
      <Link to="/customise" className="btn-primary" id="contact-cta-customise">CUSTOMISE YOUR GARMENT</Link>
    </section>

  </main>
  );
}
