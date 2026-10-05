import { __toESM } from "../_runtime.mjs";
import { Link, require_jsx_runtime, require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, MapPin, MoveRight, Pause, Play, ShieldCheck, Target } from "../_libs/lucide-react.mjs";
import { capabilities, clientLogos, getProjectSlug, getServiceSlug, images, projects, services, useLanguage } from "./router-DB--jhjD.mjs";
import { useReveal } from "./useReveal-KP071FMv.mjs";
import { arabicLocation, categoryArabic, projectNameArabic } from "./arabic-DBybkNQG.mjs";
import { branches } from "./branches-IiR2Jopg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bgu8ftBu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var heroProjects = [
	projects[9],
	projects[4],
	projects[1]
];
var heroProjectArabic = [
	"مشروع الخدمات الهندسية للزكاة والضريبة والجمارك",
	"إدارة حركة الحجاج بمحطات قطار مزدلفة 1 و2 و3",
	"مشروع محور شرق جدة"
];
var heroProjectEnglish = [
	"ZATCA MEP Engineering Services Project",
	"Pilgrims Flow Management at Muzdalifah Metro Stations 1, 2 & 3",
	"East Jeddah Corridor"
];
var capabilityArabic = {
	"Skilled Manpower": ["كوادر مؤهلة", "مهندسون ومشرفون وفرق مواقع ذوو خبرة."],
	"Plant & Equipment": ["المعدات والآليات", "موارد ومعدات تدعم تنفيذ المشاريع بكفاءة."],
	"QA/QC Systems": ["أنظمة الجودة", "ضبط جودة منظم ومتوافق مع متطلبات المشروع."],
	"Site Execution": ["التنفيذ الميداني", "أنشطة موقع منسقة ورقابة تنفيذ منضبطة."],
	Procurement: ["المشتريات", "توريد موثوق وتنسيق فعال للمواد والتسليم."],
	"HSE Standards": ["معايير السلامة", "ممارسات آمنة تحمي الأفراد والمواقع والمجتمع."]
};
var serviceArabic = {
	"General Contracting": ["المقاولات العامة", "تنفيذ متكامل للمشاريع مع الالتزام بالجودة والسلامة."],
	"Construction Management": ["إدارة الإنشاءات", "إدارة فرق الموقع والموارد والجداول الزمنية والتقدم."],
	"Site Survey": ["الرفع المساحي", "دراسة وقياس الظروف القائمة في الموقع."],
	"Geotechnical Investigation": ["الدراسات الجيوتقنية", "تقييم التربة تحت السطح والأساسات."],
	"Renovation Works": ["أعمال الترميم", "ترميم وتشطيب المباني والإصلاح والتطوير والتجهيز الداخلي."]
};
var clientArabic = {
	"Zakat, Tax and Customs Authority": "هيئة الزكاة والضريبة والجمارك",
	"Ministry of Education": "وزارة التعليم",
	"Ministry of Finance": "وزارة المالية",
	"Saudi Cement": "الأسمنت السعودية",
	"Ministry of Hajj and Umrah": "وزارة الحج والعمرة",
	Kidana: "كدانة",
	"Euro Consult for Engineering Consultancy": "يورو كونسلت للاستشارات الهندسية",
	"Ministry of Municipal & Rural Affairs": "وزارة الشؤون البلدية والقروية",
	"State Properties General Authority": "الهيئة العامة لعقارات الدولة"
};
function HomePage() {
	const { isArabic } = useLanguage();
	const [heroSlide, setHeroSlide] = (0, import_react.useState)(0);
	const [sliderPaused, setSliderPaused] = (0, import_react.useState)(false);
	const [projectSlide, setProjectSlide] = (0, import_react.useState)(0);
	const [projectsPaused, setProjectsPaused] = (0, import_react.useState)(false);
	const [projectHovered, setProjectHovered] = (0, import_react.useState)(false);
	const [activeHomeBranchId, setActiveHomeBranchId] = (0, import_react.useState)("jeddah");
	useReveal();
	const activeHomeBranch = branches.find((b) => b.id === activeHomeBranchId) ?? branches[0];
	(0, import_react.useEffect)(() => {
		if (sliderPaused) return;
		const timer = window.setInterval(() => {
			setHeroSlide((current) => (current + 1) % heroProjects.length);
		}, 6e3);
		return () => window.clearInterval(timer);
	}, [sliderPaused]);
	(0, import_react.useEffect)(() => {
		if (projectsPaused || projectHovered) return;
		const timer = window.setInterval(() => {
			setProjectSlide((current) => (current + 1) % projects.length);
		}, 4800);
		return () => window.clearInterval(timer);
	}, [projectsPaused, projectHovered]);
	const changeSlide = (direction) => {
		setHeroSlide((current) => (current + direction + heroProjects.length) % heroProjects.length);
	};
	const changeProjectSlide = (direction) => {
		setProjectSlide((current) => (current + direction + projects.length) % projects.length);
	};
	const activeHeroProject = heroProjects[heroSlide];
	const visibleProjects = Array.from({ length: 3 }, (_, offset) => projects[(projectSlide + offset) % projects.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hero section-dark",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-slides",
					"aria-hidden": "true",
					children: heroProjects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: `hero-slide ${index === heroSlide ? "is-active" : ""}`,
						src: project.image,
						alt: "",
						fetchPriority: index === 0 ? "high" : "auto"
					}, `${project.name}-${index}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-grid" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container hero-content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "eyebrow light",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
								" ",
								isArabic ? "المملكة العربية السعودية · جدة والرياض" : "Saudi Arabia · Jeddah & Riyadh"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "hero-title",
							children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"نبني مشاريع موثوقة عبر ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "الجودة والسلامة" }),
								" والتنفيذ المنضبط."
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Building reliable projects" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["through ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "quality, safety," })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "and disciplined execution." })
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-copy",
							children: isArabic ? "حلول متكاملة للمقاولات وإدارة الإنشاءات والرفع المساحي والدراسات الجيوتقنية وأعمال الترميم في جميع أنحاء المملكة." : "Integrated contracting, construction management, surveying, geotechnical investigation, and renovation solutions across Saudi Arabia."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								className: "button",
								to: "/projects",
								children: [
									isArabic ? "استكشف مشاريعنا" : "Explore our projects",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 17 })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								className: "text-button light-text",
								to: "/contact",
								children: [
									isArabic ? "تواصل مع يورو كونستركت" : "Contact Euro Construct",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveRight, { size: 17 })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-note",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "note-line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "دعم متكامل للمشروع من التجهيز وحتى التسليم النهائي." : "End-to-end project support, from mobilization through final handover." })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container hero-slider-ui",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						className: "hero-project-caption",
						to: "/projects/$projectId",
						params: { projectId: getProjectSlug(activeHeroProject) },
						"aria-live": "polite",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								isArabic ? "مشروع مختار" : "Featured project",
								" · 0",
								heroSlide + 1
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: isArabic ? heroProjectArabic[heroSlide] : heroProjectEnglish[heroSlide] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 13 }),
								" ",
								isArabic ? arabicLocation(activeHeroProject.location) : activeHeroProject.location
							] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-slider-controls",
						"aria-label": isArabic ? "عناصر تحكم عرض المشاريع" : "Project slider controls",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => changeSlide(-1),
								"aria-label": isArabic ? "المشروع السابق" : "Previous project",
								children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 18 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hero-slide-dots",
								children: heroProjects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: index === heroSlide ? "is-active" : "",
									onClick: () => setHeroSlide(index),
									"aria-label": `${isArabic ? "عرض" : "Show"} ${isArabic ? heroProjectArabic[index] : heroProjectEnglish[index]}`,
									"aria-current": index === heroSlide ? "true" : void 0
								}, `${project.name}-${index}`))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSliderPaused((paused) => !paused),
								"aria-label": sliderPaused ? isArabic ? "تشغيل العرض" : "Play slideshow" : isArabic ? "إيقاف العرض" : "Pause slideshow",
								children: sliderPaused ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { size: 16 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => changeSlide(1),
								"aria-label": isArabic ? "المشروع التالي" : "Next project",
								children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-stats container",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: ["10", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "عملاء مختارون" : "Selected clients" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: ["03", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "قطاعات رئيسية" : "Key sectors" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: ["03", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "نطاق إقليمي" : "Regional presence" })] })
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "intro section-light",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "intro-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "intro-main reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								style: { fontSize: "50px" },
								children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["دعم إنشائي يرتكز على ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "الوضوح والتحكم." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Construction support built around ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "clarity and control." })] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lead",
								children: isArabic ? "يورو كونستركت شركة مقاولات وإنشاءات مقرها المملكة العربية السعودية، تقدم خدمات المقاولات العامة وإدارة الإنشاءات والرفع المساحي والدراسات الجيوتقنية وتقييم التربة والأساسات وأعمال الترميم." : "Euro Construct is a contracting and construction company based in Saudi Arabia. The company provides general contracting, construction management, site survey, geotechnical investigation, soil and foundation assessment, and renovation works."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? "ندعم المشاريع من خلال فرق مواقع مؤهلة وتخطيط سليم وإدارة للموارد وضبط الجودة والالتزام بالسلامة." : "Euro Construct supports projects through qualified site teams, proper planning, resource management, quality control and safety compliance." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "vision-mission",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "vision-mission-head",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "vision-mission-icon",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { size: 20 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "01" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: isArabic ? "رسالتنا" : "Our mission" })] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? "تنفيذ المشاريع باحترافية والتزام من خلال إدارة فعالة للموقع وضبط صارم للجودة وممارسات عمل آمنة وتنسيق كفء حتى التسليم النهائي." : "To deliver construction projects with professionalism and commitment by applying effective site management, strict quality control, safe working practices, and efficient coordination from mobilization through final handover." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "vision-mission-head",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "vision-mission-icon",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { size: 20 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "02" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: isArabic ? "رؤيتنا" : "Our vision" })] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? "أن نكون شركة موثوقة للمقاولات وخدمات المواقع في المملكة، معروفة بالجودة والسلامة وحلول الدعم الإنشائي الموثوقة." : "A trusted contracting and site services company in Saudi Arabia, recognized for quality, safety, and reliable construction support solutions." })] })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-label intro-section-label reveal",
						children: ["01 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "عن يورو كونستركت" : "About Euro Construct" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "intro-image reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: images.survey,
							alt: "Construction cranes from the Euro Construct company profile"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "image-caption",
							children: [
								isArabic ? "قدرات تنفيذ متكاملة" : "Integrated execution capability",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: isArabic ? "المملكة العربية السعودية" : "Saudi Arabia" })
							]
						})]
					})] })]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "capabilities home-capabilities section-sand",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "home-section-head reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-label",
						children: ["02 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "قدراتنا" : "Our capabilities" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"المنظومة التي تقود",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "التنفيذ الناجح." })
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"The structure behind",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "successful delivery." })
					] }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						className: "text-button",
						to: "/capabilities",
						children: [
							isArabic ? "استكشف قدراتنا" : "Explore capabilities",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveRight, { size: 17 })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "capability-grid",
					children: capabilities.map(({ title, text, icon: Icon }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "capability reveal",
						style: { transitionDelay: `${index * 50}ms` },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "capability-icon",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								size: 22,
								strokeWidth: 1.5
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "index",
								children: ["0", index + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: isArabic ? capabilityArabic[title][0] : title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? capabilityArabic[title][1] : text })
						] })]
					}, title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "services home-services section-light",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "home-section-head reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-label",
						children: ["03 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "خدمات متكاملة" : "Integrated services" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"من أول رفع مساحي حتى",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "التسليم النهائي." })
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"From first survey to",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "final handover." })
					] }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? "فريق واحد منسق يدعم التخطيط والتنفيذ والرقابة والإنجاز." : "One coordinated team supporting planning, execution, control, and completion." })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "services-grid",
					children: services.map(({ title, icon: Icon, text }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						className: "service-card home-service-card reveal",
						to: "/services/$serviceId",
						params: { serviceId: getServiceSlug(services[index]) },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "service-top",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "service-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 22 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", index + 1] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: isArabic ? serviceArabic[title][0] : title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? serviceArabic[title][1] : text }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-button",
								children: [
									isArabic ? "عرض الخدمة" : "View service",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveRight, { size: 16 })
								]
							})
						]
					}, title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "projects home-projects section-dark",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "home-section-head home-section-head-dark reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-label light",
						children: ["04 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "مشاريع مختارة" : "Featured projects" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"خبرة تثبت جدارتها",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "على أرض الواقع." })
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Experience that holds",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "up in the field." })
					] }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						className: "text-button light-text",
						to: "/projects",
						children: [
							isArabic ? "عرض جميع المشاريع" : "View all projects",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveRight, { size: 17 })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "home-project-carousel",
					onMouseEnter: () => setProjectHovered(true),
					onMouseLeave: () => setProjectHovered(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "project-grid",
						"aria-live": "off",
						children: visibleProjects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							className: "project-card",
							to: "/projects/$projectId",
							params: { projectId: getProjectSlug(project) },
							style: { animationDelay: `${index * 80}ms` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "project-image",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: project.image,
									alt: isArabic ? `صورة مشروع ${projectNameArabic[project.name] || project.name}` : `${project.name} project`
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? categoryArabic[project.category] : project.category })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "project-info",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: isArabic ? projectNameArabic[project.name] || project.name : project.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 14 }),
									" ",
									isArabic ? arabicLocation(project.location) : project.location
								] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 19 })]
							})]
						}, `${projectSlide}-${project.name}`))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "home-project-controls",
						"aria-label": isArabic ? "عناصر تحكم عرض المشاريع المختارة" : "Featured projects slider controls",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: String(projectSlide + 1).padStart(2, "0") }),
							" / ",
							String(projects.length).padStart(2, "0")
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => changeProjectSlide(-1),
								"aria-label": isArabic ? "المشاريع السابقة" : "Previous projects",
								children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 18 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setProjectsPaused((paused) => !paused),
								"aria-label": projectsPaused ? isArabic ? "تشغيل العرض" : "Play slideshow" : isArabic ? "إيقاف العرض" : "Pause slideshow",
								children: projectsPaused ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { size: 16 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => changeProjectSlide(1),
								"aria-label": isArabic ? "المشاريع التالية" : "Next projects",
								children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })
							})
						] })]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "home-clients section-light",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container home-clients-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "home-clients-copy reveal",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-label",
						children: ["05 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "عملاؤنا" : "Our clients" })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "home-client-marquee reveal",
					"aria-label": isArabic ? "شعارات عملائنا" : "Our client logos",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "home-client-track",
						children: [...clientLogos, ...clientLogos].map((client, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "client-logo",
							"aria-hidden": index >= clientLogos.length ? "true" : void 0,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: client.image,
								alt: index < clientLogos.length ? isArabic ? clientArabic[client.name] || client.name : client.name : "",
								loading: "lazy"
							})
						}, `${client.name}-${index}`))
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "presence section-sand",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container presence-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "presence-copy reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-label",
							children: ["06 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "حضورنا الإقليمي" : "Regional presence" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"قريبون من مواقع العمل.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "متصلون بالمنطقة." })
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Close to the work.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Connected to the region." })
						] }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? "نقدم حلولاً إنشائية متكاملة في الأسواق الإقليمية والدولية الرئيسية عبر فرعينا في جدة والرياض." : "Delivering integrated construction solutions across key regional and international markets through our regional hubs in Jeddah and Riyadh." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "presence-branch-cards",
							children: branches.map((branch) => {
								const isActive = activeHomeBranchId === branch.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `presence-branch-card ${isActive ? "is-active" : ""}`,
									onClick: () => setActiveHomeBranchId(branch.id),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "presence-branch-top",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "presence-branch-title-wrap",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "presence-branch-icon",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 18 })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: isArabic ? branch.cityAr : branch.city }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "presence-branch-role",
													children: isArabic ? branch.roleAr : branch.role
												})] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "presence-branch-badge",
												children: isArabic ? branch.badgeAr : branch.badge
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "presence-branch-address",
											children: isArabic ? branch.addressAr : branch.address
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "presence-branch-actions",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: branch.mapUrl,
												target: "_blank",
												rel: "noreferrer",
												className: "presence-branch-map-btn",
												onClick: (e) => e.stopPropagation(),
												"aria-label": `${isArabic ? "فتح موقع فرع" : "Open"} ${isArabic ? branch.cityAr : branch.city} ${isArabic ? "على خرائط جوجل" : "on Google Maps"}`,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 14 }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "الذهاب إلى موقع الفرع" : "Go to Branch Location" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })
												]
											})
										})
									]
								}, branch.id);
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "saudi-map-guide reveal",
					"aria-label": isArabic ? "دليل خريطة المملكة يوضح فرعي جدة والرياض" : "Saudi Arabia regional map guide showing Jeddah and Riyadh hubs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "saudi-map-guide-head",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "saudi-map-guide-title",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "saudi-map-indicator-dot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: isArabic ? "شبكة المكاتب الإقليمية" : "KSA Regional Network" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: isArabic ? "مركزان رئيسيان نشطان" : "2 Active Regional Hubs" })] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "saudi-map-tabs",
								children: branches.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: `saudi-map-tab-btn ${activeHomeBranchId === b.id ? "is-active" : ""}`,
									onClick: () => setActiveHomeBranchId(b.id),
									children: isArabic ? b.cityAr : b.city
								}, b.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "saudi-map-canvas",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "saudi-map-grid" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "saudi-compass-tag",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "N" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { size: 14 })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									className: "saudi-vector-svg",
									viewBox: "0 0 700 440",
									"aria-hidden": "true",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
												id: "saudiGrad",
												x1: "0%",
												y1: "0%",
												x2: "100%",
												y2: "100%",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
														offset: "0%",
														stopColor: "#194d45",
														stopOpacity: "0.75"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
														offset: "50%",
														stopColor: "#103833",
														stopOpacity: "0.85"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
														offset: "100%",
														stopColor: "#0a2522",
														stopOpacity: "0.95"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
												id: "routeGrad",
												x1: "0%",
												y1: "100%",
												x2: "100%",
												y2: "0%",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
													offset: "0%",
													stopColor: "#d9b45a"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
													offset: "100%",
													stopColor: "#f3d789"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
												id: "glow",
												x: "-20%",
												y: "-20%",
												width: "140%",
												height: "140%",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", {
													stdDeviation: "3",
													result: "blur"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feComposite", {
													in: "SourceGraphic",
													in2: "blur",
													operator: "over"
												})]
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
											className: "geo-grid",
											stroke: "rgba(217,180,90,0.12)",
											strokeWidth: "1",
											strokeDasharray: "3 4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
													x1: "80",
													y1: "110",
													x2: "620",
													y2: "110"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
													x1: "80",
													y1: "210",
													x2: "620",
													y2: "210"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
													x1: "80",
													y1: "310",
													x2: "620",
													y2: "310"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
													x1: "210",
													y1: "40",
													x2: "210",
													y2: "400"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
													x1: "360",
													y1: "40",
													x2: "360",
													y2: "400"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
													x1: "510",
													y1: "40",
													x2: "510",
													y2: "400"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											className: "saudi-landmass",
											d: "M130 72 \n                     C145 92 165 140 188 185 \n                     C205 218 220 252 238 290 \n                     C252 320 270 348 295 372 \n                     C315 392 335 408 360 412 \n                     C388 416 430 405 470 398 \n                     C520 390 580 380 625 365 \n                     C615 330 595 305 578 280 \n                     C565 260 558 240 550 215 \n                     C542 190 535 168 522 142 \n                     C510 118 495 102 475 92 \n                     C445 88 400 82 355 70 \n                     C310 58 265 52 215 48 \n                     C170 52 145 60 130 72 Z",
											fill: "url(#saudiGrad)",
											stroke: "#d9b45a",
											strokeWidth: "1.8"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M175 145 C210 205 240 270 270 330 C300 370 345 385 410 375 C480 365 540 340 575 295",
											fill: "none",
											stroke: "rgba(217,180,90,0.18)",
											strokeWidth: "1.2",
											strokeDasharray: "4 6"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											className: "saudi-route-line",
											d: "M260 305 Q335 255 425 225",
											fill: "none",
											stroke: "url(#routeGrad)",
											strokeWidth: "2.5",
											strokeDasharray: "6 6",
											filter: "url(#glow)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "120",
											y: "270",
											fill: "rgba(217,180,90,0.3)",
											fontSize: "11",
											letterSpacing: "3",
											transform: "rotate(-62 120 270)",
											children: "RED SEA"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "540",
											y: "160",
											fill: "rgba(217,180,90,0.3)",
											fontSize: "10",
											letterSpacing: "3",
											transform: "rotate(-30 540 160)",
											children: "ARABIAN GULF"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: `saudi-map-pin-anchor jeddah ${activeHomeBranchId === "jeddah" ? "is-active" : ""}`,
									href: branches[0].mapUrl,
									target: "_blank",
									rel: "noreferrer",
									onClick: () => setActiveHomeBranchId("jeddah"),
									"aria-label": isArabic ? "فتح موقع فرع جدة على خرائط جوجل" : "Open Jeddah branch location in Google Maps",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "saudi-pin-ripple" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "saudi-pin-core",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 15 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "saudi-pin-card",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: ["01 · ", isArabic ? branches[0].badgeAr : branches[0].badge] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: isArabic ? branches[0].cityAr : branches[0].city }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "saudi-pin-cta",
													children: [
														isArabic ? "الذهاب إلى الموقع" : "Go to Location",
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 12 })
													]
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: `saudi-map-pin-anchor riyadh ${activeHomeBranchId === "riyadh" ? "is-active" : ""}`,
									href: branches[1].mapUrl,
									target: "_blank",
									rel: "noreferrer",
									onClick: () => setActiveHomeBranchId("riyadh"),
									"aria-label": isArabic ? "فتح موقع فرع الرياض على خرائط جوجل" : "Open Riyadh branch location in Google Maps",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "saudi-pin-ripple" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "saudi-pin-core",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 15 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "saudi-pin-card",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: ["02 · ", isArabic ? branches[1].badgeAr : branches[1].badge] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: isArabic ? branches[1].cityAr : branches[1].city }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "saudi-pin-cta",
													children: [
														isArabic ? "الذهاب إلى الموقع" : "Go to Location",
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 12 })
													]
												})
											]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "saudi-map-guide-footer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "saudi-guide-details",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "saudi-guide-coords",
										children: activeHomeBranch.coords.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "saudi-guide-title",
										children: isArabic ? `فرع ${activeHomeBranch.cityAr} (${activeHomeBranch.badgeAr})` : `${activeHomeBranch.city} Branch (${activeHomeBranch.badge})`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "saudi-guide-addr",
										children: isArabic ? activeHomeBranch.addressAr : activeHomeBranch.address
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: activeHomeBranch.mapUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "saudi-guide-action-btn",
								"aria-label": isArabic ? "فتح موقع الفرع على خرائط جوجل" : "Open branch location in Google Maps",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "الذهاب إلى موقع الفرع" : "Go to Branch Location" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })]
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "cta section-dark",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container quality-grid reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cta-inner",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-label light",
							children: ["07 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "الجودة والسلامة" : "Quality & safety" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "quality-mark",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 24 }),
								" ",
								isArabic ? "التزام في كل موقع" : "Built into every site"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"نبني بمسؤولية.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "ونسلّم بموثوقية." })
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Built responsibly.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Delivered reliably." })
						] }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? "ممارسات عمل آمنة وضبط للجودة وتنفيذ موثوق وبناء مسؤول في كل مشروع." : "Safe working practices, quality control, reliable project execution and responsible construction — built into every engagement." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "quality-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								className: "button",
								to: "/contact",
								children: [
									isArabic ? "ناقش مشروعك القادم" : "Discuss your next project",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 17 })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								className: "text-button light-text",
								to: "/capabilities",
								children: [
									isArabic ? "استكشف قدراتنا" : "Explore our capabilities",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveRight, { size: 17 })
								]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "quality-showcase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "quality-image",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: projects[1].image,
							alt: isArabic ? "فريق يورو كونستركت في موقع المشروع" : "Euro Construct project delivery on site",
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 18 }),
							" ",
							isArabic ? "تنفيذ منضبط من الموقع إلى التسليم" : "Disciplined delivery, from site to handover"
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "quality-principles",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "01" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: isArabic ? "ضبط الجودة" : "Quality control" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "فحوصات ومتابعة منظمة" : "Structured checks and oversight" })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "02" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: isArabic ? "السلامة أولاً" : "Safety-led sites" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "ممارسات تحمي الفرق والمواقع" : "Practices that protect people and sites" })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "03" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: isArabic ? "تسليم موثوق" : "Reliable handover" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "تنسيق واضح حتى الإنجاز" : "Clear coordination through completion" })
							] })
						]
					})]
				})]
			})
		})
	] });
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
