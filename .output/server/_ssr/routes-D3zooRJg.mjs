import { __toESM } from "../_runtime.mjs";
import { Link, require_jsx_runtime, require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, MapPin, MoveRight, Pause, Play, ShieldCheck, Target } from "../_libs/lucide-react.mjs";
import { capabilities, clientLogos, getProjectSlug, getServiceSlug, images, projects, services, useLanguage } from "./LanguageContext-CCfEdoyS.mjs";
import { useReveal } from "./useReveal-KP071FMv.mjs";
import { arabicLocation } from "./arabic-DBybkNQG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D3zooRJg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var featuredProjects = [
	projects[1],
	projects[9],
	projects[12]
];
var heroProjects = [
	projects[9],
	projects[9],
	projects[4]
];
var heroProjectArabic = [
	"مشروع الخدمات الهندسية للزكاة والضريبة والجمارك",
	"مشروع الخدمات الهندسية لهيئة الزكاة",
	"إدارة حركة الحجاج بمحطات قطار مزدلفة 1 و2 و3"
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
var projectArabic = {
	"East Jeddah Corridor": "مشروع محور شرق جدة",
	"ZATCA MEP Engineering Services Project": "مشروع الخدمات الهندسية للزكاة والضريبة والجمارك",
	"Kuday Parking Development Supervision": "الإشراف على تطوير مواقف كدي"
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
	useReveal();
	(0, import_react.useEffect)(() => {
		if (sliderPaused) return;
		const timer = window.setInterval(() => {
			setHeroSlide((current) => (current + 1) % heroProjects.length);
		}, 6e3);
		return () => window.clearInterval(timer);
	}, [sliderPaused]);
	const changeSlide = (direction) => {
		setHeroSlide((current) => (current + direction + heroProjects.length) % heroProjects.length);
	};
	const activeHeroProject = heroProjects[heroSlide];
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
					}, project.name))
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: isArabic ? heroProjectArabic[heroSlide] : heroSlide === 1 ? "ZATCA Engineering Services" : activeHeroProject.name }),
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
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 18 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hero-slide-dots",
								children: heroProjects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: index === heroSlide ? "is-active" : "",
									onClick: () => setHeroSlide(index),
									"aria-label": `${isArabic ? "عرض" : "Show"} ${isArabic ? heroProjectArabic[index] : index === 1 ? "ZATCA Engineering Services" : project.name}`,
									"aria-current": index === heroSlide ? "true" : void 0
								}, project.name))
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
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })
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
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "project-grid",
					children: featuredProjects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						className: "project-card",
						to: "/projects/$projectId",
						params: { projectId: getProjectSlug(project) },
						style: { animationDelay: `${index * 80}ms` },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "project-image",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: project.image,
								alt: `${project.name} project`
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.category })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "project-info",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: isArabic ? projectArabic[project.name] : project.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 14 }),
								" ",
								project.location
							] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 19 })]
						})]
					}, project.name))
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? "نقدم حلولاً إنشائية في الأسواق الإقليمية والدولية الرئيسية." : "Delivering construction solutions across key regional and international markets." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "locations",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 16 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: isArabic ? "جدة" : "Jeddah" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "المنطقة الغربية" : "Western Region" })
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 16 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: isArabic ? "الرياض" : "Riyadh" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "المنطقة الوسطى" : "Central Region" })
							] })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "saudi-map reveal",
					"aria-label": "Stylized map of Saudi Arabia showing Jeddah and Riyadh",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "map-grid" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "saudi-outline" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "map-label jeddah",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), isArabic ? "جدة" : "Jeddah"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "map-label riyadh",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), isArabic ? "الرياض" : "Riyadh"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "map-note",
							children: isArabic ? "المملكة العربية السعودية" : "Saudi Arabia"
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
