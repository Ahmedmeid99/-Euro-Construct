import { useState } from 'react';
import { ArrowUpRight, Check, MoveRight } from 'lucide-react';
import { services } from '@/data/content';
import PageHeader from '@/components/PageHeader';
import useReveal from '@/components/useReveal';
import { useLanguage } from '@/context/LanguageContext';
import { serviceArabic } from '@/data/arabic';

function ContactPage() {
  const [formSent, setFormSent] = useState(false);
  const { isArabic } = useLanguage();
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
              <span>{isArabic ? 'فرع جدة' : 'Jeddah branch'}</span>
              <p>{isArabic ? <>حي الروضة، طريق المدينة،<br />جدة، المملكة العربية السعودية</> : <>Al Rawdah District, Al Madinah Road,<br />Jeddah, Saudi Arabia</>}</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Al+Rawdah+District+Al+Madinah+Road+Jeddah+Saudi+Arabia" target="_blank" rel="noreferrer">{isArabic ? 'فتح في خرائط جوجل' : 'Open in Google Maps'} <ArrowUpRight size={15} /></a>
            </div>
            <div className="branch-card">
              <span>{isArabic ? 'فرع الرياض' : 'Riyadh branch'}</span>
              <p>{isArabic ? <>7095 طريق الملك فيصل بن عبدالعزيز،<br />حي المربع، الدور الرابع،<br />الرياض، المملكة العربية السعودية</> : <>7095 King Faisal Bin Abdul Aziz Road,<br />Al Murabba District, 4th Floor,<br />Riyadh, Saudi Arabia</>}</p>
              <a href="https://www.google.com/maps/search/?api=1&query=7095+King+Faisal+Bin+Abdul+Aziz+Road+Al+Murabba+Riyadh+Saudi+Arabia" target="_blank" rel="noreferrer">{isArabic ? 'فتح في خرائط جوجل' : 'Open in Google Maps'} <ArrowUpRight size={15} /></a>
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
                <h3>{isArabic ? 'شكراً لتواصلك معنا.' : 'Thank you for reaching out.'}</h3>
                <p>{isArabic ? 'تم استلام رسالتك، وسنتواصل معك بخصوص مشروعك.' : "Your message has been received. We'll be in touch about your project."}</p>
                <button type="button" className="text-button" onClick={() => setFormSent(false)}>
                  {isArabic ? 'إرسال رسالة أخرى' : 'Send another message'} <MoveRight size={17} />
                </button>
              </div>
            ) : (
              <>
                <div className="form-heading">
                  <span>{isArabic ? 'استفسار عن مشروع' : 'Project enquiry'}</span>
                  <p>{isArabic ? 'جميع الحقول المميزة بعلامة * مطلوبة.' : 'All fields marked * are required.'}</p>
                </div>
                <label>{isArabic ? 'الاسم *' : 'Name *'}<input required name="name" type="text" placeholder={isArabic ? 'اسمك' : 'Your name'} /></label>
                <label>{isArabic ? 'الشركة' : 'Company'}<input name="company" type="text" placeholder={isArabic ? 'اسم الشركة' : 'Company name'} /></label>
                <div className="form-row">
                  <label>{isArabic ? 'البريد الإلكتروني *' : 'Email *'}<input required name="email" type="email" placeholder="you@company.com" /></label>
                  <label>{isArabic ? 'الهاتف' : 'Phone'}<input name="phone" type="tel" placeholder={isArabic ? 'رقم الهاتف' : 'Phone number'} /></label>
                </div>
                <label>{isArabic ? 'الخدمة المطلوبة' : 'Service of interest'}
                  <select name="service" defaultValue="">
                    <option value="" disabled>{isArabic ? 'اختر خدمة' : 'Select a service'}</option>
                    {services.map((service) => <option key={service.title}>{isArabic ? serviceArabic[service.title][0] : service.title}</option>)}
                  </select>
                </label>
                <label>{isArabic ? 'الرسالة *' : 'Message *'}<textarea required name="message" placeholder={isArabic ? 'أخبرنا عن مشروعك' : 'Tell us about your project'} rows={5} /></label>
                <button className="button form-submit" type="submit">{isArabic ? 'إرسال الاستفسار' : 'Send enquiry'} <ArrowUpRight size={17} /></button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
