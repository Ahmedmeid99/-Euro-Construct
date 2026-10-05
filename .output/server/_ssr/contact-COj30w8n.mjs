import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { ArrowUpRight, Check, MapPin, MoveRight, Phone, Send } from "../_libs/lucide-react.mjs";
import { useLanguage } from "./router-DB--jhjD.mjs";
import { PageHeader } from "./PageHeader-Dfodu1I4.mjs";
import { useReveal } from "./useReveal-KP071FMv.mjs";
import { branches } from "./branches-IiR2Jopg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-COj30w8n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [formSent, setFormSent] = (0, import_react.useState)(false);
	const [activeBranchId, setActiveBranchId] = (0, import_react.useState)("jeddah");
	const { isArabic } = useLanguage();
	useReveal();
	const activeBranch = branches.find((branch) => branch.id === activeBranchId) ?? branches[0];
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
				className: "branch-map-panel reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "branch-map-head",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "branch-map-title-group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "branch-map-sub",
								children: isArabic ? "مكاتبنا الإقليمية" : "Regional Offices"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: isArabic ? "مواقع الفروع" : "Branch Locations" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "branch-toggle",
							role: "tablist",
							"aria-label": isArabic ? "اختر فرعاً لعرضه على الخريطة" : "Choose a branch to show on the map",
							children: branches.map((branch) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								role: "tab",
								"aria-selected": activeBranchId === branch.id,
								className: `branch-toggle-btn ${activeBranchId === branch.id ? "is-active" : ""}`,
								onClick: () => setActiveBranchId(branch.id),
								children: isArabic ? branch.cityAr : branch.city
							}, branch.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "branch-map-frame-wrapper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							src: activeBranch.embedUrl,
							title: `${isArabic ? activeBranch.cityAr : activeBranch.city} Google Map`,
							loading: "lazy",
							allowFullScreen: true,
							referrerPolicy: "no-referrer-when-downgrade",
							className: "branch-google-map-iframe"
						}, activeBranch.id)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "branch-map-details",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "branch-map-info",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "branch-map-info-header",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "branch-map-pin-badge",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 16 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: isArabic ? `فرع ${activeBranch.cityAr} (${activeBranch.badgeAr})` : `${activeBranch.city} Office (${activeBranch.badge})` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? activeBranch.addressAr : activeBranch.address })] })]
							}), activeBranch.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "branch-map-phone",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									dir: "ltr",
									children: activeBranch.phone
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "branch-directions-btn",
							href: activeBranch.mapUrl,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": `${isArabic ? "فتح موقع فرع" : "Open"} ${isArabic ? activeBranch.cityAr : activeBranch.city} ${isArabic ? "على خرائط جوجل" : "in Google Maps"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "الاتجاهات عبر Google Maps" : "Directions on Google Maps" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })]
						})]
					})
				]
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
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 26 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: isArabic ? "شكراً لتواصلك معنا." : "Thank you for reaching out." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? "تم استلام رسالتك بنجاح، وسيتواصل معك مهندسو وفريق يورو كونستركت في أقرب وقت." : "Your message has been received. Our team will review your inquiry and follow up shortly." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "text-button",
							onClick: () => setFormSent(false),
							children: [
								isArabic ? "إرسال استفسار آخر" : "Send another inquiry",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveRight, { size: 17 })
							]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "form-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "استفسار عن مشروع" : "Project enquiry" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: isArabic ? "تواصل مع فريقنا الهندسي" : "Connect with our engineering team" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? "جميع الحقول المميزة بعلامة * مطلوبة." : "All fields marked * are required." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "form-fields-wrapper",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "form-field-block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "form-label-text",
									children: isArabic ? "الاسم بالكامل *" : "Full Name *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									name: "name",
									type: "text",
									placeholder: isArabic ? "اسمك الكريم" : "Your full name"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "form-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "form-field-block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "form-label-text",
										children: isArabic ? "البريد الإلكتروني *" : "Email Address *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										name: "email",
										type: "email",
										placeholder: "name@company.com"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "form-field-block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "form-label-text",
										children: isArabic ? "رقم الهاتف" : "Phone Number"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "phone",
										type: "tel",
										placeholder: isArabic ? "+966 5X XXX XXXX" : "+966 5X XXX XXXX"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "form-field-block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "form-label-text",
									children: isArabic ? "تفاصيل المشروع والرسالة *" : "Project Details & Message *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									name: "message",
									placeholder: isArabic ? "أخبرنا عن متطلبات مشروعك، الموقع والجدول الزمني..." : "Tell us about your project requirements, location, and timeline...",
									rows: 5
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "form-action-footer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "button form-submit",
							type: "submit",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "إرسال الاستفسار" : "Send Enquiry" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 16 })]
						})
					})
				] })
			})]
		})
	})] });
}
var SplitComponent = ContactPage;
//#endregion
export { SplitComponent as component };
