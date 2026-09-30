import { __toESM } from "../_runtime.mjs";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent, notFound, require_jsx_runtime, require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { ArrowUpRight, Building2, ChevronRight, ClipboardCheck, Construction, FileCheck2, HardHat, Landmark, Layers3, Menu, Ruler, ShieldCheck, Target, Users, X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-CjrdehVv.js
var images = {
	hero: "/profile/hero-construction.jpg",
	survey: "/profile/about-cranes.jpg"
};
var categories = [
	"All",
	"Roads & Infrastructure",
	"Surveying & Geotechnical",
	"Buildings & MEP",
	"Renovation",
	"Master Planning & Land",
	"Hajj & Holy Sites"
];
var projects = [
	{
		name: "Survey of New Roads at Hofuf Plant",
		category: "Surveying & Geotechnical",
		location: "Dammam | KSA",
		client: "Euro Consult for Engineering Consultancy / Saudi Cement Company",
		value: "3,500,000 SAR",
		image: "/profile/project-01.jpg",
		summary: "Provided topographic surveying, geotechnical investigations, and field assessment services to support the development of new roads and infrastructure within Hofuf Plant. The works addressed traffic and drainage challenges and provided technical data for future site development and infrastructure planning.",
		services: "Topographic and engineering surveying; geotechnical investigations, borehole drilling, and soil testing; traffic, drainage, and site condition assessments; technical reporting and engineering data collection."
	},
	{
		name: "East Jeddah Corridor",
		category: "Roads & Infrastructure",
		location: "Jeddah | KSA",
		client: "Euro Consult for Engineering Consultancy / Ministry of Municipal & Rural Affairs - Jeddah Municipality",
		value: "4,400,000 SAR",
		image: "/profile/project-02.jpg",
		summary: "Executed topographic surveys, geotechnical investigations, utility mapping, and traffic data collection for the East Jeddah Corridor project, supporting a major transportation corridor and enhancing mobility, safety, and urban growth in East Jeddah.",
		services: "Topographic surveying and land mapping; geotechnical investigations, borehole drilling, and soil testing; utility detection, infrastructure assessment, and traffic surveys; field engineering, data collection, and technical reporting."
	},
	{
		name: "Jeddah Port - Al Khumra Connectivity Project",
		category: "Roads & Infrastructure",
		location: "Jeddah | KSA",
		client: "Euro Consult for Engineering Consultancy / The General Authority of Ports",
		value: "5,300,000 SAR",
		image: "/profile/project-03.jpg",
		summary: "Executed comprehensive field investigation and survey works for a dedicated freight corridor linking Jeddah Islamic Port with the Al Khumra logistics area, supporting better freight movement, reduced congestion, and improved road connectivity.",
		services: "Topographic surveying and route corridor mapping; geotechnical investigations, borehole drilling, and soil testing; traffic surveys, freight movement studies, and infrastructure assessments; utility detection, field data collection, and technical reporting."
	},
	{
		name: "Dammam Metropolitan Traffic Enhancement",
		category: "Roads & Infrastructure",
		location: "Dammam | KSA",
		client: "Euro Consult for Engineering Consultancy / Eastern Province Municipality",
		value: "3,220,000 SAR",
		image: "/profile/project-04.jpg",
		summary: "Executed survey and field investigation works for road rehabilitation and traffic enhancement projects across Dammam, Khobar, and Dhahran, supporting roadway upgrades, infrastructure improvements, and traffic flow optimization.",
		services: "Topographic surveying and corridor mapping; geotechnical investigations, borehole drilling, and soil testing; traffic surveys, infrastructure assessments, and utility mapping; field data collection, site investigations, and technical reporting."
	},
	{
		name: "Pilgrims Flow Management at Muzdalifah Metro Stations 1, 2 & 3",
		category: "Hajj & Holy Sites",
		location: "Makkah | KSA",
		client: "Euro Consult for Engineering Consultancy / Kidana Development Company",
		value: "2,600,000 SAR",
		image: "/profile/project-05.jpg",
		summary: "Executed field monitoring and operational assessment activities during the Hajj season, including crowd movement observation, pedestrian flow monitoring, passenger counting, congestion identification, and operational performance assessment.",
		services: "Crowd movement monitoring and pedestrian flow surveys; passenger counting and operational data collection; congestion analysis and movement pattern assessment; operational performance reporting and recommendations."
	},
	{
		name: "Transportation System Improvements in Al-Masha’ir Al-Muqaddasah",
		category: "Hajj & Holy Sites",
		location: "Makkah | KSA",
		client: "Euro Consult for Engineering Consultancy / Kidana Development Company",
		value: "3,410,000 SAR",
		image: "/profile/project-06.jpg",
		summary: "Provided topographic surveying, geotechnical investigation, and field data collection services supporting roads, pedestrian bridges, shuttle bus facilities, and associated infrastructure across the main pilgrimage areas.",
		services: "Topographic and engineering surveying; geotechnical investigations, borehole drilling, and soil testing; existing conditions assessment and field data collection; technical reporting and engineering recommendations."
	},
	{
		name: "Survey Services for State Properties General Authority",
		category: "Surveying & Geotechnical",
		location: "Riyadh | KSA",
		client: "Euro Consult for Engineering Consultancy / State Properties General Authority",
		value: "5,100,000 SAR",
		image: "/profile/project-07.jpg",
		summary: "Provided comprehensive surveying services across designated Riyadh sites, including topographic, cadastral, and boundary surveys, land asset verification, mapping, and spatial data collection for property management and development.",
		services: "Topographic and cadastral surveying; boundary verification and land asset mapping; GIS data collection and spatial analysis; survey reporting and technical documentation."
	},
	{
		name: "Al-Masha’ir Transportation System Improvement - Shuttle Bus",
		category: "Hajj & Holy Sites",
		location: "Makkah | KSA",
		client: "Euro Consult for Engineering Consultancy / Kidana Development Company",
		value: "4,200,000 SAR",
		image: "/profile/project-08.jpg",
		summary: "Provided surveying, traffic data collection, and geotechnical investigation services for roads, pedestrian bridges, shuttle bus corridors, and supporting infrastructure across the main pilgrimage areas in Makkah.",
		services: "Topographic and engineering surveying; traffic counts, mobility studies, and field data collection; geotechnical investigations, borehole drilling, and soil testing; technical reporting and infrastructure assessment."
	},
	{
		name: "University of Jeddah Project",
		category: "Surveying & Geotechnical",
		location: "Jeddah | KSA",
		client: "Euro Consult for Engineering Consultancy / Ministry of Education",
		value: "3,300,000 SAR",
		image: "/profile/project-09.jpg",
		summary: "Provided hydrological investigations, topographic surveying, and geotechnical services for the University of Jeddah development area, supporting stormwater management, flood protection, and road infrastructure development.",
		services: "Hydrological investigations and flood risk assessments; topographic surveying and terrain mapping; geotechnical investigations, borehole drilling, and soil testing; drainage studies, field data collection, and technical reporting."
	},
	{
		name: "ZATCA MEP Engineering Services Project",
		category: "Buildings & MEP",
		location: "Multiple Locations | KSA",
		client: "Euro Consult for Engineering Consultancy / Zakat, Tax and Customs Authority",
		value: "2,600,000 SAR",
		image: "/profile/project-10.jpg",
		summary: "Provided site investigation, engineering surveys, and field assessment services across multiple ZATCA facilities to support the development and upgrade of building services and infrastructure systems.",
		services: "Existing conditions surveys and site assessments; utility mapping and infrastructure investigations; field data collection and technical inspections; engineering reporting and technical support."
	},
	{
		name: "Planning, Organization, Survey & Parcelization of MOF Plot East",
		category: "Master Planning & Land",
		location: "Al-Madinah | KSA",
		client: "Euro Consult for Engineering Consultancy / Ministry of Finance",
		value: "8,200,000 SAR",
		image: "/profile/project-11.jpg",
		summary: "Provided planning, topographic surveying, and land parcelization services for a Ministry of Finance site, supporting future development and land management objectives.",
		services: "Topographic and cadastral surveying; boundary verification and land parcelization; site planning and land subdivision studies; mapping, documentation, and technical reporting."
	},
	{
		name: "Pilgrims Disembarkment Areas Development - Al Mashaer Al Muqadasah",
		category: "Hajj & Holy Sites",
		location: "Makkah | KSA",
		client: "Euro Consult for Engineering Consultancy / Ministry of Hajj and Umrah",
		value: "2,500,000 SAR",
		image: "/profile/project-12.jpg",
		summary: "Provided surveying, site planning, and field assessment services for pilgrim disembarkment areas, enhancing safety, accessibility, and operational efficiency during Hajj seasons.",
		services: "Topographic surveying and site mapping; existing conditions assessment and field investigations; pedestrian movement and crowd flow analysis; site planning, technical reporting, and development support."
	},
	{
		name: "Kuday Parking Development Supervision",
		category: "Hajj & Holy Sites",
		location: "Makkah | KSA",
		client: "Euro Consult for Engineering Consultancy / Nusuk",
		value: "5,000,000 SAR",
		image: "/profile/project-13.jpg",
		summary: "Provided surveying, site investigation, and technical support for the Kuday Parking Development Project, supporting the planning, development, and operational enhancement of parking facilities serving pilgrims and visitors.",
		services: "Topographic surveying and site mapping; existing conditions assessment and field investigations; infrastructure and access road evaluations; technical reporting and development support."
	},
	{
		name: "Euro Consult Office - Design and Renovation",
		category: "Renovation",
		location: "Makkah | KSA",
		client: "Euro Consult for Engineering Consultancy",
		value: "1,750,000 SAR",
		image: "/profile/project-14.jpg",
		summary: "Design and renovation of the Euro Consult office in Makkah, tailored to the company’s workforce and business scale with capacity for up to 40 employees.",
		services: "Architectural, structural, and MEP works; interior fit-out and finishing; mechanical, electrical, and plumbing installation; project execution, testing, and commissioning."
	},
	{
		name: "Euro Consult Headquarters - Design and Execution",
		category: "Renovation",
		location: "Riyadh | KSA",
		client: "Euro Consult for Engineering Consultancy",
		value: "1,500,000 SAR",
		image: "/profile/project-15.jpg",
		summary: "Design and execution of the Euro Consult headquarters in Riyadh, tailored to the company’s workforce and business scale with capacity for up to 60 employees.",
		services: "Architectural, structural, and MEP works; interior fit-out and finishing; mechanical, electrical, and plumbing installation; project execution, testing, and commissioning."
	},
	{
		name: "Euro Consult Office - Riyadh Design and Renovation",
		category: "Renovation",
		location: "Riyadh | KSA",
		client: "Euro Consult for Engineering Consultancy",
		value: "2,000,000 SAR",
		image: "/profile/project-16.jpg",
		summary: "Design and execution of the Euro Consult Regional Headquarters in Riyadh, tailored to the company’s workforce and business scale with capacity for up to 40 employees.",
		services: "Architectural, structural, and MEP works; interior fit-out and finishing; mechanical, electrical, and plumbing installation; project execution, testing, and commissioning."
	},
	{
		name: "Administrative Building - Jeddah Industrial Zone",
		category: "Buildings & MEP",
		location: "Jeddah | KSA",
		client: "Al Musanadah Al Eskania Co.",
		value: "7,638,209 SAR",
		image: "/profile/project-17.jpg",
		summary: "Delivered masonry, plastering, painting, and finishing works for an administrative building, including blockwork, partitions, flooring, ceilings, doors, windows, and associated civil and MEP works.",
		services: "Building and blockwork construction; internal and external plastering; architectural finishing and painting; flooring, wall finishes, ceilings, doors, and windows; MEP works; joinery works."
	},
	{
		name: "Gypsum Ceiling & Finishing Works - Al Musanadah Plaza",
		category: "Renovation",
		location: "Tabuk | KSA",
		client: "Al Musanadah Al Eskania Co.",
		value: "6,982,115 SAR",
		image: "/profile/project-18.jpg",
		summary: "Executed gypsum board suspended ceilings and associated finishing works, including metal framing, service openings, joint treatment, and final preparation for painting.",
		services: "Gypsum board suspended ceilings; metal framing and suspension systems; openings for lighting, HVAC, fire protection, and other services; joint treatment, sanding, and final finishing."
	},
	{
		name: "Elevator Installation Works - Royal Court",
		category: "Buildings & MEP",
		location: "Jeddah | KSA",
		client: "Orient International Ltd.",
		value: "10,700,000 SAR",
		image: "/profile/project-19.jpg",
		summary: "Delivered the civil, structural, architectural, and electrical works required for a Royal Court elevator, including assessment, structural design, pit construction, waterproofing, steel framing, glazing, finishes, and electrical provisions.",
		services: "Site inspection and structural assessment; structural design of the elevator steel frame; elevator pit, reinforced concrete, and waterproofing; steel structure, glazing, and architectural finishes; electrical cabling and associated works."
	},
	{
		name: "Escalator Civil & Structural Works - Holy Sites",
		category: "Buildings & MEP",
		location: "Mina | KSA",
		client: "Orient International Ltd.",
		value: "14,300,000 SAR",
		image: "/profile/project-20.jpg",
		summary: "Delivered civil and structural works for the installation of 10 escalators at the Holy Sites in Mina, including concrete pits, drainage, steel structures, canopies, finishes, handrails, and electrical control provisions.",
		services: "Reinforced concrete escalator pits; steel structure and support installation; drainage and waterproofing; fire-resistant canopies and protective cladding; electrical control and power provisions."
	},
	{
		name: "Road & Asphalt Works - Workers’ Housing Project, Phase 3",
		category: "Roads & Infrastructure",
		location: "Jeddah | KSA",
		client: "Al Musanadah Al Eskania Co.",
		value: "9,545,185 SAR",
		image: "/profile/project-21.jpg",
		summary: "Delivered road and asphalt works for Phase 3 of the Workers’ Housing Project, including site grading, base courses, asphalt paving, drainage, and associated road works.",
		services: "Site grading and compaction; subgrade, subbase, and aggregate base courses; prime coat, tack coat, and asphalt paving; road markings, signage, and drainage works."
	}
];
var services = [
	{
		title: "General Contracting",
		icon: Construction,
		text: "Full project execution with quality and safety commitment."
	},
	{
		title: "Construction Management",
		icon: ClipboardCheck,
		text: "Managing site teams, resources, schedules, and progress."
	},
	{
		title: "Site Survey",
		icon: Ruler,
		text: "Existing site conditions and measurements."
	},
	{
		title: "Geotechnical Investigation",
		icon: Layers3,
		text: "Subsurface soil and foundation assessment."
	},
	{
		title: "Renovation Works",
		icon: Building2,
		text: "Building renovation and finishing activities, repair and upgrade works, plus interior renovation and fit-out."
	}
];
var capabilities = [
	{
		title: "Skilled Manpower",
		text: "Experienced engineers, supervisors, and site teams.",
		icon: Users
	},
	{
		title: "Plant & Equipment",
		text: "Resources and tools supporting efficient project execution.",
		icon: HardHat
	},
	{
		title: "QA/QC Systems",
		text: "Structured quality control aligned with project requirements.",
		icon: FileCheck2
	},
	{
		title: "Site Execution",
		text: "Coordinated site activities with disciplined control.",
		icon: Target
	},
	{
		title: "Procurement",
		text: "Reliable sourcing, material flow, and delivery coordination.",
		icon: Landmark
	},
	{
		title: "HSE Standards",
		text: "Safe practices protecting people, sites, and communities.",
		icon: ShieldCheck
	}
];
var values = [
	["Integrity", "We act with honesty, transparency, and accountability."],
	["Teamwork", "We work as one team with clients, partners, and project teams."],
	["Client Focus", "We build lasting relationships based on trust and satisfaction."],
	["Agility", "We respond effectively to project needs and site challenges."],
	["Quality & Safety", "We deliver quality work while protecting people, equipment, and the environment."],
	["Improvement", "We improve our methods to enhance project delivery."],
	["Sustainability", "We apply responsible practices that support long-term value."]
];
function getProjectSlug(project) {
	return project.name.normalize("NFKD").replace(/[’']/g, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "").toLowerCase();
}
function getProjectBySlug(slug) {
	return projects.find((project) => getProjectSlug(project) === slug);
}
var clients = [
	"Zakat, Tax and Customs Authority",
	"Ministry of Education",
	"Ministry of Finance",
	"Saudi Cement",
	"Ministry of Hajj and Umrah",
	"Kidana",
	"Euro Consult for Engineering Consultancy",
	"Ministry of Municipal & Rural Affairs",
	"Nusuk Hajj",
	"Jeddah Islamic Port",
	"Ministry of Transport and Logistic Services",
	"State Properties General Authority"
];
var navItems = [
	"Home",
	"About",
	"Capabilities",
	"Services",
	"Projects",
	"Clients",
	"Contact"
];
var navPaths = {
	Home: "/",
	About: "/about",
	Capabilities: "/capabilities",
	Services: "/services",
	Projects: "/projects",
	Clients: "/clients",
	Contact: "/contact"
};
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-ChIdZ7mP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function Brand({ light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `brand ${light ? "brand-light" : ""}`,
		"aria-label": "Euro Construct for Contracting",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			className: "brand-logo",
			src: "/ecc-logo.jpg",
			alt: "Euro Construct for Contracting"
		})
	});
}
var LanguageContext = (0, import_react.createContext)(null);
function LanguageProvider({ children }) {
	const [language, setLanguage] = (0, import_react.useState)("en");
	const [hasMounted, setHasMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (window.localStorage.getItem("ecc-language") === "ar") setLanguage("ar");
		setHasMounted(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hasMounted) return;
		document.documentElement.lang = language;
		document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
		window.localStorage.setItem("ecc-language", language);
	}, [hasMounted, language]);
	const value = (0, import_react.useMemo)(() => ({
		language,
		isArabic: language === "ar",
		toggleLanguage: () => setLanguage((current) => current === "en" ? "ar" : "en")
	}), [language]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageContext.Provider, {
		value,
		children
	});
}
function useLanguage() {
	const context = (0, import_react.useContext)(LanguageContext);
	if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
	return context;
}
var arabicNav$1 = {
	Home: "الرئيسية",
	About: "من نحن",
	Capabilities: "قدراتنا",
	Services: "خدماتنا",
	Projects: "مشاريعنا",
	Clients: "عملاؤنا",
	Contact: "تواصل معنا"
};
function Header() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const { isArabic, toggleLanguage } = useLanguage();
	const closeMenu = () => setMenuOpen(false);
	(0, import_react.useEffect)(() => {
		const updateHeader = () => setScrolled(window.scrollY > 24);
		updateHeader();
		window.addEventListener("scroll", updateHeader, { passive: true });
		return () => window.removeEventListener("scroll", updateHeader);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `site-header ${scrolled ? "is-scrolled" : "is-top"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "header-brand-btn",
				"aria-label": "Euro Construct home",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "desktop-nav",
				"aria-label": "Main navigation",
				children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					className: "nav-link",
					to: navPaths[item],
					activeProps: { className: "nav-link nav-active" },
					activeOptions: { exact: item === "Home" },
					children: isArabic ? arabicNav$1[item] : item
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "language-switch",
				type: "button",
				onClick: toggleLanguage,
				"aria-label": isArabic ? "Switch to English" : "التبديل إلى العربية",
				children: isArabic ? "EN" : "العربية"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				className: "button button-small header-cta",
				to: "/contact",
				children: [
					isArabic ? "تواصل معنا" : "Contact Us",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "menu-button",
				"aria-label": "Open navigation",
				onClick: () => setMenuOpen(true),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 22 })
			})
		]
	}), menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mobile-nav-wrap",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mobile-nav-backdrop",
			onClick: closeMenu
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "mobile-nav",
			"aria-label": "Mobile navigation",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mobile-nav-top",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "icon-button",
						"aria-label": "Close navigation",
						onClick: closeMenu,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 22 })
					})]
				}),
				navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					className: "mobile-nav-link",
					to: navPaths[item],
					activeProps: { className: "mobile-nav-link nav-active" },
					activeOptions: { exact: item === "Home" },
					onClick: closeMenu,
					children: [isArabic ? arabicNav$1[item] : item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 18 })]
				}, item)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					className: "button",
					to: "/contact",
					onClick: closeMenu,
					children: [
						isArabic ? "تواصل معنا" : "Contact Us",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 17 })
					]
				})
			]
		})]
	})] });
}
var arabicNav = {
	Home: "الرئيسية",
	About: "من نحن",
	Capabilities: "قدراتنا",
	Services: "خدماتنا",
	Projects: "مشاريعنا",
	Clients: "عملاؤنا",
	Contact: "تواصل معنا"
};
function Footer() {
	const { isArabic } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "footer section-dark",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-top",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, { light: true }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? "خدمات مقاولات ودعم إنشائي ترتكز على الجودة والسلامة والتنفيذ المنضبط في جميع أنحاء المملكة العربية السعودية." : "Contracting and construction support built on quality, safety and disciplined execution across Saudi Arabia." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "back-top",
							onClick: () => window.scrollTo({
								top: 0,
								behavior: "smooth"
							}),
							children: [
								isArabic ? "العودة للأعلى" : "Back to top",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-links",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "استكشف" : "Explore" }), navItems.filter((item) => item !== "Home").map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							className: "footer-link",
							to: navPaths[item],
							children: isArabic ? arabicNav[item] : item
						}, item))] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "الخدمات" : "Services" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "footer-link",
								to: "/services",
								children: isArabic ? "المقاولات العامة" : "General Contracting"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "footer-link",
								to: "/services",
								children: isArabic ? "إدارة الإنشاءات" : "Construction Management"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "footer-link",
								to: "/services",
								children: isArabic ? "الرفع المساحي" : "Site Survey"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "footer-link",
								to: "/services",
								children: isArabic ? "الدراسات الجيوتقنية" : "Geotechnical Investigation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "footer-link",
								to: "/services",
								children: isArabic ? "أعمال الترميم" : "Renovation Works"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "المكاتب" : "Offices" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"حي الروضة، طريق المدينة،",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"جدة، المملكة العربية السعودية"
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"Al Rawdah District, Al Madinah Road,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Jeddah, Saudi Arabia"
							] }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"7095 طريق الملك فيصل بن عبدالعزيز،",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"الرياض، المملكة العربية السعودية"
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"7095 King Faisal Bin Abdul Aziz Road,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Riyadh, Saudi Arabia"
							] }) })
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-bottom",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["© 2026 ", isArabic ? "يورو كونستركت للمقاولات" : "Euro Construct for Contracting"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "الجودة · السلامة · الموثوقية" : "Quality · Safety · Reliability" })]
				})
			]
		})
	});
}
var src_default = "/assets/index-CZK5nN4y.css";
var description = "Euro Construct is a contracting and construction company providing integrated project support across Saudi Arabia.";
var Route$8 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1.0"
			},
			{ title: "Euro Construct for Contracting | Building with discipline" },
			{
				name: "description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:title",
				content: "Euro Construct for Contracting"
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:image",
				content: "/profile/hero-construction.jpg"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:image",
				content: "/profile/hero-construction.jpg"
			}
		],
		links: [{
			rel: "stylesheet",
			href: src_default
		}, {
			rel: "icon",
			type: "image/svg+xml",
			href: "/favicon.svg"
		}]
	}),
	component: RootComponent,
	notFoundComponent: NotFound
});
function RootComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootDocument, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "top",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	}) }) });
}
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "page-header section-dark",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container page-header-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "eyebrow light",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " 404"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "That page could not be found." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					className: "button",
					to: "/",
					children: "Return home"
				})
			]
		})
	});
}
var $$splitComponentImporter$7 = () => import("./routes-BvpO3RHg.mjs");
var Route$7 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Euro Construct for Contracting | Building with discipline" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./about-Bf6xB1iE.mjs");
var Route$6 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About | Euro Construct for Contracting" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./capabilities-Db6M_hgT.mjs");
var Route$5 = createFileRoute("/capabilities")({
	head: () => ({ meta: [{ title: "Capabilities | Euro Construct for Contracting" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./clients-iDIiF5gE.mjs");
var Route$4 = createFileRoute("/clients")({
	head: () => ({ meta: [{ title: "Clients | Euro Construct for Contracting" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-CbKGe772.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact | Euro Construct for Contracting" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./projects-CYydlOkq.mjs");
var Route$2 = createFileRoute("/projects")({
	validateSearch: (search) => {
		const category = search.category;
		return typeof category === "string" && category !== "All" && categories.includes(category) ? { category } : {};
	},
	head: () => ({ meta: [{ title: "Projects | Euro Construct for Contracting" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services-B5clUTpc.mjs");
var Route$1 = createFileRoute("/services")({
	head: () => ({ meta: [{ title: "Services | Euro Construct for Contracting" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./projects_._projectId-CjgcNMzN.mjs");
var Route = createFileRoute("/projects_/$projectId")({
	loader: ({ params }) => {
		const project = getProjectBySlug(params.projectId);
		if (!project) throw notFound();
		return project;
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: `${loaderData?.name ?? "Project"} | Euro Construct for Contracting` },
		{
			name: "description",
			content: loaderData?.summary
		},
		{
			property: "og:image",
			content: loaderData?.image
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$7.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	AboutRoute: Route$6.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$8
	}),
	CapabilitiesRoute: Route$5.update({
		id: "/capabilities",
		path: "/capabilities",
		getParentRoute: () => Route$8
	}),
	ClientsRoute: Route$4.update({
		id: "/clients",
		path: "/clients",
		getParentRoute: () => Route$8
	}),
	ContactRoute: Route$3.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$8
	}),
	ProjectsRoute: Route$2.update({
		id: "/projects",
		path: "/projects",
		getParentRoute: () => Route$8
	}),
	ServicesRoute: Route$1.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$8
	}),
	ProjectsProjectIdRoute: Route.update({
		id: "/projects_/$projectId",
		path: "/projects/$projectId",
		getParentRoute: () => Route$8
	})
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent"
	});
}
//#endregion
export { Route, capabilities, categories, clients, getProjectSlug, images, projects, router_exports, services, useLanguage, values };
