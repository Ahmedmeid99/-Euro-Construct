import { Link, require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { ArrowLeft, ArrowUpRight, CircleCheck } from "../_libs/lucide-react.mjs";
import { Route, getServiceSlug, services, useLanguage } from "./router-BlPfSD1Q.mjs";
import { serviceArabic } from "./arabic-DBybkNQG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services_._serviceId-xvHKAZfT.js
var import_jsx_runtime = require_jsx_runtime();
var serviceDetails = {
	"General Contracting": {
		overview: "We deliver coordinated construction packages from mobilization and procurement through execution, testing, commissioning, and handover. Every phase is managed around safety, quality, schedule, and clear site accountability.",
		overviewAr: "ننفذ حزم الإنشاء المتكاملة بدءاً من التجهيز والمشتريات وحتى التنفيذ والاختبارات والتشغيل والتسليم، مع إدارة كل مرحلة وفق متطلبات السلامة والجودة والبرنامج الزمني والمسؤولية الواضحة في الموقع.",
		scope: [
			"Project mobilization and site establishment",
			"Civil, structural, architectural, and MEP execution",
			"Procurement and subcontractor coordination",
			"Quality control, testing, commissioning, and handover"
		],
		scopeAr: [
			"تجهيز المشروع وتأسيس الموقع",
			"تنفيذ الأعمال المدنية والإنشائية والمعمارية والكهروميكانيكية",
			"إدارة المشتريات وتنسيق المقاولين المتخصصين",
			"ضبط الجودة والاختبارات والتشغيل والتسليم"
		]
	},
	"Construction Management": {
		overview: "Our construction management teams bring structure to complex delivery environments through disciplined planning, field coordination, progress control, and transparent reporting.",
		overviewAr: "تمنح فرق إدارة الإنشاءات لدينا المشاريع هيكلاً تنفيذياً واضحاً من خلال التخطيط المنضبط والتنسيق الميداني ومراقبة التقدم والتقارير الشفافة.",
		scope: [
			"Construction planning and programme control",
			"Site team and contractor coordination",
			"Cost, progress, and resource monitoring",
			"Risk, quality, safety, and stakeholder reporting"
		],
		scopeAr: [
			"تخطيط الإنشاءات وضبط البرنامج الزمني",
			"تنسيق فرق الموقع والمقاولين",
			"متابعة التكلفة والتقدم والموارد",
			"تقارير المخاطر والجودة والسلامة وأصحاب المصلحة"
		]
	},
	"Site Survey": {
		overview: "We capture reliable site information that supports sound design and construction decisions, using coordinated field teams and clear technical documentation.",
		overviewAr: "نوفر بيانات موقع موثوقة تدعم قرارات التصميم والتنفيذ السليمة من خلال فرق ميدانية منسقة ووثائق فنية واضحة.",
		scope: [
			"Topographic and engineering surveys",
			"Boundary, cadastral, and route surveys",
			"Existing-condition and utility mapping",
			"Digital mapping, records, and technical reports"
		],
		scopeAr: [
			"الرفع الطبوغرافي والهندسي",
			"مسح الحدود والأراضي ومسارات الطرق",
			"توثيق الظروف القائمة وشبكات الخدمات",
			"إعداد الخرائط الرقمية والسجلات والتقارير الفنية"
		]
	},
	"Geotechnical Investigation": {
		overview: "Our investigations define subsurface conditions and provide the factual basis for safe foundations, infrastructure, earthworks, and risk-informed design.",
		overviewAr: "تحدد دراساتنا خصائص التربة تحت السطح وتوفر الأساس الفني لتصميم آمن للأساسات والبنية التحتية والأعمال الترابية وإدارة المخاطر.",
		scope: [
			"Borehole drilling and soil sampling",
			"Field and laboratory testing",
			"Foundation and ground-condition assessment",
			"Geotechnical interpretation and reporting"
		],
		scopeAr: [
			"حفر الجسات وأخذ عينات التربة",
			"الاختبارات الميدانية والمخبرية",
			"تقييم الأساسات وظروف التربة",
			"التحليل الجيوتقني وإعداد التقارير"
		]
	},
	"Renovation Works": {
		overview: "We upgrade existing buildings through carefully sequenced renovation, fit-out, repair, and finishing works that respect ongoing operations and the final design intent.",
		overviewAr: "نطور المباني القائمة من خلال أعمال ترميم وتجهيز وإصلاح وتشطيب مدروسة المراحل، تراعي استمرارية التشغيل وتحقق الرؤية التصميمية النهائية.",
		scope: [
			"Existing-building assessment and planning",
			"Architectural renovation and interior fit-out",
			"MEP upgrades and service coordination",
			"Finishes, testing, snagging, and final handover"
		],
		scopeAr: [
			"تقييم المبنى القائم وتخطيط الأعمال",
			"الترميم المعماري والتجهيز الداخلي",
			"تطوير الأنظمة الكهروميكانيكية وتنسيق الخدمات",
			"التشطيبات والاختبارات ومعالجة الملاحظات والتسليم"
		]
	}
};
function ServiceDetailsPage() {
	const { isArabic } = useLanguage();
	const service = Route.useLoaderData();
	const details = serviceDetails[service.title];
	const related = services.filter((item) => item.title !== service.title).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "project-detail-hero service-detail-hero section-dark",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: service.image,
					alt: ""
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "project-detail-overlay" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container project-detail-hero-content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							className: "project-back-link",
							to: "/services",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 17 }),
								" ",
								isArabic ? "العودة إلى الخدمات" : "Back to services"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "project-detail-category",
							children: isArabic ? "خدمات يورو كونستركت" : "Euro Construct services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: isArabic ? serviceArabic[service.title][0] : service.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "service-detail-intro",
							children: isArabic ? serviceArabic[service.title][1] : service.text
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "project-detail-body section-light",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container project-detail-layout",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "project-detail-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "section-label",
							children: isArabic ? "نظرة عامة" : "Service overview"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"خبرة منضبطة.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "تنفيذ موثوق." })
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Disciplined expertise.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Reliable delivery." })
						] }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? details.overviewAr : details.overview }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "service-scope-panel service-scope-inline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "نطاق الخدمة" : "Service scope" }), (isArabic ? details.scopeAr : details.scope).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item })] }, item))]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "service-detail-sidebar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "service-directory",
						"aria-label": isArabic ? "قائمة الخدمات" : "Services list",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "جميع الخدمات" : "All services" }), services.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							className: `service-directory-link ${item.title === service.title ? "is-active" : ""}`,
							to: "/services/$serviceId",
							params: { serviceId: getServiceSlug(item) },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: ["0", index + 1] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: isArabic ? serviceArabic[item.title][0] : item.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })
							]
						}, item.title))]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "related-services section-sand",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "section-label",
						children: isArabic ? "خدمات ذات صلة" : "Related services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["دعم متكامل ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "لمشروعك." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Integrated support for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "your project." })] }) })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "related-project-grid",
					children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						className: "related-project-card",
						to: "/services/$serviceId",
						params: { serviceId: getServiceSlug(item) },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: "",
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "خدماتنا" : "Our services" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: isArabic ? serviceArabic[item.title][0] : item.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 19 })
						] })]
					}, item.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "project-detail-cta section-dark",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 28 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "هل تخطط لمشروعك القادم؟" : "Planning your next project?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: isArabic ? "لنتحدث عن نطاق العمل." : "Let's discuss the scope." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						className: "button",
						to: "/contact",
						children: [
							isArabic ? "ناقش مشروعك" : "Discuss your project",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 17 })
						]
					})
				]
			})
		})
	] });
}
//#endregion
export { ServiceDetailsPage as component };
