import { Link, require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { ArrowUpRight } from "../_libs/lucide-react.mjs";
import { clients } from "./router-ChIdZ7mP.mjs";
import { PageHeader } from "./PageHeader-BRtPjpJQ.mjs";
import { useReveal } from "./useReveal-KP071FMv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clients-iDIiF5gE.js
var import_jsx_runtime = require_jsx_runtime();
function ClientsPage() {
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
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container clients-layout",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "client-profile-panel reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/profile/client-logos.jpg",
						alt: "Client logos from the Euro Construct company profile"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "sr-only",
						children: ["Selected clients: ", clients.join(", ")]
					})]
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
						children: "Partner with us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"Built responsibly.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Delivered reliably." })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Join the organizations that trust Euro Construct to support their construction, infrastructure, and project delivery." }),
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
var SplitComponent = ClientsPage;
//#endregion
export { SplitComponent as component };
