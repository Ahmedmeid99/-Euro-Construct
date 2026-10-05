import { Link, require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { ArrowUpRight } from "../_libs/lucide-react.mjs";
import { clientLogos, projects, useLanguage } from "./router-MTH9KvtT.mjs";
import { PageHeader } from "./PageHeader-BgiLpBB9.mjs";
import { useReveal } from "./useReveal-KP071FMv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clients-CZgmw7L-.js
var import_jsx_runtime = require_jsx_runtime();
function ClientsPage() {
	const { isArabic } = useLanguage();
	useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			label: "Clients",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Trusted where ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "it matters." })] }),
			description: "Trusted by leading organizations across public and private sectors to support construction, infrastructure, and project delivery.",
			arabicLabel: "عملاؤنا",
			arabicTitle: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["ثقة راسخة ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "حيث تصنع الفرق." })] }),
			arabicDescription: "موثوقون لدى جهات رائدة في القطاعين العام والخاص لدعم الإنشاء والبنية التحتية وتنفيذ المشاريع.",
			image: "/profile/project-10.jpg"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "clients section-light",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container clients-layout",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "client-impact reveal",
					"aria-label": isArabic ? "أرقام المشاريع والعملاء" : "Project and client figures",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [projects.length, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? "مشروعاً رئيسياً" : "Major projects" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: ["14.3", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "M" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? "ريال · أكبر قيمة مشروع" : "SAR · largest project value" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [clientLogos.length, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? "جهة رائدة" : "Leading organizations" })] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "client-wall client-logo-wall reveal",
					"aria-label": "Selected Euro Construct clients",
					children: clientLogos.map((client) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "client-logo",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: client.image,
							alt: client.name,
							loading: "lazy"
						})
					}, client.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "cta section-dark",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container cta-inner reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "section-label light",
						children: isArabic ? "كن شريكاً لنا" : "Partner with us"
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? "انضم إلى الجهات التي تثق بيورو كونستركت لدعم أعمال الإنشاء والبنية التحتية وتنفيذ المشاريع." : "Join the organizations that trust Euro Construct to support their construction, infrastructure, and project delivery." }),
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
			})
		})
	] });
}
var SplitComponent = ClientsPage;
//#endregion
export { SplitComponent as component };
