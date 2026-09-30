import { ArrowUpRight, MoveRight, MapPin } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { capabilities, clients, getProjectSlug, images, projects, services } from '@/data/content';
import useReveal from '@/components/useReveal';
import { useLanguage } from '@/context/LanguageContext';

const featuredProjects = [projects[1], projects[9], projects[12]];

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
};

function HomePage() {
  const { isArabic } = useLanguage();
  useReveal();

  return (
    <>
      <section className="hero section-dark">
        <div className="hero-image" style={{ backgroundImage: `url(${images.hero})` }} />
        <div className="hero-grid" />
        <div className="container hero-content">
          <div className="eyebrow light"><span /> {isArabic ? 'المملكة العربية السعودية · جدة والرياض' : 'Saudi Arabia · Jeddah & Riyadh'}</div>
          <h1>{isArabic ? <>نبني مشاريع موثوقة عبر <em>الجودة والسلامة</em> والتنفيذ المنضبط.</> : <>Building reliable projects through <em>quality, safety,</em> and disciplined execution.</>}</h1>
          <p className="hero-copy">{isArabic ? 'حلول متكاملة للمقاولات وإدارة الإنشاءات والرفع المساحي والدراسات الجيوتقنية وأعمال الترميم في جميع أنحاء المملكة.' : 'Integrated contracting, construction management, surveying, geotechnical investigation, and renovation solutions across Saudi Arabia.'}</p>
          <div className="hero-actions">
            <Link className="button" to="/projects">{isArabic ? 'استكشف مشاريعنا' : 'Explore our projects'} <ArrowUpRight size={17} /></Link>
            <Link className="text-button light-text" to="/contact">{isArabic ? 'تواصل مع يورو كونستركت' : 'Contact Euro Construct'} <MoveRight size={17} /></Link>
          </div>
          <div className="hero-note"><span className="note-line" /><span>{isArabic ? 'دعم متكامل للمشروع من التجهيز وحتى التسليم النهائي.' : 'End-to-end project support, from mobilization through final handover.'}</span></div>
        </div>
        <div className="hero-stats container">
          <div><strong>10<span>+</span></strong><span>{isArabic ? 'عملاء مختارون' : 'Selected clients'}</span></div>
          <div><strong>03<span>+</span></strong><span>{isArabic ? 'قطاعات رئيسية' : 'Key sectors'}</span></div>
          <div><strong>03<span>+</span></strong><span>{isArabic ? 'نطاق إقليمي' : 'Regional presence'}</span></div>
        </div>
      </section>

      <section className="intro section-light">
        <div className="container intro-grid">
          <div className="intro-main reveal">
            <div className="section-label">01 <span>{isArabic ? 'عن يورو كونستركت' : 'About Euro Construct'}</span></div>
            <p className="kicker">{isArabic ? 'شريك موثوق على أرض الواقع' : 'A trusted partner on the ground'}</p>
            <h2>{isArabic ? <>دعم إنشائي يرتكز على <em>الوضوح والتحكم.</em></> : <>Construction support built around <em>clarity and control.</em></>}</h2>
            <p className="lead">{isArabic ? 'يورو كونستركت شركة مقاولات وإنشاءات مقرها المملكة العربية السعودية، تقدم خدمات المقاولات العامة وإدارة الإنشاءات والرفع المساحي والدراسات الجيوتقنية وتقييم التربة والأساسات وأعمال الترميم.' : 'Euro Construct is a contracting and construction company based in Saudi Arabia. The company provides general contracting, construction management, site survey, geotechnical investigation, soil and foundation assessment, and renovation works.'}</p>
            <p>{isArabic ? 'ندعم المشاريع من خلال فرق مواقع مؤهلة وتخطيط سليم وإدارة للموارد وضبط الجودة والالتزام بالسلامة.' : 'Euro Construct supports projects through qualified site teams, proper planning, resource management, quality control and safety compliance.'}</p>
            <div className="vision-mission">
              <article>
                <span>{isArabic ? 'رؤيتنا' : 'Our vision'}</span>
                <p>{isArabic ? 'أن نكون شركة موثوقة للمقاولات وخدمات المواقع في المملكة، معروفة بالجودة والسلامة وحلول الدعم الإنشائي الموثوقة.' : 'A trusted contracting and site services company in Saudi Arabia, recognized for quality, safety, and reliable construction support solutions.'}</p>
              </article>
              <article>
                <span>{isArabic ? 'رسالتنا' : 'Our mission'}</span>
                <p>{isArabic ? 'تنفيذ المشاريع باحترافية والتزام من خلال إدارة فعالة للموقع وضبط صارم للجودة وممارسات عمل آمنة وتنسيق كفء حتى التسليم النهائي.' : 'To deliver construction projects with professionalism and commitment by applying effective site management, strict quality control, safe working practices, and efficient coordination from mobilization through final handover.'}</p>
              </article>
            </div>
          </div>
          <div className="intro-image reveal">
            <img src={images.survey} alt="Construction cranes from the Euro Construct company profile" />
            <span className="image-caption">{isArabic ? 'قدرات تنفيذ متكاملة' : 'Integrated execution capability'}<br /><b>{isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia'}</b></span>
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
              <Link className="service-card home-service-card reveal" to="/services" key={title}>
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
            <h2>{isArabic ? <>ثقة راسخة<br /><em>حيث تصنع الفرق.</em></> : <>Trusted where<br /><em>it matters.</em></>}</h2>
            <p>{isArabic ? 'ندعم جهات رائدة في القطاعين العام والخاص في أعمال الإنشاء والبنية التحتية وتنفيذ المشاريع.' : 'Supporting leading public and private organizations across construction, infrastructure, and project delivery.'}</p>
            <Link className="text-button" to="/clients">{isArabic ? 'تعرف على عملائنا' : 'Meet our clients'} <MoveRight size={17} /></Link>
          </div>
          <div className="client-wall reveal">
            {clients.slice(0, 8).map((client) => (
              <div className="client-logo" key={client}><span>{isArabic ? clientArabic[client] : client}</span></div>
            ))}
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
        <div className="container cta-inner reveal">
          <div className="section-label light">{isArabic ? 'الجودة والسلامة' : 'Quality & safety'}</div>
          <h2>{isArabic ? <>نبني بمسؤولية.<br /><em>ونسلّم بموثوقية.</em></> : <>Built responsibly.<br /><em>Delivered reliably.</em></>}</h2>
          <p>{isArabic ? 'ممارسات عمل آمنة وضبط للجودة وتنفيذ موثوق وبناء مسؤول في كل مشروع.' : 'Safe working practices, quality control, reliable project execution and responsible construction — built into every engagement.'}</p>
          <Link className="button" to="/contact">{isArabic ? 'ناقش مشروعك القادم' : 'Discuss your next project'} <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}

export default HomePage;
