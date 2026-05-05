import React from 'react';
import { Link } from 'react-router-dom';

export default function Customise() {
  return (
  <main>

    
    <section
      style={{background: "var(--indigo)", padding: "100px max(32px,5vw) 80px", textAlign: "center", position: "relative", overflow: "hidden", }}>
      <div
        style={{position: "absolute", inset: "0", background: "repeating-linear-gradient(45deg,rgba(245,240,232,0.02) 0px,rgba(245,240,232,0.02) 1px,transparent 1px,transparent 32px)", }}>
      </div>
      <p
        style={{fontFamily: "var(--ff-sans)", fontSize: "10px", fontWeight: "600", letterSpacing: "0.26em", color: "var(--gold)", marginBottom: "18px", position: "relative", }}>
        BESPOKE TAILORING</p>
      <h1
        style={{fontFamily: "var(--ff-serif)", fontSize: "clamp(36px,5vw,64px)", fontWeight: "400", color: "var(--beige)", lineHeight: "1.1", marginBottom: "18px", position: "relative", }}>
        Begin Your Bespoke<br /><em style={{fontStyle: "italic", }}>Journey</em></h1>
      <p
        style={{fontFamily: "var(--ff-cormorant)", fontSize: "clamp(16px,2vw,20px)", fontStyle: "italic", color: "rgba(245,240,232,0.65)", maxWidth: "520px", margin: "0 auto 40px", lineHeight: "1.6", position: "relative", }}>
        Every great garment begins with a conversation. Reach out to our master tailors to start your commission.</p>
      <Link to="/contact" className="btn-light" style={{position: "relative", }} id="customise-cta">BOOK A CONSULTATION</Link>
    </section>

    
    <section style={{maxWidth: "1400px", margin: "0 auto", padding: "96px max(32px,5vw)", }}>
      <div className="section-header">
        <p className="section-tag">THE PROCESS</p>
        <h2 className="section-title">How Bespoke Works</h2>
        <div className="title-rule"></div>
      </div>

      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "40px", marginTop: "16px", }}>

        <div className="reveal-up"
          style={{textAlign: "center", padding: "40px 28px", border: "1.5px solid var(--beige-dark)", background: "var(--cream)", }}>
          <div style={{fontFamily: "var(--ff-serif)", fontSize: "48px", color: "var(--gold)", lineHeight: "1", marginBottom: "16px", }}>01
          </div>
          <h3
            style={{fontFamily: "var(--ff-sans)", fontSize: "11px", fontWeight: "600", letterSpacing: "0.16em", color: "var(--indigo)", marginBottom: "12px", }}>
            CONSULTATION</h3>
          <p
            style={{fontFamily: "var(--ff-cormorant)", fontSize: "16px", fontStyle: "italic", color: "var(--text-light)", lineHeight: "1.6", }}>
            Meet our master tailor to discuss your garment, style preferences and occasion.</p>
        </div>

        <div className="reveal-up reveal-delay-1"
          style={{textAlign: "center", padding: "40px 28px", border: "1.5px solid var(--beige-dark)", background: "var(--cream)", }}>
          <div style={{fontFamily: "var(--ff-serif)", fontSize: "48px", color: "var(--gold)", lineHeight: "1", marginBottom: "16px", }}>02
          </div>
          <h3
            style={{fontFamily: "var(--ff-sans)", fontSize: "11px", fontWeight: "600", letterSpacing: "0.16em", color: "var(--indigo)", marginBottom: "12px", }}>
            FABRIC &amp; DESIGN</h3>
          <p
            style={{fontFamily: "var(--ff-cormorant)", fontSize: "16px", fontStyle: "italic", color: "var(--text-light)", lineHeight: "1.6", }}>
            Choose from over 400 premium fabrics and refine every detail of your garment.</p>
        </div>

        <div className="reveal-up reveal-delay-2"
          style={{textAlign: "center", padding: "40px 28px", border: "1.5px solid var(--beige-dark)", background: "var(--cream)", }}>
          <div style={{fontFamily: "var(--ff-serif)", fontSize: "48px", color: "var(--gold)", lineHeight: "1", marginBottom: "16px", }}>03
          </div>
          <h3
            style={{fontFamily: "var(--ff-sans)", fontSize: "11px", fontWeight: "600", letterSpacing: "0.16em", color: "var(--indigo)", marginBottom: "12px", }}>
            MEASUREMENTS</h3>
          <p
            style={{fontFamily: "var(--ff-cormorant)", fontSize: "16px", fontStyle: "italic", color: "var(--text-light)", lineHeight: "1.6", }}>
            Precise measurements taken by our expert craftsmen ensure a perfect, personal fit.</p>
        </div>

        <div className="reveal-up"
          style={{textAlign: "center", padding: "40px 28px", border: "1.5px solid var(--beige-dark)", background: "var(--cream)", }}>
          <div style={{fontFamily: "var(--ff-serif)", fontSize: "48px", color: "var(--gold)", lineHeight: "1", marginBottom: "16px", }}>04
          </div>
          <h3
            style={{fontFamily: "var(--ff-sans)", fontSize: "11px", fontWeight: "600", letterSpacing: "0.16em", color: "var(--indigo)", marginBottom: "12px", }}>
            HANDCRAFTED</h3>
          <p
            style={{fontFamily: "var(--ff-cormorant)", fontSize: "16px", fontStyle: "italic", color: "var(--text-light)", lineHeight: "1.6", }}>
            Your garment is hand-stitched in our Mumbai atelier and delivered within 10 days.</p>
        </div>

      </div>
    </section>

    
    <section
      style={{background: "var(--beige)", padding: "72px max(32px,5vw)", textAlign: "center", borderTop: "1px solid var(--beige-dark)", }}>
      <p className="section-tag">READY TO BEGIN?</p>
      <h2
        style={{fontFamily: "var(--ff-serif)", fontSize: "clamp(28px,4vw,48px)", fontWeight: "400", color: "var(--indigo)", marginBottom: "14px", }}>
        Get in Touch With Our Tailors</h2>
      <p
        style={{fontFamily: "var(--ff-cormorant)", fontSize: "18px", fontStyle: "italic", color: "var(--text-light)", marginBottom: "36px", }}>
        We'd love to discuss your bespoke requirements.</p>
      <Link to="/contact" className="btn-primary" id="bespoke-contact-cta">CONTACT US TODAY</Link>
    </section>

  </main>
  );
}
