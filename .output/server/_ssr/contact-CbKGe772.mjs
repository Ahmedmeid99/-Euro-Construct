import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { ArrowUpRight, Check, MoveRight } from "../_libs/lucide-react.mjs";
import { services } from "./router-ChIdZ7mP.mjs";
import { PageHeader } from "./PageHeader-BRtPjpJQ.mjs";
import { useReveal } from "./useReveal-KP071FMv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CbKGe772.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [formSent, setFormSent] = (0, import_react.useState)(false);
	useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		label: "Contact",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Let's build the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "next thing well." })] }),
		description: "Tell us a little about your project and the right member of our team will be in touch.",
		arabicLabel: "تواصل معنا",
		arabicTitle: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["لنبنِ مشروعك القادم ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "بإتقان." })] }),
		arabicDescription: "أخبرنا عن مشروعك وسيتواصل معك العضو المناسب من فريقنا.",
		image: "/profile/project-21.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "contact section-light",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container contact-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "contact-copy reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "branch-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Jeddah branch" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Al Rawdah District, Al Madinah Road,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Jeddah, Saudi Arabia"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://www.google.com/maps/search/?api=1&query=Al+Rawdah+District+Al+Madinah+Road+Jeddah+Saudi+Arabia",
							target: "_blank",
							rel: "noreferrer",
							children: ["Open in Google Maps ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "branch-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Riyadh branch" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"7095 King Faisal Bin Abdul Aziz Road,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Al Murabba District, 4th Floor,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Riyadh, Saudi Arabia"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://www.google.com/maps/search/?api=1&query=7095+King+Faisal+Bin+Abdul+Aziz+Road+Al+Murabba+Riyadh+Saudi+Arabia",
							target: "_blank",
							rel: "noreferrer",
							children: ["Open in Google Maps ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				className: "contact-form reveal",
				onSubmit: (event) => {
					event.preventDefault();
					setFormSent(true);
				},
				noValidate: true,
				children: formSent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "form-success",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "success-icon",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 25 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Thank you for reaching out." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your message has been received. We'll be in touch about your project." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "text-button",
							onClick: () => setFormSent(false),
							children: ["Send another message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveRight, { size: 17 })]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "form-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Project enquiry" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "All fields marked * are required." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Name *", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						name: "name",
						type: "text",
						placeholder: "Your name"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Company", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "company",
						type: "text",
						placeholder: "Company name"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "form-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Email *", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							name: "email",
							type: "email",
							placeholder: "you@company.com"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Phone", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "phone",
							type: "tel",
							placeholder: "Phone number"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Service of interest", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						name: "service",
						defaultValue: "",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							disabled: true,
							children: "Select a service"
						}), services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: service.title }, service.title))]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Message *", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						required: true,
						name: "message",
						placeholder: "Tell us about your project",
						rows: 5
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "button form-submit",
						type: "submit",
						children: ["Send enquiry ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 17 })]
					})
				] })
			})]
		})
	})] });
}
var SplitComponent = ContactPage;
//#endregion
export { SplitComponent as component };
