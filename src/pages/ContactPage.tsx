import { useState } from 'react';
import { ArrowUpRight, Check, MapPin, MoveRight, Phone, Send } from 'lucide-react';
import { branches } from '@/data/branches';
import PageHeader from '@/components/PageHeader';
import useReveal from '@/components/useReveal';
import { useLanguage } from '@/context/LanguageContext';

function ContactPage() {
  const [formSent, setFormSent] = useState(false);
  const [activeBranchId, setActiveBranchId] = useState<(typeof branches)[number]['id']>('jeddah');
  const { isArabic } = useLanguage();
  useReveal();

  const activeBranch = branches.find((branch) => branch.id === activeBranchId) ?? branches[0];

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
          {/* Branch Map Panel with Toggle between Jeddah & Riyadh */}
          <div className="branch-map-panel reveal">
            <div className="branch-map-head">
              <div className="branch-map-title-group">
                <span className="branch-map-sub">{isArabic ? 'مكاتبنا الإقليمية' : 'Regional Offices'}</span>
                <h2>{isArabic ? 'مواقع الفروع' : 'Branch Locations'}</h2>
              </div>
              <div className="branch-toggle" role="tablist" aria-label={isArabic ? 'اختر فرعاً لعرضه على الخريطة' : 'Choose a branch to show on the map'}>
                {branches.map((branch) => (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeBranchId === branch.id}
                    className={`branch-toggle-btn ${activeBranchId === branch.id ? 'is-active' : ''}`}
                    onClick={() => setActiveBranchId(branch.id)}
                    key={branch.id}
                  >
                    {isArabic ? branch.cityAr : branch.city}
                  </button>
                ))}
              </div>
            </div>

            {/* Normal Google Maps Embed */}
            <div className="branch-map-frame-wrapper">
              <iframe
                key={activeBranch.id}
                src={activeBranch.embedUrl}
                title={`${isArabic ? activeBranch.cityAr : activeBranch.city} Google Map`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="branch-google-map-iframe"
              />
            </div>

            {/* Branch Details Footer */}
            <div className="branch-map-details">
              <div className="branch-map-info">
                <div className="branch-map-info-header">
                  <span className="branch-map-pin-badge"><MapPin size={16} /></span>
                  <div>
                    <strong>{isArabic ? `فرع ${activeBranch.cityAr} (${activeBranch.badgeAr})` : `${activeBranch.city} Office (${activeBranch.badge})`}</strong>
                    <p>{isArabic ? activeBranch.addressAr : activeBranch.address}</p>
                  </div>
                </div>
                {activeBranch.phone && (
                  <div className="branch-map-phone">
                    <Phone size={14} />
                    <span dir="ltr">{activeBranch.phone}</span>
                  </div>
                )}
              </div>
              <a
                className="branch-directions-btn"
                href={activeBranch.mapUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${isArabic ? 'فتح موقع فرع' : 'Open'} ${isArabic ? activeBranch.cityAr : activeBranch.city} ${isArabic ? 'على خرائط جوجل' : 'in Google Maps'}`}
              >
                <span>{isArabic ? 'الاتجاهات عبر Google Maps' : 'Directions on Google Maps'}</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="contact-form reveal"
            onSubmit={(event) => { event.preventDefault(); setFormSent(true); }}
            noValidate
          >
            {formSent ? (
              <div className="form-success">
                <div className="success-icon"><Check size={26} /></div>
                <h3>{isArabic ? 'شكراً لتواصلك معنا.' : 'Thank you for reaching out.'}</h3>
                <p>{isArabic ? 'تم استلام رسالتك بنجاح، وسيتواصل معك مهندسو وفريق يورو كونستركت في أقرب وقت.' : "Your message has been received. Our team will review your inquiry and follow up shortly."}</p>
                <button type="button" className="text-button" onClick={() => setFormSent(false)}>
                  {isArabic ? 'إرسال استفسار آخر' : 'Send another inquiry'} <MoveRight size={17} />
                </button>
              </div>
            ) : (
              <>
                <div className="form-heading">
                  <span>{isArabic ? 'استفسار عن مشروع' : 'Project enquiry'}</span>
                  <h3>{isArabic ? 'تواصل مع فريقنا الهندسي' : 'Connect with our engineering team'}</h3>
                  <p>{isArabic ? 'جميع الحقول المميزة بعلامة * مطلوبة.' : 'All fields marked * are required.'}</p>
                </div>

                <div className="form-fields-wrapper">
                  <label className="form-field-block">
                    <span className="form-label-text">{isArabic ? 'الاسم بالكامل *' : 'Full Name *'}</span>
                    <input required name="name" type="text" placeholder={isArabic ? 'اسمك الكريم' : 'Your full name'} />
                  </label>

                  <div className="form-row">
                    <label className="form-field-block">
                      <span className="form-label-text">{isArabic ? 'البريد الإلكتروني *' : 'Email Address *'}</span>
                      <input required name="email" type="email" placeholder="name@company.com" />
                    </label>
                    <label className="form-field-block">
                      <span className="form-label-text">{isArabic ? 'رقم الهاتف' : 'Phone Number'}</span>
                      <input name="phone" type="tel" placeholder={isArabic ? '+966 5X XXX XXXX' : '+966 5X XXX XXXX'} />
                    </label>
                  </div>

                  <label className="form-field-block">
                    <span className="form-label-text">{isArabic ? 'تفاصيل المشروع والرسالة *' : 'Project Details & Message *'}</span>
                    <textarea
                      required
                      name="message"
                      placeholder={isArabic ? 'أخبرنا عن متطلبات مشروعك، الموقع والجدول الزمني...' : 'Tell us about your project requirements, location, and timeline...'}
                      rows={5}
                    />
                  </label>
                </div>

                <div className="form-action-footer">
                  <button className="button form-submit" type="submit">
                    <span>{isArabic ? 'إرسال الاستفسار' : 'Send Enquiry'}</span>
                    <Send size={16} />
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
