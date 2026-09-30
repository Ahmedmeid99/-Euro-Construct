import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, MoveRight, MapPin, Pause, Play, ShieldCheck, Target } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { capabilities, clientLogos, getProjectSlug, getServiceSlug, images, projects, services } from '@/data/content';
import useReveal from '@/components/useReveal';
import { useLanguage } from '@/context/LanguageContext';
import { arabicLocation } from '@/data/arabic';

const featuredProjects = [projects[1], projects[9], projects[12]];
const heroProjects = [projects[9], projects[9], projects[4]];
const heroProjectArabic = [
  'مشروع الخدمات الهندسية للزكاة والضريبة والجمارك',
  'مشروع الخدمات الهندسية لهيئة الزكاة',
  'إدارة حركة الحجاج بمحطات قطار مزدلفة 1 و2 و3',
];

const capabilityArabic: Record<string, [string, string]> = {
  'Skilled Manpower': ['كوادر مؤهلة', 'مهندسون ومشرفون وفرق مواقع ذوو خبرة.'],
  'Plant & Equipment': ['المعدات والآليات', 'موارد ومعدات تدعم تنفيذ المشاريع بكفاءة.'],
  'QA/QC Systems': ['أنظمة الجودة', 'ضبط جودة منظم ومتوافق مع متطلبات المشروع.'],
  'Site Execution': ['التنفيذ الميداني', 'أنشطة موقع منسقة ورقابة تنفيذ منضبطة.'],
  Procurement: ['المشتريات', 'توريد موثوق وتنسيق فعال للمواد والتسليم.'],
  'HSE Standards': ['معايير السلامة', 'ممارسات آمنة تحمي الأفراد والمواقع والمجتمع.'],
};

const serviceArabic: Record<string, [string, string]> = {
  'General Contracting': ['المقاولات العامة', 'تنفيذ متكامل للمشاريع مع الالتزام بالجودة والسلامة.'],
  'Construction Management': ['إدارة الإنشاءات', 'إدارة فرق الموقع والموارد والجداول الزمنية والتقدم.'],
  'Site Survey': ['الرفع المساحي', 'دراسة وقياس الظروف القائمة في الموقع.'],
  'Geotechnical Investigation': ['الدراسات الجيوتقنية', 'تقييم التربة تحت السطح والأساسات.'],
  'Renovation Works': ['أعمال الترميم', 'ترميم وتشطيب المباني والإصلاح والتطوير والتجهيز الداخلي.'],
};

const projectArabic: Record<string, string> = {
  'East Jeddah Corridor': 'مشروع محور شرق جدة',
  'ZATCA MEP Engineering Services Project': 'مشروع الخدمات الهندسية للزكاة والضريبة والجمارك',
  'Kuday Parking Development Supervision': 'الإشراف على تطوير مواقف كدي',
};

const clientArabic: Record<string, string> = {
  'Zakat, Tax and Customs Authority': 'هيئة الزكاة والضريبة والجمارك',
  'Ministry of Education': 'وزارة التعليم',
  'Ministry of Finance': 'وزارة المالية',
  'Saudi Cement': 'الأسمنت السعودية',
  'Ministry of Hajj and Umrah': 'وزارة الحج والعمرة',
  Kidana: 'كدانة',
  'Euro Consult for Engineering Consultancy': 'يورو كونسلت للاستشارات الهندسية',
  'Ministry of Municipal & Rural Affairs': 'وزارة الشؤون البلدية والقروية',
  'State Properties General Authority': 'الهيئة العامة لعقارات الدولة',
};

function HomePage() {
  const { isArabic } = useLanguage();
  const [heroSlide, setHeroSlide] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);
  useReveal();

  useEffect(() => {
    if (sliderPaused) return;
    const timer = window.setInterval(() => {
      setHeroSlide((current) => (current + 1) % heroProjects.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [sliderPaused]);

  const changeSlide = (direction: number) => {
    setHeroSlide((current) => (current + direction + heroProjects.length) % heroProjects.length);
  };

  const activeHeroProject = heroProjects[heroSlide];

  return (
    <>
      <section className="hero section-dark">
        <div className="hero-slides" aria-hidden="true">
          {heroProjects.map((project, index) => (
            <img
              className={`hero-slide ${index === heroSlide ? 'is-active' : ''}`}
              src={project.image}
              alt=""
              key={project.name}
              fetchPriority={index === 0 ? 'high' : 'auto'}
            />
          ))}
        </div>
        <div className="hero-grid" />
        <div className="container hero-content">
          <div className="eyebrow light"><span /> {isArabic ? 'المملكة العربية السعودية · جدة والرياض' : 'Saudi Arabia · Jeddah & Riyadh'}</div>
          <h1 className="hero-title">{isArabic ? <>نبني مشاريع موثوقة عبر <em>الجودة والسلامة</em> والتنفيذ المنضبط.</> : <><span>Building reliable projects</span><span>through <em>quality, safety,</em></span><span>and disciplined execution.</span></>}</h1>
          <p className="hero-copy">{isArabic ? 'حلول متكاملة للمقاولات وإدارة الإنشاءات والرفع المساحي والدراسات الجيوتقنية وأعمال الترميم في جميع أنحاء المملكة.' : 'Integrated contracting, construction management, surveying, geotechnical investigation, and renovation solutions across Saudi Arabia.'}</p>
          <div className="hero-actions">
            <Link className="button" to="/projects">{isArabic ? 'استكشف مشاريعنا' : 'Explore our projects'} <ArrowUpRight size={17} /></Link>
            <Link className="text-button light-text" to="/contact">{isArabic ? 'تواصل مع يورو كونستركت' : 'Contact Euro Construct'} <MoveRight size={17} /></Link>
          </div>
          <div className="hero-note"><span className="note-line" /><span>{isArabic ? 'دعم متكامل للمشروع من التجهيز وحتى التسليم النهائي.' : 'End-to-end project support, from mobilization through final handover.'}</span></div>
        </div>
        <div className="container hero-slider-ui">
          <Link className="hero-project-caption" to="/projects/$projectId" params={{ projectId: getProjectSlug(activeHeroProject) }} aria-live="polite">
            <span>{isArabic ? 'مشروع مختار' : 'Featured project'} · 0{heroSlide + 1}</span>
            <strong>{isArabic ? heroProjectArabic[heroSlide] : (heroSlide === 1 ? 'ZATCA Engineering Services' : activeHeroProject.name)}</strong>
            <small><MapPin size={13} /> {isArabic ? arabicLocation(activeHeroProject.location) : activeHeroProject.location}</small>
          </Link>
          <div className="hero-slider-controls" aria-label={isArabic ? 'عناصر تحكم عرض المشاريع' : 'Project slider controls'}>
            <button type="button" onClick={() => changeSlide(-1)} aria-label={isArabic ? 'المشروع السابق' : 'Previous project'}><ArrowLeft size={18} /></button>
            <div className="hero-slide-dots">
              {heroProjects.map((project, index) => (
                <button
                  type="button"
                  className={index === heroSlide ? 'is-active' : ''}
                  onClick={() => setHeroSlide(index)}
                  aria-label={`${isArabic ? 'عرض' : 'Show'} ${isArabic ? heroProjectArabic[index] : (index === 1 ? 'ZATCA Engineering Services' : project.name)}`}
                  aria-current={index === heroSlide ? 'true' : undefined}
                  key={project.name}
                />
              ))}
            </div>
            <button type="button" onClick={() => setSliderPaused((paused) => !paused)} aria-label={sliderPaused ? (isArabic ? 'تشغيل العرض' : 'Play slideshow') : (isArabic ? 'إيقاف العرض' : 'Pause slideshow')}>
              {sliderPaused ? <Play size={16} /> : <Pause size={16} />}
            </button>
            <button type="button" onClick={() => changeSlide(1)} aria-label={isArabic ? 'المشروع التالي' : 'Next project'}><ArrowRight size={18} /></button>
          </div>
        </div>
        <div className="hero-stats container">
          <div><strong>10<span>+</span></strong><span>{isArabic ? 'عملاء مختارون' : 'Selected clients'}</span></div>
          <div><strong>03<span>+</span></strong><span>{isArabic ? 'قطاعات رئيسية' : 'Key sectors'}</span></div>
          <div><strong>03<span>+</span></strong><span>{isArabic ? 'نطاق إقليمي' : 'Regional presence'}</span></div>
        </div>
      </section>

      <section className="intro section-light">
        <div className="container">
          {/* <div className="section-label intro-section-label reveal">01 <span>{isArabic ? 'عن يورو كونستركت' : 'About Euro Construct'}</span></div> */}
          <div className="intro-grid">
            <div className="intro-main reveal">
              {/* <p className="kicker">{isArabic ? 'شريك موثوق على أرض الواقع' : 'A trusted partner on the ground'}</p> */}
              <h2 style={{ fontSize: '50px' }}>{isArabic ? <>دعم إنشائي يرتكز على <em>الوضوح والتحكم.</em></> : <>Construction support built around <em>clarity and control.</em></>}</h2>
              <p className="lead">{isArabic ? 'يورو كونستركت شركة مقاولات وإنشاءات مقرها المملكة العربية السعودية، تقدم خدمات المقاولات العامة وإدارة الإنشاءات والرفع المساحي والدراسات الجيوتقنية وتقييم التربة والأساسات وأعمال الترميم.' : 'Euro Construct is a contracting and construction company based in Saudi Arabia. The company provides general contracting, construction management, site survey, geotechnical investigation, soil and foundation assessment, and renovation works.'}</p>
              <p>{isArabic ? 'ندعم المشاريع من خلال فرق مواقع مؤهلة وتخطيط سليم وإدارة للموارد وضبط الجودة والالتزام بالسلامة.' : 'Euro Construct supports projects through qualified site teams, proper planning, resource management, quality control and safety compliance.'}</p>
              <div className="vision-mission">
                <article>
                  <div className="vision-mission-head">
                    <span className="vision-mission-icon"><Target size={20} /></span>
                    <div><small>01</small><h3>{isArabic ? 'رسالتنا' : 'Our mission'}</h3></div>
                  </div>
                  <p>{isArabic ? 'تنفيذ المشاريع باحترافية والتزام من خلال إدارة فعالة للموقع وضبط صارم للجودة وممارسات عمل آمنة وتنسيق كفء حتى التسليم النهائي.' : 'To deliver construction projects with professionalism and commitment by applying effective site management, strict quality control, safe working practices, and efficient coordination from mobilization through final handover.'}</p>
                </article>
                <article>
                  <div className="vision-mission-head">
                    <span className="vision-mission-icon"><Compass size={20} /></span>
                    <div><small>02</small><h3>{isArabic ? 'رؤيتنا' : 'Our vision'}</h3></div>
                  </div>
                  <p>{isArabic ? 'أن نكون شركة موثوقة للمقاولات وخدمات المواقع في المملكة، معروفة بالجودة والسلامة وحلول الدعم الإنشائي الموثوقة.' : 'A trusted contracting and site services company in Saudi Arabia, recognized for quality, safety, and reliable construction support solutions.'}</p>
                </article>
              </div>
            </div>
            <div>
              <div className="section-label intro-section-label reveal">01 <span>{isArabic ? 'عن يورو كونستركت' : 'About Euro Construct'}</span></div>
              <div className="intro-image reveal">
                <img src={images.survey} alt="Construction cranes from the Euro Construct company profile" />
                <span className="image-caption">{isArabic ? 'قدرات تنفيذ متكاملة' : 'Integrated execution capability'}<br /><b>{isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia'}</b></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities home-capabilities section-sand">
        <div className="container">
          <div className="home-section-head reveal">
            <div>
              <div className="section-label">02 <span>{isArabic ? 'قدراتنا' : 'Our capabilities'}</span></div>
              <h2>{isArabic ? <>المنظومة التي تقود<br /><em>التنفيذ الناجح.</em></> : <>The structure behind<br /><em>successful delivery.</em></>}</h2>
            </div>
            <Link className="text-button" to="/capabilities">{isArabic ? 'استكشف قدراتنا' : 'Explore capabilities'} <MoveRight size={17} /></Link>
          </div>
          <div className="capability-grid">
            {capabilities.map(({ title, text, icon: Icon }, index) => (
              <article className="capability reveal" key={title} style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="capability-icon"><Icon size={22} strokeWidth={1.5} /></div>
                <div>
                  <span className="index">0{index + 1}</span>
                  <h3>{isArabic ? capabilityArabic[title][0] : title}</h3>
                  <p>{isArabic ? capabilityArabic[title][1] : text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services home-services section-light">
        <div className="container">
          <div className="home-section-head reveal">
            <div>
              <div className="section-label">03 <span>{isArabic ? 'خدمات متكاملة' : 'Integrated services'}</span></div>
              <h2>{isArabic ? <>من أول رفع مساحي حتى<br /><em>التسليم النهائي.</em></> : <>From first survey to<br /><em>final handover.</em></>}</h2>
            </div>
            <p>{isArabic ? 'فريق واحد منسق يدعم التخطيط والتنفيذ والرقابة والإنجاز.' : 'One coordinated team supporting planning, execution, control, and completion.'}</p>
          </div>
          <div className="services-grid">
            {services.map(({ title, icon: Icon, text }, index) => (
              <Link className="service-card home-service-card reveal" to="/services/$serviceId" params={{ serviceId: getServiceSlug(services[index]) }} key={title}>
                <div className="service-top">
                  <div className="service-icon"><Icon size={22} /></div>
                  <span>0{index + 1}</span>
                </div>
                <h3>{isArabic ? serviceArabic[title][0] : title}</h3>
                <p>{isArabic ? serviceArabic[title][1] : text}</p>
                <span className="text-button">{isArabic ? 'عرض الخدمة' : 'View service'} <MoveRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="projects home-projects section-dark">
        <div className="container">
          <div className="home-section-head home-section-head-dark reveal">
            <div>
              <div className="section-label light">04 <span>{isArabic ? 'مشاريع مختارة' : 'Featured projects'}</span></div>
              <h2>{isArabic ? <>خبرة تثبت جدارتها<br /><em>على أرض الواقع.</em></> : <>Experience that holds<br /><em>up in the field.</em></>}</h2>
            </div>
            <Link className="text-button light-text" to="/projects">{isArabic ? 'عرض جميع المشاريع' : 'View all projects'} <MoveRight size={17} /></Link>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <Link
                className="project-card"
                to="/projects/$projectId"
                params={{ projectId: getProjectSlug(project) }}
                key={project.name}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="project-image">
                  <img src={project.image} alt={`${project.name} project`} />
                  <span>{project.category}</span>
                </div>
                <div className="project-info">
                  <div>
                    <h3>{isArabic ? projectArabic[project.name] : project.name}</h3>
                    <p><MapPin size={14} /> {project.location}</p>
                  </div>
                  <ArrowUpRight size={19} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-clients section-light">
        <div className="container home-clients-grid">
          <div className="home-clients-copy reveal">
            <div className="section-label">05 <span>{isArabic ? 'عملاؤنا' : 'Our clients'}</span></div>
            {/* <h2>{isArabic ? <>ثقة راسخة <em>حيث تصنع الفرق.</em></> : <>Trusted where <em>it matters.</em></>}</h2>
            <p>{isArabic ? 'ندعم جهات رائدة في القطاعين العام والخاص في أعمال الإنشاء والبنية التحتية وتنفيذ المشاريع.' : 'Supporting leading public and private organizations across construction, infrastructure, and project delivery.'}</p>
            <Link className="text-button" to="/clients">{isArabic ? 'تعرف على عملائنا' : 'Meet our clients'} <MoveRight size={17} /></Link> */}
          </div>
          <div className="home-client-marquee reveal" aria-label={isArabic ? 'شعارات عملائنا' : 'Our client logos'}>
            <div className="home-client-track">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div className="client-logo" key={`${client.name}-${index}`} aria-hidden={index >= clientLogos.length ? 'true' : undefined}>
                  <img src={client.image} alt={index < clientLogos.length ? (isArabic ? clientArabic[client.name] || client.name : client.name) : ''} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="presence section-sand">
        <div className="container presence-grid">
          <div className="presence-copy reveal">
            <div className="section-label">06 <span>{isArabic ? 'حضورنا الإقليمي' : 'Regional presence'}</span></div>
            <h2>{isArabic ? <>قريبون من مواقع العمل.<br /><em>متصلون بالمنطقة.</em></> : <>Close to the work.<br /><em>Connected to the region.</em></>}</h2>
            <p>{isArabic ? 'نقدم حلولاً إنشائية في الأسواق الإقليمية والدولية الرئيسية.' : 'Delivering construction solutions across key regional and international markets.'}</p>
            <div className="locations">
              <div><MapPin size={16} /><strong>{isArabic ? 'جدة' : 'Jeddah'}</strong><span>{isArabic ? 'المنطقة الغربية' : 'Western Region'}</span></div>
              <div><MapPin size={16} /><strong>{isArabic ? 'الرياض' : 'Riyadh'}</strong><span>{isArabic ? 'المنطقة الوسطى' : 'Central Region'}</span></div>
            </div>
          </div>
          <div className="saudi-map reveal" aria-label="Stylized map of Saudi Arabia showing Jeddah and Riyadh">
            <div className="map-grid" />
            <div className="saudi-outline" />
            <div className="map-label jeddah"><i />{isArabic ? 'جدة' : 'Jeddah'}</div>
            <div className="map-label riyadh"><i />{isArabic ? 'الرياض' : 'Riyadh'}</div>
            <span className="map-note">{isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia'}</span>
          </div>
        </div>
      </section>

      <section className="cta section-dark">
        <div className="container quality-grid reveal">
          <div className="cta-inner">
            <div className="section-label light">07 <span>{isArabic ? 'الجودة والسلامة' : 'Quality & safety'}</span></div>
            <span className="quality-mark"><ShieldCheck size={24} /> {isArabic ? 'التزام في كل موقع' : 'Built into every site'}</span>
            <h2>{isArabic ? <>نبني بمسؤولية.<br /><em>ونسلّم بموثوقية.</em></> : <>Built responsibly.<br /><em>Delivered reliably.</em></>}</h2>
            <p>{isArabic ? 'ممارسات عمل آمنة وضبط للجودة وتنفيذ موثوق وبناء مسؤول في كل مشروع.' : 'Safe working practices, quality control, reliable project execution and responsible construction — built into every engagement.'}</p>
            <div className="quality-actions">
              <Link className="button" to="/contact">{isArabic ? 'ناقش مشروعك القادم' : 'Discuss your next project'} <ArrowUpRight size={17} /></Link>
              <Link className="text-button light-text" to="/capabilities">{isArabic ? 'استكشف قدراتنا' : 'Explore our capabilities'} <MoveRight size={17} /></Link>
            </div>
          </div>
          <div className="quality-showcase">
            <div className="quality-image">
              <img src={projects[1].image} alt={isArabic ? 'فريق يورو كونستركت في موقع المشروع' : 'Euro Construct project delivery on site'} loading="lazy" />
              <span><ShieldCheck size={18} /> {isArabic ? 'تنفيذ منضبط من الموقع إلى التسليم' : 'Disciplined delivery, from site to handover'}</span>
            </div>
            <div className="quality-principles">
              <article><b>01</b><strong>{isArabic ? 'ضبط الجودة' : 'Quality control'}</strong><span>{isArabic ? 'فحوصات ومتابعة منظمة' : 'Structured checks and oversight'}</span></article>
              <article><b>02</b><strong>{isArabic ? 'السلامة أولاً' : 'Safety-led sites'}</strong><span>{isArabic ? 'ممارسات تحمي الفرق والمواقع' : 'Practices that protect people and sites'}</span></article>
              <article><b>03</b><strong>{isArabic ? 'تسليم موثوق' : 'Reliable handover'}</strong><span>{isArabic ? 'تنسيق واضح حتى الإنجاز' : 'Clear coordination through completion'}</span></article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
