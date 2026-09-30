import { __toESM } from "../_runtime.mjs";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent, notFound, require_jsx_runtime, require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { ArrowUpRight, ChevronDown, ChevronRight, Menu, X } from "../_libs/lucide-react.mjs";
import { LanguageProvider, categories, getProjectBySlug, getServiceBySlug, getServiceSlug, navItems, navPaths, services, useLanguage } from "./LanguageContext-CCfEdoyS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DDs_UBGK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function Brand({ light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `brand ${light ? "brand-light" : ""}`,
		"aria-label": "Euro Construct for Contracting",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			className: "brand-logo",
			src: "/ecc-logo-transparent.png",
			alt: "Euro Construct for Contracting"
		})
	});
}
var arabicNav$1 = {
	Home: "الرئيسية",
	About: "من نحن",
	Capabilities: "قدراتنا",
	Services: "خدماتنا",
	Projects: "مشاريعنا",
	Clients: "عملاؤنا",
	Contact: "تواصل معنا"
};
var companyItems = [
	"About",
	"Capabilities",
	"Clients"
];
function Header() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const { isArabic, toggleLanguage } = useLanguage();
	const closeMenu = () => setMenuOpen(false);
	(0, import_react.useEffect)(() => {
		const updateHeader = () => setScrolled(window.scrollY > 24);
		updateHeader();
		window.addEventListener("scroll", updateHeader, { passive: true });
		return () => window.removeEventListener("scroll", updateHeader);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `site-header ${scrolled ? "is-scrolled" : "is-top"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container site-header-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "header-brand-btn",
					"aria-label": "Euro Construct home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "desktop-nav",
					"aria-label": "Main navigation",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							className: "nav-link",
							to: "/",
							activeProps: { className: "nav-link nav-active" },
							activeOptions: { exact: true },
							children: isArabic ? arabicNav$1.Home : "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "nav-group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "nav-link nav-group-trigger",
								type: "button",
								"aria-haspopup": "true",
								children: [
									isArabic ? "الشركة" : "Company",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 14 })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "nav-dropdown",
								children: companyItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: navPaths[item],
									activeProps: { className: "nav-dropdown-link nav-active" },
									className: "nav-dropdown-link",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? arabicNav$1[item] : item }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
								}, item))
							})]
						}),
						["Services", "Projects"].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							className: "nav-link",
							to: navPaths[item],
							activeProps: { className: "nav-link nav-active" },
							children: isArabic ? arabicNav$1[item] : item
						}, item))
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "language-switch",
					type: "button",
					onClick: toggleLanguage,
					"aria-label": isArabic ? "Switch to English" : "التبديل إلى العربية",
					children: isArabic ? "EN" : "العربية"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					className: "button button-small header-cta",
					to: "/contact",
					children: [
						isArabic ? "تواصل معنا" : "Contact Us",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "menu-button",
					"aria-label": "Open navigation",
					onClick: () => setMenuOpen(true),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 22 })
				})
			]
		})
	}), menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mobile-nav-wrap",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mobile-nav-backdrop",
			onClick: closeMenu
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "mobile-nav",
			"aria-label": "Mobile navigation",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mobile-nav-top",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "icon-button",
						"aria-label": "Close navigation",
						onClick: closeMenu,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 22 })
					})]
				}),
				navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					className: "mobile-nav-link",
					to: navPaths[item],
					activeProps: { className: "mobile-nav-link nav-active" },
					activeOptions: { exact: item === "Home" },
					onClick: closeMenu,
					children: [isArabic ? arabicNav$1[item] : item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 18 })]
				}, item)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					className: "button",
					to: "/contact",
					onClick: closeMenu,
					children: [
						isArabic ? "تواصل معنا" : "Contact Us",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 17 })
					]
				})
			]
		})]
	})] });
}
var arabicNav = {
	Home: "الرئيسية",
	About: "من نحن",
	Capabilities: "قدراتنا",
	Services: "خدماتنا",
	Projects: "مشاريعنا",
	Clients: "عملاؤنا",
	Contact: "تواصل معنا"
};
function Footer() {
	const { isArabic } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "footer section-dark",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-top",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, { light: true }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? "خدمات مقاولات ودعم إنشائي ترتكز على الجودة والسلامة والتنفيذ المنضبط في جميع أنحاء المملكة العربية السعودية." : "Contracting and construction support built on quality, safety and disciplined execution across Saudi Arabia." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "back-top",
							onClick: () => window.scrollTo({
								top: 0,
								behavior: "smooth"
							}),
							children: [
								isArabic ? "العودة للأعلى" : "Back to top",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-links",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "استكشف" : "Explore" }), navItems.filter((item) => item !== "Home").map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							className: "footer-link",
							to: navPaths[item],
							children: isArabic ? arabicNav[item] : item
						}, item))] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "الخدمات" : "Services" }), services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							className: "footer-link",
							to: "/services/$serviceId",
							params: { serviceId: getServiceSlug(service) },
							children: isArabic ? {
								"General Contracting": "المقاولات العامة",
								"Construction Management": "إدارة الإنشاءات",
								"Site Survey": "الرفع المساحي",
								"Geotechnical Investigation": "الدراسات الجيوتقنية",
								"Renovation Works": "أعمال الترميم"
							}[service.title] : service.title
						}, service.title))] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "المكاتب" : "Offices" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"حي الروضة، طريق المدينة،",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"جدة، المملكة العربية السعودية"
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"Al Rawdah District, Al Madinah Road,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Jeddah, Saudi Arabia"
							] }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isArabic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"7095 طريق الملك فيصل بن عبدالعزيز،",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"الرياض، المملكة العربية السعودية"
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"7095 King Faisal Bin Abdul Aziz Road,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Riyadh, Saudi Arabia"
							] }) })
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-bottom",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["© 2026 ", isArabic ? "يورو كونستركت للمقاولات" : "Euro Construct for Contracting"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "الجودة · السلامة · الموثوقية" : "Quality · Safety · Reliability" })]
				})
			]
		})
	});
}
var src_default = "/assets/index-C1vr5oUU.css";
var description = "Euro Construct is a contracting and construction company providing integrated project support across Saudi Arabia.";
var Route$9 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1.0"
			},
			{ title: "Euro Construct for Contracting | Building with discipline" },
			{
				name: "description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:title",
				content: "Euro Construct for Contracting"
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:image",
				content: "/profile/hero-construction.jpg"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:image",
				content: "/profile/hero-construction.jpg"
			}
		],
		links: [{
			rel: "stylesheet",
			href: src_default
		}, {
			rel: "icon",
			type: "image/svg+xml",
			href: "/favicon.svg"
		}]
	}),
	component: RootComponent,
	notFoundComponent: NotFound
});
function RootComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootDocument, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "top",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	}) }) });
}
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function NotFound() {
	const { isArabic } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "page-header section-dark",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container page-header-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "eyebrow light",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " 404"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: isArabic ? "تعذر العثور على هذه الصفحة." : "That page could not be found." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					className: "button",
					to: "/",
					children: isArabic ? "العودة للرئيسية" : "Return home"
				})
			]
		})
	});
}
var $$splitComponentImporter$8 = () => import("./routes-D3zooRJg.mjs");
var Route$8 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Euro Construct for Contracting | Building with discipline" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./about-DNwfaHhx.mjs");
var Route$7 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About | Euro Construct for Contracting" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./capabilities-AGrNMqh5.mjs");
var Route$6 = createFileRoute("/capabilities")({
	head: () => ({ meta: [{ title: "Capabilities | Euro Construct for Contracting" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./clients-DtkaRWob.mjs");
var Route$5 = createFileRoute("/clients")({
	head: () => ({ meta: [{ title: "Clients | Euro Construct for Contracting" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-CNiGWs3K.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact | Euro Construct for Contracting" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./projects-BC1vTYQe.mjs");
var Route$3 = createFileRoute("/projects")({
	validateSearch: (search) => {
		const category = search.category;
		return typeof category === "string" && category !== "All" && categories.includes(category) ? { category } : {};
	},
	head: () => ({ meta: [{ title: "Projects | Euro Construct for Contracting" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./services-D6awfM7K.mjs");
var Route$2 = createFileRoute("/services")({
	head: () => ({ meta: [{ title: "Services | Euro Construct for Contracting" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./projects_._projectId-CZYee78A.mjs");
var Route$1 = createFileRoute("/projects_/$projectId")({
	loader: ({ params }) => {
		const project = getProjectBySlug(params.projectId);
		if (!project) throw notFound();
		return project;
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: `${loaderData?.name ?? "Project"} | Euro Construct for Contracting` },
		{
			name: "description",
			content: loaderData?.summary
		},
		{
			property: "og:image",
			content: loaderData?.image
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services_._serviceId-WmhhIt7j.mjs");
var Route = createFileRoute("/services_/$serviceId")({
	loader: ({ params }) => {
		const service = getServiceBySlug(params.serviceId);
		if (!service) throw notFound();
		const { title, text, image } = service;
		return {
			title,
			text,
			image
		};
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: `${loaderData?.title ?? "Service"} | Euro Construct for Contracting` },
		{
			name: "description",
			content: loaderData?.text
		},
		{
			property: "og:image",
			content: loaderData?.image
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AboutRoute: Route$7.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$9
	}),
	CapabilitiesRoute: Route$6.update({
		id: "/capabilities",
		path: "/capabilities",
		getParentRoute: () => Route$9
	}),
	ClientsRoute: Route$5.update({
		id: "/clients",
		path: "/clients",
		getParentRoute: () => Route$9
	}),
	ContactRoute: Route$4.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$9
	}),
	ProjectsRoute: Route$3.update({
		id: "/projects",
		path: "/projects",
		getParentRoute: () => Route$9
	}),
	ServicesRoute: Route$2.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$9
	}),
	ProjectsProjectIdRoute: Route$1.update({
		id: "/projects_/$projectId",
		path: "/projects/$projectId",
		getParentRoute: () => Route$9
	}),
	ServicesServiceIdRoute: Route.update({
		id: "/services_/$serviceId",
		path: "/services/$serviceId",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent"
	});
}
//#endregion
export { Route, Route$1, router_exports };
