import { Link, require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { ArrowLeft, ArrowUpRight, Building2, CircleCheck, MapPin, Users } from "../_libs/lucide-react.mjs";
import { Route$1, getProjectSlug, projects, useLanguage } from "./router-MTH9KvtT.mjs";
import { arabicLocation, arabicProjectServices, arabicProjectSummary, categoryArabic, projectNameArabic } from "./arabic-DBybkNQG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects_._projectId-BAfmVBaJ.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectDetailsPage() {
	const { isArabic } = useLanguage();
	const project = Route$1.useLoaderData();
	const serviceItems = isArabic ? arabicProjectServices(project.category) : project.services.split(";").map((item) => item.trim()).filter(Boolean);
	const relatedProjects = projects.filter((candidate) => candidate.category === project.category && candidate.name !== project.name).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "project-detail-hero section-dark",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.image,
					alt: isArabic ? `مشروع ${projectNameArabic[project.name] || project.name}` : `${project.name} project`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "project-detail-overlay" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container project-detail-hero-content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							className: "project-back-link",
							to: "/projects",
							search: { category: project.category },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 17 }),
								" ",
								isArabic ? `العودة إلى ${categoryArabic[project.category]}` : `Back to ${project.category}`
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "project-detail-category",
							children: isArabic ? categoryArabic[project.category] : project.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: isArabic ? projectNameArabic[project.name] || project.name : project.name }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "project-detail-meta",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 17 }), isArabic ? arabicLocation(project.location) : project.location] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { size: 17 }), project.client] })]
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
							children: isArabic ? "نظرة عامة على المشروع" : "Project overview"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["النطاق و", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "التنفيذ." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Scope and ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "delivery." })] }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? arabicProjectSummary(project.name, project.category) : project.summary }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "project-services-list",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: isArabic ? "الخدمات المقدمة" : "Services provided" }), serviceItems.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: service })] }, service))]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "project-facts",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "قيمة العقد" : "Contract value" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: project.value })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "الموقع" : "Location" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: isArabic ? arabicLocation(project.location) : project.location })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "العميل" : "Client" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: project.client })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "القطاع" : "Sector" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: isArabic ? categoryArabic[project.category] : project.category })] })
					]
				})]
			})
		}),
		relatedProjects.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "related-projects section-sand",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "section-label",
						children: isArabic ? "خبرات ذات صلة" : "Related experience"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["مزيد من الأعمال في ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", { children: [categoryArabic[project.category], "."] })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["More work in ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", { children: [project.category, "."] })] }) })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "related-project-grid",
					children: relatedProjects.map((related) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						className: "related-project-card",
						to: "/projects/$projectId",
						params: { projectId: getProjectSlug(related) },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: related.image,
							alt: "",
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? arabicLocation(related.location) : related.location }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: isArabic ? projectNameArabic[related.name] || related.name : related.name }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 19 })
						] })]
					}, related.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "project-detail-cta section-dark",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { size: 28 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "هل تخطط لمشروعك القادم؟" : "Planning your next project?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: isArabic ? "ابنه بثقة." : "Build it with confidence." })] }),
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
export { ProjectDetailsPage as component };
