import { require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { Check, CircleCheck } from "../_libs/lucide-react.mjs";
import { images, useLanguage, values } from "./router-BlPfSD1Q.mjs";
import { PageHeader } from "./PageHeader-D7HoEEt5.mjs";
import { useReveal } from "./useReveal-KP071FMv.mjs";
import { ethicsArabic, valueArabic } from "./arabic-DBybkNQG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CMwCs4GO.js
var import_jsx_runtime = require_jsx_runtime();
var ethics = [
	["Accountability", "We take responsibility for every decision and project outcome."],
	["Transparency", "We communicate clearly and honestly with all stakeholders."],
	["Compliance", "We follow laws, regulations, contracts, and industry standards."],
	["Safety", "We prioritize the safety of our people, sites, and communities."],
	["Fairness", "We treat clients, employees, subcontractors, and partners with fairness and respect."]
];
function AboutPage() {
	const { isArabic } = useLanguage();
	useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			label: "About Euro Construct",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Construction support built around ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "clarity and control." })] }),
			description: "A contracting and construction company based in Saudi Arabia, recognized for quality, safety, and reliable construction support solutions.",
			arabicLabel: "عن يورو كونستركت",
			arabicTitle: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["دعم إنشائي يرتكز على ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "الوضوح والتحكم." })] }),
			arabicDescription: "شركة مقاولات وإنشاءات سعودية معروفة بالجودة والسلامة وحلول الدعم الإنشائي الموثوقة.",
			image: "/profile/about-cranes.jpg"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "intro section-light",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container intro-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "intro-main reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "section-label",
							children: isArabic ? "الشركة" : "Company"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: isArabic ? "شريك موثوق على أرض الواقع" : "A trusted partner on the ground"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: isArabic ? "من نحن" : "Who we are" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead",
							children: isArabic ? "يورو كونستركت شركة مقاولات وإنشاءات مقرها المملكة العربية السعودية. نقدم خدمات المقاولات العامة وإدارة الإنشاءات والرفع المساحي والدراسات الجيوتقنية وتقييم التربة والأساسات وأعمال الترميم." : "Euro Construct is a contracting and construction company based in Saudi Arabia. The company provides general contracting, construction management, site survey, geotechnical investigation, soil and foundation assessment, and renovation works."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? "ندعم المشاريع من خلال فرق مواقع مؤهلة وتخطيط سليم وإدارة للموارد وضبط الجودة والالتزام بالسلامة." : "Euro Construct supports projects through qualified site teams, proper planning, resource management, quality control and safety compliance." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "vision-mission",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "رسالتنا" : "Our mission" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? "تنفيذ المشاريع باحترافية والتزام من خلال إدارة فعالة للموقع وضبط صارم للجودة وممارسات آمنة وتنسيق كفء من التجهيز حتى التسليم النهائي." : "To deliver construction projects with professionalism and commitment by applying effective site management, strict quality control, safe working practices, and efficient coordination from mobilization through final handover." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "رؤيتنا" : "Our vision" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? "أن نكون شركة موثوقة للمقاولات وخدمات المواقع في المملكة، معروفة بالجودة والسلامة وحلول الدعم الإنشائي الموثوقة." : "A trusted contracting and site services company in Saudi Arabia, recognized for quality, safety, and reliable construction support solutions." })] })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "intro-image reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images.survey,
						alt: "Construction surveyor using precise site equipment"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "image-caption",
						children: [
							isArabic ? "دقة في كل نقطة" : "Precision at every point",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: isArabic ? "رفع مساحي · المملكة العربية السعودية" : "Site survey · Saudi Arabia" })
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "values section-sand",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container values-layout",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "section-label",
							children: isArabic ? "قيمنا الأساسية" : "Core values"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"مبادئ توجه",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "طريقة عملنا." })
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Principles that guide",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "how we work." })
						] }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? "تُبنى العلاقات القوية من خلال ممارسات ثابتة. وتشكل هذه القيم قراراتنا في كل موقع وكل تعامل." : "Strong relationships are built through consistent actions. These values shape our decisions on every site and in every conversation." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "values-list reveal",
					children: values.map(([title, text], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "value-number",
							children: ["0", index + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: isArabic ? valueArabic[title][0] : title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? valueArabic[title][1] : text })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 19 })
					] }, title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "ethics section-dark",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ethics-lines" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container ethics-content",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "section-label light",
					children: isArabic ? "الأخلاقيات وقواعد السلوك" : "Ethics & code of conduct"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ethics-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"الثقة ليست مجرد شعار.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "بل ممارسة يومية." })
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Trust is not a claim.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "It is a practice." })
						] }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? "يرتكز عملنا على المساءلة والشفافية والامتثال والسلامة والعدالة؛ وهي المعايير التي تحمي الأفراد والمشاريع والشراكات." : "Our work is grounded in accountability, transparency, compliance, safety and fairness — the standards that protect people, projects and partnerships." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ethics-points",
							children: ethics.map(([title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: isArabic ? ethicsArabic[title][0] : title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? ethicsArabic[title][1] : text })] })] }, title))
						})
					]
				})]
			})]
		})
	] });
}
var SplitComponent = AboutPage;
//#endregion
export { SplitComponent as component };
