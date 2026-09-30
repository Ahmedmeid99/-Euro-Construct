import { useState } from 'react';
import { ArrowUpRight, Check, MoveRight } from 'lucide-react';
import { services } from '@/data/content';
import PageHeader from '@/components/PageHeader';
import useReveal from '@/components/useReveal';

function ContactPage() {
  const [formSent, setFormSent] = useState(false);
  useReveal();

  return (
    <>
      <PageHeader
        label="Contact"
        title={<>Let's build the <em>next thing well.</em></>}
        description="Tell us a little about your project and the right member of our team will be in touch."
        arabicLabel="تواصل معنا"
        arabicTitle={<>لنبنِ مشروعك القادم <em>بإتقان.</em></>}
        arabicDescription="أخبرنا عن مشروعك وسيتواصل معك العضو المناسب من فريقنا."
        image="/profile/project-21.jpg"
      />

      <section className="contact section-light">
        <div className="container contact-grid">
          <div className="contact-copy reveal">
            <div className="branch-card">
              <span>Jeddah branch</span>
              <p>Al Rawdah District, Al Madinah Road,<br />Jeddah, Saudi Arabia</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Al+Rawdah+District+Al+Madinah+Road+Jeddah+Saudi+Arabia" target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={15} /></a>
            </div>
            <div className="branch-card">
              <span>Riyadh branch</span>
              <p>7095 King Faisal Bin Abdul Aziz Road,<br />Al Murabba District, 4th Floor,<br />Riyadh, Saudi Arabia</p>
              <a href="https://www.google.com/maps/search/?api=1&query=7095+King+Faisal+Bin+Abdul+Aziz+Road+Al+Murabba+Riyadh+Saudi+Arabia" target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <form
            className="contact-form reveal"
            onSubmit={(event) => { event.preventDefault(); setFormSent(true); }}
            noValidate
          >
            {formSent ? (
              <div className="form-success">
                <div className="success-icon"><Check size={25} /></div>
                <h3>Thank you for reaching out.</h3>
                <p>Your message has been received. We'll be in touch about your project.</p>
                <button type="button" className="text-button" onClick={() => setFormSent(false)}>
                  Send another message <MoveRight size={17} />
                </button>
              </div>
            ) : (
              <>
                <div className="form-heading">
                  <span>Project enquiry</span>
                  <p>All fields marked * are required.</p>
                </div>
                <label>Name *<input required name="name" type="text" placeholder="Your name" /></label>
                <label>Company<input name="company" type="text" placeholder="Company name" /></label>
                <div className="form-row">
                  <label>Email *<input required name="email" type="email" placeholder="you@company.com" /></label>
                  <label>Phone<input name="phone" type="tel" placeholder="Phone number" /></label>
                </div>
                <label>Service of interest
                  <select name="service" defaultValue="">
                    <option value="" disabled>Select a service</option>
                    {services.map((service) => <option key={service.title}>{service.title}</option>)}
                  </select>
                </label>
                <label>Message *<textarea required name="message" placeholder="Tell us about your project" rows={5} /></label>
                <button className="button form-submit" type="submit">Send enquiry <ArrowUpRight size={17} /></button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
