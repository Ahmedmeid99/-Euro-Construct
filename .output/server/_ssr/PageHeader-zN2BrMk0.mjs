import { require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { useLanguage } from "./LanguageContext-CCfEdoyS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHeader-zN2BrMk0.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ label, title, description, arabicLabel, arabicTitle, arabicDescription, dark = false, image }) {
	const { isArabic } = useLanguage();
	const isDark = dark || Boolean(image);
	const visibleLabel = isArabic && arabicLabel ? arabicLabel : label;
	const visibleTitle = isArabic && arabicTitle ? arabicTitle : title;
	const visibleDescription = isArabic && arabicDescription ? arabicDescription : description;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `page-header ${isDark ? "section-dark" : "section-light"} ${image ? "has-image" : ""}`,
		children: [
			image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "page-header-image",
				src: image,
				alt: "",
				"aria-hidden": "true"
			}),
			image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "page-header-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "page-header-grid" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `section-label reveal ${isDark ? "light" : ""}`,
						children: visibleLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "page-header-title reveal",
						children: visibleTitle
					}),
					visibleDescription && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `page-header-desc reveal ${isDark ? "light" : ""}`,
						children: visibleDescription
					})
				]
			})
		]
	});
}
//#endregion
export { PageHeader };
