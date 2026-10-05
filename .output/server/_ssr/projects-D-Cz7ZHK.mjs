import { Link, require_jsx_runtime, useSearch } from "../_libs/@tanstack/react-router+[...].mjs";
import { ArrowUpRight, MapPin } from "../_libs/lucide-react.mjs";
import { categories, getProjectSlug, projects, useLanguage } from "./router-BlPfSD1Q.mjs";
import { PageHeader } from "./PageHeader-D7HoEEt5.mjs";
import { useReveal } from "./useReveal-KP071FMv.mjs";
import { arabicLocation, categoryArabic, projectNameArabic } from "./arabic-DBybkNQG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-D-Cz7ZHK.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectsGallery() {
	const { isArabic } = useLanguage();
	const { category } = useSearch({ from: "/projects" });
	const activeCategory = category ?? "All";
	const filteredProjects = activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "filter-row reveal",
			"aria-label": isArabic ? "تصفية المشاريع حسب الفئة" : "Filter projects by category",
			children: categories.map((filter) => {
				const isActive = activeCategory === filter;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					className: isActive ? "active" : "",
					to: "/projects",
					search: { category: filter === "All" ? void 0 : filter },
					"aria-current": isActive ? "page" : void 0,
					resetScroll: false,
					children: [isArabic ? categoryArabic[filter] : filter, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: filter === "All" ? projects.length : projects.filter((project) => project.category === filter).length })]
				}, filter);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "project-grid",
			"aria-live": "polite",
			children: filteredProjects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				className: "project-card",
				to: "/projects/$projectId",
				params: { projectId: getProjectSlug(project) },
				style: { animationDelay: `${Math.min(index, 8) * 45}ms` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "project-image",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: project.image,
						alt: isArabic ? `صورة مشروع ${projectNameArabic[project.name] || project.name}` : `${project.name} project image`,
						loading: index > 2 ? "lazy" : "eager"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? categoryArabic[project.category] : project.category })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "project-info",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: isArabic ? projectNameArabic[project.name] || project.name : project.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 14 }), isArabic ? arabicLocation(project.location) : project.location] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 20 })]
				})]
			}, project.name))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "project-count",
			children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"عرض ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: filteredProjects.length }),
				" من أصل ",
				projects.length,
				" مشروعاً"
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Showing ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: filteredProjects.length }),
				" of ",
				projects.length,
				" relevant experience entries"
			] })
		})
	] });
}
function ProjectsPage() {
	useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		label: "Featured projects",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Experience that holds ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "up in the field." })] }),
		description: "Selected experience across infrastructure, surveying, buildings, Holy Sites and renovation works.",
		arabicLabel: "مشاريع مختارة",
		arabicTitle: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["خبرة تثبت جدارتها ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "على أرض الواقع." })] }),
		arabicDescription: "خبرات مختارة في البنية التحتية والمساحة والمباني والمشاعر المقدسة وأعمال الترميم.",
		image: "/profile/project-16.jpg",
		dark: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "projects section-dark",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsGallery, {})
		})
	})] });
}
var SplitComponent = ProjectsPage;
//#endregion
export { SplitComponent as component };
