import { Link, require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { ArrowLeft, ArrowUpRight, Building2, CircleCheck, MapPin, Users } from "../_libs/lucide-react.mjs";
import { Route, getProjectSlug, projects } from "./router-ChIdZ7mP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects_._projectId-CjgcNMzN.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectDetailsPage() {
	const project = Route.useLoaderData();
	const serviceItems = project.services.split(";").map((item) => item.trim()).filter(Boolean);
	const relatedProjects = projects.filter((candidate) => candidate.category === project.category && candidate.name !== project.name).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "project-detail-hero section-dark",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.image,
					alt: `${project.name} project`
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
								" Back to ",
								project.category
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "project-detail-category",
							children: project.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: project.name }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "project-detail-meta",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 17 }), project.location] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { size: 17 }), project.client] })]
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
							children: "Project overview"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: ["Scope and ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "delivery." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.summary }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "project-services-list",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Services provided" }), serviceItems.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: service })] }, service))]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "project-facts",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contract value" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: project.value })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Location" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: project.location })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Client" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: project.client })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sector" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: project.category })] })
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
						children: "Related experience"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: ["More work in ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", { children: [project.category, "."] })] })]
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: related.location }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: related.name }),
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Planning your next project?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Build it with confidence." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						className: "button",
						to: "/contact",
						children: ["Discuss your project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 17 })]
					})
				]
			})
		})
	] });
}
//#endregion
export { ProjectDetailsPage as component };
