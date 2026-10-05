import { Link, require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { ArrowUpRight, MoveRight, ShieldCheck } from "../_libs/lucide-react.mjs";
import { getServiceSlug, projects, services, useLanguage } from "./router-DB--jhjD.mjs";
import { PageHeader } from "./PageHeader-Dfodu1I4.mjs";
import { useReveal } from "./useReveal-KP071FMv.mjs";
import { serviceArabic } from "./arabic-DBybkNQG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-iIASCTaC.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	const { isArabic } = useLanguage();
	useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			label: "Services",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Capability that meets ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "the moment." })] }),
			description: "Integrated contracting solutions from project mobilization through final handover.",
			arabicLabel: "خدماتنا",
			arabicTitle: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["قدرات تواكب ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "كل مرحلة." })] }),
			arabicDescription: "حلول مقاولات متكاملة من تجهيز المشروع وحتى التسليم النهائي.",
			image: "/profile/project-11.jpg"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "services section-light",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "services-grid",
					children: services.map(({ title, icon: Icon, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						className: "service-card service-card-link reveal",
						to: "/services/$serviceId",
						params: { serviceId: getServiceSlug(services.find((service) => service.title === title)) },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "service-top",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "service-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 22 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", services.findIndex((service) => service.title === title) + 1] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: isArabic ? serviceArabic[title][0] : title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? serviceArabic[title][1] : text }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-button",
								children: [
									isArabic ? "عرض تفاصيل الخدمة" : "View service details",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveRight, { size: 16 })
								]
							})
						]
					}, title))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "cta section-dark",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container quality-grid reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cta-inner",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "section-label light",
							children: isArabic ? "الجودة والسلامة" : "Quality & safety"
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							className: "button",
							to: "/contact",
							children: [
								isArabic ? "ناقش مشروعك القادم" : "Discuss your next project",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 17 })
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "quality-showcase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "quality-image",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: projects[1].image,
							alt: isArabic ? "تنفيذ مشروع يورو كونستركت في الموقع" : "Euro Construct project delivery on site",
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
var SplitComponent = ServicesPage;
//#endregion
export { SplitComponent as component };
