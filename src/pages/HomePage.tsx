import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, MoveRight, MapPin, Pause, Play, ShieldCheck, Target } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { capabilities, clientLogos, getProjectSlug, getServiceSlug, images, projects, services } from '@/data/content';
import { branches } from '@/data/branches';
import useReveal from '@/components/useReveal';
import { useLanguage } from '@/context/LanguageContext';
import { arabicLocation, categoryArabic, projectNameArabic } from '@/data/arabic';

const heroProjects = [projects[9], projects[9], projects[4], projects[1]];
const heroProjectArabic = [
  'مشروع الخدمات الهندسية للزكاة والضريبة والجمارك',
  'مشروع الخدمات الهندسية لهيئة الزكاة',
  'إدارة حركة الحجاج بمحطات قطار مزدلفة 1 و2 و3',
  'مشروع محور شرق جدة',
];
const heroProjectEnglish = [
  'ZATCA MEP Engineering Services Project',
  'ZATCA Engineering Services',
  'Pilgrims Flow Management at Muzdalifah Metro Stations 1, 2 & 3',
  'East Jeddah Corridor',
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
  const [projectSlide, setProjectSlide] = useState(0);
  const [projectsPaused, setProjectsPaused] = useState(false);
  const [projectHovered, setProjectHovered] = useState(false);
  const [activeHomeBranchId, setActiveHomeBranchId] = useState<(typeof branches)[number]['id']>('jeddah');
  useReveal();

  const activeHomeBranch = branches.find((b) => b.id === activeHomeBranchId) ?? branches[0];

  useEffect(() => {
    if (sliderPaused) return;
    const timer = window.setInterval(() => {
      setHeroSlide((current) => (current + 1) % heroProjects.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [sliderPaused]);

  useEffect(() => {
    if (projectsPaused || projectHovered) return;
    const timer = window.setInterval(() => {
      setProjectSlide((current) => (current + 1) % projects.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, [projectsPaused, projectHovered]);

  const changeSlide = (direction: number) => {
    setHeroSlide((current) => (current + direction + heroProjects.length) % heroProjects.length);
  };

  const changeProjectSlide = (direction: number) => {
    setProjectSlide((current) => (current + direction + projects.length) % projects.length);
  };

  const activeHeroProject = heroProjects[heroSlide];
  const visibleProjects = Array.from({ length: 3 }, (_, offset) => projects[(projectSlide + offset) % projects.length]);

  return (
    <>
      <section className="hero section-dark">
        <div className="hero-slides" aria-hidden="true">
          {heroProjects.map((project, index) => (
            <img
              className={`hero-slide ${index === heroSlide ? 'is-active' : ''}`}
              src={project.image}
              alt=""
              key={`${project.name}-${index}`}
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
            <strong>{isArabic ? heroProjectArabic[heroSlide] : heroProjectEnglish[heroSlide]}</strong>
            <small><MapPin size={13} /> {isArabic ? arabicLocation(activeHeroProject.location) : activeHeroProject.location}</small>
          </Link>
          <div className="hero-slider-controls" aria-label={isArabic ? 'عناصر تحكم عرض المشاريع' : 'Project slider controls'}>
            <button type="button" onClick={() => changeSlide(-1)} aria-label={isArabic ? 'المشروع السابق' : 'Previous project'}>{isArabic ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}</button>
            <div className="hero-slide-dots">
              {heroProjects.map((project, index) => (
                <button
                  type="button"
                  className={index === heroSlide ? 'is-active' : ''}
                  onClick={() => setHeroSlide(index)}
                  aria-label={`${isArabic ? 'عرض' : 'Show'} ${isArabic ? heroProjectArabic[index] : heroProjectEnglish[index]}`}
                  aria-current={index === heroSlide ? 'true' : undefined}
                  key={`${project.name}-${index}`}
                />
              ))}
            </div>
            <button type="button" onClick={() => setSliderPaused((paused) => !paused)} aria-label={sliderPaused ? (isArabic ? 'تشغيل العرض' : 'Play slideshow') : (isArabic ? 'إيقاف العرض' : 'Pause slideshow')}>
              {sliderPaused ? <Play size={16} /> : <Pause size={16} />}
            </button>
            <button type="button" onClick={() => changeSlide(1)} aria-label={isArabic ? 'المشروع التالي' : 'Next project'}>{isArabic ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}</button>
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
          <div
            className="home-project-carousel"
            onMouseEnter={() => setProjectHovered(true)}
            onMouseLeave={() => setProjectHovered(false)}
          >
            <div className="project-grid" aria-live="off">
              {visibleProjects.map((project, index) => (
                <Link
                  className="project-card"
                  to="/projects/$projectId"
                  params={{ projectId: getProjectSlug(project) }}
                  key={`${projectSlide}-${project.name}`}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="project-image">
                    <img src={project.image} alt={isArabic ? `صورة مشروع ${projectNameArabic[project.name] || project.name}` : `${project.name} project`} />
                    <span>{isArabic ? categoryArabic[project.category] : project.category}</span>
                  </div>
                  <div className="project-info">
                    <div>
                      <h3>{isArabic ? projectNameArabic[project.name] || project.name : project.name}</h3>
                      <p><MapPin size={14} /> {isArabic ? arabicLocation(project.location) : project.location}</p>
                    </div>
                    <ArrowUpRight size={19} />
                  </div>
                </Link>
              ))}
            </div>
            <div className="home-project-controls" aria-label={isArabic ? 'عناصر تحكم عرض المشاريع المختارة' : 'Featured projects slider controls'}>
              <span><strong>{String(projectSlide + 1).padStart(2, '0')}</strong> / {String(projects.length).padStart(2, '0')}</span>
              <div>
                <button type="button" onClick={() => changeProjectSlide(-1)} aria-label={isArabic ? 'المشاريع السابقة' : 'Previous projects'}>{isArabic ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}</button>
                <button type="button" onClick={() => setProjectsPaused((paused) => !paused)} aria-label={projectsPaused ? (isArabic ? 'تشغيل العرض' : 'Play slideshow') : (isArabic ? 'إيقاف العرض' : 'Pause slideshow')}>{projectsPaused ? <Play size={16} /> : <Pause size={16} />}</button>
                <button type="button" onClick={() => changeProjectSlide(1)} aria-label={isArabic ? 'المشاريع التالية' : 'Next projects'}>{isArabic ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}</button>
              </div>
            </div>
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
            <p>{isArabic ? 'نقدم حلولاً إنشائية متكاملة في الأسواق الإقليمية والدولية الرئيسية عبر فرعينا في جدة والرياض.' : 'Delivering integrated construction solutions across key regional and international markets through our regional hubs in Jeddah and Riyadh.'}</p>
            
            <div className="presence-branch-cards">
              {branches.map((branch) => {
                const isActive = activeHomeBranchId === branch.id;
                return (
                  <div
                    key={branch.id}
                    className={`presence-branch-card ${isActive ? 'is-active' : ''}`}
                    onClick={() => setActiveHomeBranchId(branch.id)}
                  >
                    <div className="presence-branch-top">
                      <div className="presence-branch-title-wrap">
                        <span className="presence-branch-icon"><MapPin size={18} /></span>
                        <div>
                          <strong>{isArabic ? branch.cityAr : branch.city}</strong>
                          <span className="presence-branch-role">{isArabic ? branch.roleAr : branch.role}</span>
                        </div>
                      </div>
                      <span className="presence-branch-badge">{isArabic ? branch.badgeAr : branch.badge}</span>
                    </div>

                    <p className="presence-branch-address">{isArabic ? branch.addressAr : branch.address}</p>

                    <div className="presence-branch-actions">
                      <a
                        href={branch.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="presence-branch-map-btn"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${isArabic ? 'فتح موقع فرع' : 'Open'} ${isArabic ? branch.cityAr : branch.city} ${isArabic ? 'على خرائط جوجل' : 'on Google Maps'}`}
                      >
                        <MapPin size={14} />
                        <span>{isArabic ? 'الذهاب إلى موقع الفرع' : 'Go to Branch Location'}</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Regional Map Guide */}
          <div className="saudi-map-guide reveal" aria-label={isArabic ? 'دليل خريطة المملكة يوضح فرعي جدة والرياض' : 'Saudi Arabia regional map guide showing Jeddah and Riyadh hubs'}>
            <div className="saudi-map-guide-head">
              <div className="saudi-map-guide-title">
                <span className="saudi-map-indicator-dot" />
                <div>
                  <strong>{isArabic ? 'شبكة المكاتب الإقليمية' : 'KSA Regional Network'}</strong>
                  <small>{isArabic ? 'مركزان رئيسيان نشطان' : '2 Active Regional Hubs'}</small>
                </div>
              </div>
              <div className="saudi-map-tabs">
                {branches.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    className={`saudi-map-tab-btn ${activeHomeBranchId === b.id ? 'is-active' : ''}`}
                    onClick={() => setActiveHomeBranchId(b.id)}
                  >
                    {isArabic ? b.cityAr : b.city}
                  </button>
                ))}
              </div>
            </div>

            <div className="saudi-map-canvas">
              {/* Detailed Coordinate & Radar Grid */}
              <div className="saudi-map-grid" />
              <div className="saudi-compass-tag">
                <span>N</span>
                <Compass size={14} />
              </div>

              {/* Realistic SVG Vector Map of Saudi Arabia */}
              <svg className="saudi-vector-svg" viewBox="0 0 700 440" aria-hidden="true">
                <defs>
                  <linearGradient id="saudiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#194d45" stopOpacity="0.75" />
                    <stop offset="50%" stopColor="#103833" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#0a2522" stopOpacity="0.95" />
                  </linearGradient>
                  <linearGradient id="routeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d9b45a" />
                    <stop offset="100%" stopColor="#f3d789" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Latitude & Longitude Grid Lines */}
                <g className="geo-grid" stroke="rgba(217,180,90,0.12)" strokeWidth="1" strokeDasharray="3 4">
                  <line x1="80" y1="110" x2="620" y2="110" />
                  <line x1="80" y1="210" x2="620" y2="210" />
                  <line x1="80" y1="310" x2="620" y2="310" />
                  <line x1="210" y1="40" x2="210" y2="400" />
                  <line x1="360" y1="40" x2="360" y2="400" />
                  <line x1="510" y1="40" x2="510" y2="400" />
                </g>

                {/* Kingdom Accurate Silhouette */}
                <path
                  className="saudi-landmass"
                  d="M130 72 
                     C145 92 165 140 188 185 
                     C205 218 220 252 238 290 
                     C252 320 270 348 295 372 
                     C315 392 335 408 360 412 
                     C388 416 430 405 470 398 
                     C520 390 580 380 625 365 
                     C615 330 595 305 578 280 
                     C565 260 558 240 550 215 
                     C542 190 535 168 522 142 
                     C510 118 495 102 475 92 
                     C445 88 400 82 355 70 
                     C310 58 265 52 215 48 
                     C170 52 145 60 130 72 Z"
                  fill="url(#saudiGrad)"
                  stroke="#d9b45a"
                  strokeWidth="1.8"
                />

                {/* Topographic depth curve */}
                <path
                  d="M175 145 C210 205 240 270 270 330 C300 370 345 385 410 375 C480 365 540 340 575 295"
                  fill="none"
                  stroke="rgba(217,180,90,0.18)"
                  strokeWidth="1.2"
                  strokeDasharray="4 6"
                />

                {/* Logistics route connecting Jeddah & Riyadh with animated glow */}
                <path
                  className="saudi-route-line"
                  d="M260 305 Q335 255 425 225"
                  fill="none"
                  stroke="url(#routeGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  filter="url(#glow)"
                />

                {/* Red Sea / Gulf water hints */}
                <text x="120" y="270" fill="rgba(217,180,90,0.3)" fontSize="11" letterSpacing="3" transform="rotate(-62 120 270)">RED SEA</text>
                <text x="540" y="160" fill="rgba(217,180,90,0.3)" fontSize="10" letterSpacing="3" transform="rotate(-30 540 160)">ARABIAN GULF</text>
              </svg>

              {/* Interactive Jeddah Map Pin - Clicking opens branch Google Maps location! */}
              <a
                className={`saudi-map-pin-anchor jeddah ${activeHomeBranchId === 'jeddah' ? 'is-active' : ''}`}
                href={branches[0].mapUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setActiveHomeBranchId('jeddah')}
                aria-label={isArabic ? 'فتح موقع فرع جدة على خرائط جوجل' : 'Open Jeddah branch location in Google Maps'}
              >
                <span className="saudi-pin-ripple" />
                <span className="saudi-pin-core">
                  <MapPin size={15} />
                </span>
                <span className="saudi-pin-card">
                  <small>01 · {isArabic ? branches[0].badgeAr : branches[0].badge}</small>
                  <strong>{isArabic ? branches[0].cityAr : branches[0].city}</strong>
                  <span className="saudi-pin-cta">
                    {isArabic ? 'الذهاب إلى الموقع' : 'Go to Location'} <ArrowUpRight size={12} />
                  </span>
                </span>
              </a>

              {/* Interactive Riyadh Map Pin - Clicking opens branch Google Maps location! */}
              <a
                className={`saudi-map-pin-anchor riyadh ${activeHomeBranchId === 'riyadh' ? 'is-active' : ''}`}
                href={branches[1].mapUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setActiveHomeBranchId('riyadh')}
                aria-label={isArabic ? 'فتح موقع فرع الرياض على خرائط جوجل' : 'Open Riyadh branch location in Google Maps'}
              >
                <span className="saudi-pin-ripple" />
                <span className="saudi-pin-core">
                  <MapPin size={15} />
                </span>
                <span className="saudi-pin-card">
                  <small>02 · {isArabic ? branches[1].badgeAr : branches[1].badge}</small>
                  <strong>{isArabic ? branches[1].cityAr : branches[1].city}</strong>
                  <span className="saudi-pin-cta">
                    {isArabic ? 'الذهاب إلى الموقع' : 'Go to Location'} <ArrowUpRight size={12} />
                  </span>
                </span>
              </a>
            </div>

            {/* Selected Branch Live Guide Footer */}
            <div className="saudi-map-guide-footer">
              <div className="saudi-guide-details">
                <span className="saudi-guide-coords">{activeHomeBranch.coords.label}</span>
                <strong className="saudi-guide-title">
                  {isArabic ? `فرع ${activeHomeBranch.cityAr} (${activeHomeBranch.badgeAr})` : `${activeHomeBranch.city} Branch (${activeHomeBranch.badge})`}
                </strong>
                <p className="saudi-guide-addr">{isArabic ? activeHomeBranch.addressAr : activeHomeBranch.address}</p>
              </div>
              <a
                href={activeHomeBranch.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="saudi-guide-action-btn"
                aria-label={isArabic ? 'فتح موقع الفرع على خرائط جوجل' : 'Open branch location in Google Maps'}
              >
                <span>{isArabic ? 'الذهاب إلى موقع الفرع' : 'Go to Branch Location'}</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
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
