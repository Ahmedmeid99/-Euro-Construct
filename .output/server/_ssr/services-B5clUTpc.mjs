import { __toESM } from "../_runtime.mjs";
import { Link, require_jsx_runtime, require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { ArrowUpRight, ChevronDown } from "../_libs/lucide-react.mjs";
import { services } from "./router-ChIdZ7mP.mjs";
import { PageHeader } from "./PageHeader-BRtPjpJQ.mjs";
import { useReveal } from "./useReveal-KP071FMv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-B5clUTpc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	const [expandedService, setExpandedService] = (0, import_react.useState)(null);
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
					children: services.map(({ title, icon: Icon, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: `service-card reveal ${expandedService === title ? "expanded" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "service-top",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "service-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 22 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", services.findIndex((service) => service.title === title) + 1] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "text-button",
								onClick: () => setExpandedService(expandedService === title ? null : title),
								children: [expandedService === title ? "Close details" : "Learn more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
									className: expandedService === title ? "rotated" : "",
									size: 16
								})]
							}),
							expandedService === title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "service-detail",
								children: "A considered approach to planning, coordination, resource management and quality control keeps the work clear from start to finish."
							})
						]
					}, title))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "cta section-dark",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container cta-inner reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "section-label light",
						children: "Quality & safety"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"Built responsibly.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Delivered reliably." })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Safe working practices, quality control, reliable project execution and responsible construction — built into every engagement." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						className: "button",
						to: "/contact",
						children: ["Discuss your next project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 17 })]
					})
				]
			})
		})
	] });
}
var SplitComponent = ServicesPage;
//#endregion
export { SplitComponent as component };
