import { require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { capabilities } from "./router-ChIdZ7mP.mjs";
import { PageHeader } from "./PageHeader-BRtPjpJQ.mjs";
import { useReveal } from "./useReveal-KP071FMv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/capabilities-Db6M_hgT.js
var import_jsx_runtime = require_jsx_runtime();
function CapabilitiesPage() {
	useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			label: "Construction capabilities",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["The structure behind ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "successful delivery." })] }),
			description: "Integrated execution capabilities supporting reliable construction delivery across key sectors.",
			arabicLabel: "قدراتنا الإنشائية",
			arabicTitle: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["المنظومة التي تقود ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "التنفيذ الناجح." })] }),
			arabicDescription: "قدرات تنفيذ متكاملة تدعم تقديم أعمال إنشائية موثوقة في القطاعات الرئيسية.",
			image: "/profile/project-02.jpg"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "capabilities section-sand",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "capability-grid",
					children: capabilities.map(({ title, text, icon: Icon }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "capability reveal",
						style: { transitionDelay: `${index * 60}ms` },
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text })
						] })]
					}, title))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "ethics section-dark",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ethics-lines" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container ethics-content",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "section-label light",
					children: "Our approach"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ethics-copy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"Disciplined execution,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "end to end." })
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "From mobilization through final handover, our capabilities work together — qualified teams, proper planning, resource management, quality control and safety compliance embedded into every phase of delivery." })]
				})]
			})]
		})
	] });
}
var SplitComponent = CapabilitiesPage;
//#endregion
export { SplitComponent as component };
