globalThis.__nitro_main__ = import.meta.url;
import { NodeResponse, serve } from "./_libs/srvx.mjs";
import { H3Core, HTTPError, composeMiddleware, createMatcherFromFind, defineHandler, defineLazyEventHandler, headers, memoizeRouteRulesMatcher, toEventHandler } from "./_libs/h3+rou3+srvx.mjs";
import { HookableCore } from "./_libs/hookable.mjs";
import { decodePath, joinURL, withLeadingSlash, withoutTrailingSlash } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-BflBV2Ep.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1de1-7A0JODTq5Wx0tNpZYeF4BuBJ5Uc\"",
		"mtime": "2026-10-05T00:45:48.820Z",
		"size": 7649,
		"path": "../public/assets/about-BflBV2Ep.js"
	},
	"/assets/arabic-C6FyKzVK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"219e-uzM7V4+HD3jHVqn9fE+E5q8A2jY\"",
		"mtime": "2026-10-05T00:45:48.820Z",
		"size": 8606,
		"path": "../public/assets/arabic-C6FyKzVK.js"
	},
	"/assets/arrow-left-C0RjHdgp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3-RzlG7ODm5VPhmOpF5ee8Kl5ZdXs\"",
		"mtime": "2026-10-05T00:45:48.829Z",
		"size": 163,
		"path": "../public/assets/arrow-left-C0RjHdgp.js"
	},
	"/assets/branches-DQ93ywlg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"66f-fqkG9xheNpJvpfWKZYurpS0X6IE\"",
		"mtime": "2026-10-05T00:45:48.829Z",
		"size": 1647,
		"path": "../public/assets/branches-DQ93ywlg.js"
	},
	"/assets/capabilities-b04e3b5m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c05-M8+v3MP/Qb3X4QyuLvZ1rQPS388\"",
		"mtime": "2026-10-05T00:45:48.829Z",
		"size": 3077,
		"path": "../public/assets/capabilities-b04e3b5m.js"
	},
	"/assets/check-BX79Esh2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7b-EXL4AidWQsWHpyjzim6JvuS499w\"",
		"mtime": "2026-10-05T00:45:48.831Z",
		"size": 123,
		"path": "../public/assets/check-BX79Esh2.js"
	},
	"/assets/circle-check-Bz28BXCz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b0-Tu6tk4xc+PY7RGRnPVvCTTc92o4\"",
		"mtime": "2026-10-05T00:45:48.831Z",
		"size": 176,
		"path": "../public/assets/circle-check-Bz28BXCz.js"
	},
	"/assets/clients-BaQg5oCX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e95-Ko0xNKY6YgQoNcg9dMZJbPVMnoM\"",
		"mtime": "2026-10-05T00:45:48.831Z",
		"size": 3733,
		"path": "../public/assets/clients-BaQg5oCX.js"
	},
	"/assets/contact-BUAPI7se.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1998-19A9aPklY6pX4wK6ie7p2sGYw70\"",
		"mtime": "2026-10-05T00:45:48.831Z",
		"size": 6552,
		"path": "../public/assets/contact-BUAPI7se.js"
	},
	"/assets/index-BxtdCxzz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4351e-IoC08igrTl4nc/F4K5pQPUjSFR0\"",
		"mtime": "2026-10-05T00:45:48.820Z",
		"size": 275742,
		"path": "../public/assets/index-BxtdCxzz.js"
	},
	"/assets/index-D6P_sb2I.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"11037-Sw7sYeHPVXmFWysZjYUdwd727mI\"",
		"mtime": "2026-10-05T00:45:48.838Z",
		"size": 69687,
		"path": "../public/assets/index-D6P_sb2I.css"
	},
	"/assets/LanguageContext-C8CoXPv_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"239d-nLOI47d0c7XxYEkjyCukz0jIWrQ\"",
		"mtime": "2026-10-05T00:45:48.820Z",
		"size": 9117,
		"path": "../public/assets/LanguageContext-C8CoXPv_.js"
	},
	"/assets/link-EBmUD1Fg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2bde-7483WlZPR6wXFeU9aIRmgArGJ/0\"",
		"mtime": "2026-10-05T00:45:48.833Z",
		"size": 11230,
		"path": "../public/assets/link-EBmUD1Fg.js"
	},
	"/assets/map-pin-DNJrXYuR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"101-PjmLNcMLZAbKM8bwGG2e2+LB6CM\"",
		"mtime": "2026-10-05T00:45:48.833Z",
		"size": 257,
		"path": "../public/assets/map-pin-DNJrXYuR.js"
	},
	"/assets/move-right-DyxL-D4D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a6-OirYAizG1Y74e3s+LhHAfUTUyWw\"",
		"mtime": "2026-10-05T00:45:48.833Z",
		"size": 166,
		"path": "../public/assets/move-right-DyxL-D4D.js"
	},
	"/assets/PageHeader-b6voFXoO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34c-RFA8FhDEkqvnQsIpa+F4MZaWULs\"",
		"mtime": "2026-10-05T00:45:48.820Z",
		"size": 844,
		"path": "../public/assets/PageHeader-b6voFXoO.js"
	},
	"/assets/projects-gKMGP9Yn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b3b-mpDUHhgJw/kUcnHw63sw/j6XE4Y\"",
		"mtime": "2026-10-05T00:45:48.833Z",
		"size": 2875,
		"path": "../public/assets/projects-gKMGP9Yn.js"
	},
	"/assets/projects_._projectId-D2UPVqbu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1137-CWyiy6kyQpNGZwRp2/B5XyUWK4o\"",
		"mtime": "2026-10-05T00:45:48.835Z",
		"size": 4407,
		"path": "../public/assets/projects_._projectId-D2UPVqbu.js"
	},
	"/assets/routes-CyQNs7iV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7167-hRGrzv3kwv4voCf01arO64gdY+U\"",
		"mtime": "2026-10-05T00:45:48.835Z",
		"size": 29031,
		"path": "../public/assets/routes-CyQNs7iV.js"
	},
	"/assets/services-Dtfbo4pd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1094-M3DNb1RNB5wbUtcIpuo5zkK8OJw\"",
		"mtime": "2026-10-05T00:45:48.836Z",
		"size": 4244,
		"path": "../public/assets/services-Dtfbo4pd.js"
	},
	"/assets/services_._serviceId-B_s9NCvP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"233f-ujIeFMj9VuAA7jMjNeCLm6xaisM\"",
		"mtime": "2026-10-05T00:45:48.836Z",
		"size": 9023,
		"path": "../public/assets/services_._serviceId-B_s9NCvP.js"
	},
	"/assets/useReveal-BwpzSQcC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14e-g/fHFapccmYsVDnr41NANuZrjUM\"",
		"mtime": "2026-10-05T00:45:48.838Z",
		"size": 334,
		"path": "../public/assets/useReveal-BwpzSQcC.js"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"165-AHyIaKq8UF2EojI+yxSvLqQ/fIw\"",
		"mtime": "2026-09-30T12:47:56.282Z",
		"size": 357,
		"path": "../public/favicon.svg"
	},
	"/ecc-logo.jpg": {
		"type": "image/jpeg",
		"etag": "\"5277-1dJCqB651EmM7pkkW4jDdtmuwoQ\"",
		"mtime": "2026-09-30T12:23:59.074Z",
		"size": 21111,
		"path": "../public/ecc-logo.jpg"
	},
	"/ecc-logo-transparent.png": {
		"type": "image/png",
		"etag": "\"5f047-rn5CSzEqmCxRx5th9StjSDizKmY\"",
		"mtime": "2026-09-30T21:44:57.156Z",
		"size": 389191,
		"path": "../public/ecc-logo-transparent.png"
	},
	"/logos/Euro Construct - English Profile.jpg": {
		"type": "image/jpeg",
		"etag": "\"35f0-56CKuzBryPcmWfER45EPtj4SUjw\"",
		"mtime": "2026-09-30T21:14:28.901Z",
		"size": 13808,
		"path": "../public/logos/Euro Construct - English Profile.jpg"
	},
	"/logos/Euro Construct - English Profile2.jpg": {
		"type": "image/jpeg",
		"etag": "\"2fe5-DEWZoTXT3yOCuFadhyaWB1IvO1g\"",
		"mtime": "2026-09-30T21:15:47.270Z",
		"size": 12261,
		"path": "../public/logos/Euro Construct - English Profile2.jpg"
	},
	"/logos/Euro Construct - English Profile3.jpg": {
		"type": "image/jpeg",
		"etag": "\"34a0-YGCoQvDY5yumFwFK1hthGUIlDU8\"",
		"mtime": "2026-09-30T21:15:56.979Z",
		"size": 13472,
		"path": "../public/logos/Euro Construct - English Profile3.jpg"
	},
	"/logos/Euro Construct - English Profile4.jpg": {
		"type": "image/jpeg",
		"etag": "\"2658-W0p4kZnQz5Ngk9gFpWkdXDpU8g8\"",
		"mtime": "2026-09-30T21:16:03.985Z",
		"size": 9816,
		"path": "../public/logos/Euro Construct - English Profile4.jpg"
	},
	"/logos/Euro Construct - English Profile5.jpg": {
		"type": "image/jpeg",
		"etag": "\"302f-9nn4ADDJj7zv4GATlUlBIQULQi0\"",
		"mtime": "2026-09-30T21:16:11.868Z",
		"size": 12335,
		"path": "../public/logos/Euro Construct - English Profile5.jpg"
	},
	"/logos/Euro Construct - English Profile7.jpg": {
		"type": "image/jpeg",
		"etag": "\"240f-+tDJcdaAGPsLubkff3PFo1Nwmso\"",
		"mtime": "2026-09-30T21:17:07.579Z",
		"size": 9231,
		"path": "../public/logos/Euro Construct - English Profile7.jpg"
	},
	"/logos/Euro Construct - English Profile6.jpg": {
		"type": "image/jpeg",
		"etag": "\"2fd3-zl4Ocg7KJGPZVLAhkcEs0PMWC70\"",
		"mtime": "2026-09-30T21:16:59.282Z",
		"size": 12243,
		"path": "../public/logos/Euro Construct - English Profile6.jpg"
	},
	"/logos/Euro Construct - English Profile8.jpg": {
		"type": "image/jpeg",
		"etag": "\"2e9a-XTd6vZ2a/mK2qS2uyKFbEyxXL6w\"",
		"mtime": "2026-09-30T21:17:15.965Z",
		"size": 11930,
		"path": "../public/logos/Euro Construct - English Profile8.jpg"
	},
	"/logos/Euro Construct - English Profile-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"3bb3-1nSajFaSDUM452STc8dtPij/jIs\"",
		"mtime": "2026-09-30T21:15:37.374Z",
		"size": 15283,
		"path": "../public/logos/Euro Construct - English Profile-1.jpg"
	},
	"/logos/kidana-transparent.png": {
		"type": "image/png",
		"etag": "\"75693-+oCVXS5HOgEElIXgQ/Z208bDyrA\"",
		"mtime": "2026-09-30T22:34:26.293Z",
		"size": 480915,
		"path": "../public/logos/kidana-transparent.png"
	},
	"/logos/euro-consult-transparent.png": {
		"type": "image/png",
		"etag": "\"650db-4R/QkKrTbMnYHBwhnwOZblXlCq0\"",
		"mtime": "2026-09-30T22:31:35.199Z",
		"size": 413915,
		"path": "../public/logos/euro-consult-transparent.png"
	},
	"/logos/ministry-of-education-transparent.png": {
		"type": "image/png",
		"etag": "\"5344c-q3KBkK1Vq31J/gp7AANv4FoDKnc\"",
		"mtime": "2026-09-30T22:15:48.677Z",
		"size": 341068,
		"path": "../public/logos/ministry-of-education-transparent.png"
	},
	"/logos/ministry-transport-transparent.png": {
		"type": "image/png",
		"etag": "\"6e515-9C0rlWoaXIF3+4gPL9JUZPKoGCU\"",
		"mtime": "2026-09-30T22:33:07.759Z",
		"size": 451861,
		"path": "../public/logos/ministry-transport-transparent.png"
	},
	"/logos/Picture56.png.webp": {
		"type": "image/webp",
		"etag": "\"1ebe-nk9O9nDaD28kNdpomeXiy6mtVmw\"",
		"mtime": "2026-09-16T16:27:14.237Z",
		"size": 7870,
		"path": "../public/logos/Picture56.png.webp"
	},
	"/logos/saudi-cement-transparent.png": {
		"type": "image/png",
		"etag": "\"63537-EYOY5RFJ9LCkfJMaw2nuM0s7lOQ\"",
		"mtime": "2026-09-30T22:34:45.880Z",
		"size": 406839,
		"path": "../public/logos/saudi-cement-transparent.png"
	},
	"/logos/ministry-hajj-umrah-transparent.png": {
		"type": "image/png",
		"etag": "\"868ff-xTEvJGWbqfoIYlNxzlLQpFbrjyY\"",
		"mtime": "2026-09-30T22:31:08.682Z",
		"size": 551167,
		"path": "../public/logos/ministry-hajj-umrah-transparent.png"
	},
	"/logos/municipal-affairs-transparent.png": {
		"type": "image/png",
		"etag": "\"90174-Lu52QtBZ+CMoEY9VpBukBf8HpKw\"",
		"mtime": "2026-09-30T22:34:00.750Z",
		"size": 590196,
		"path": "../public/logos/municipal-affairs-transparent.png"
	},
	"/logos/ministry-of-finance-transparent.png": {
		"type": "image/png",
		"etag": "\"bd895-IRzwJuuJF05BDsU9g2ZR1Czz4yA\"",
		"mtime": "2026-09-30T22:29:24.860Z",
		"size": 776341,
		"path": "../public/logos/ministry-of-finance-transparent.png"
	},
	"/logos/nusuk-hajj-transparent.png": {
		"type": "image/png",
		"etag": "\"8b935-E4LjjooK1+zgMADttF1KqiqsSzc\"",
		"mtime": "2026-09-30T22:32:08.468Z",
		"size": 571701,
		"path": "../public/logos/nusuk-hajj-transparent.png"
	},
	"/logos/state-properties-authority-transparent.png": {
		"type": "image/png",
		"etag": "\"81a7c-XeDto3Hr8q0uRzMIpxsDFV2WzW0\"",
		"mtime": "2026-09-30T22:16:24.079Z",
		"size": 531068,
		"path": "../public/logos/state-properties-authority-transparent.png"
	},
	"/logos/zatca-transparent.png": {
		"type": "image/png",
		"etag": "\"84cce-S+AJstTccciZODCNpeYMaIZHhZ8\"",
		"mtime": "2026-09-30T22:30:40.190Z",
		"size": 543950,
		"path": "../public/logos/zatca-transparent.png"
	},
	"/profile/about-cranes.jpg": {
		"type": "image/jpeg",
		"etag": "\"2fa58-+w1W0yVMx1lQk7gemyuoAwt6Zh8\"",
		"mtime": "2026-09-30T22:21:17.619Z",
		"size": 195160,
		"path": "../public/profile/about-cranes.jpg"
	},
	"/profile/client-logos.jpg": {
		"type": "image/jpeg",
		"etag": "\"364ca-wG/CNgwck2XnGQMXSjI0A3EzTRk\"",
		"mtime": "2026-09-30T13:49:57.288Z",
		"size": 222410,
		"path": "../public/profile/client-logos.jpg"
	},
	"/profile/project-01.jpg": {
		"type": "image/jpeg",
		"etag": "\"55aca-SlAD0ujpq4n2atrFyTDwo9SDn3E\"",
		"mtime": "2026-09-30T13:23:27.637Z",
		"size": 350922,
		"path": "../public/profile/project-01.jpg"
	},
	"/profile/project-02.jpg": {
		"type": "image/jpeg",
		"etag": "\"4f6ed-HTCtzmfzES8yWsSTxWLpJdppT3c\"",
		"mtime": "2026-09-30T13:23:27.871Z",
		"size": 325357,
		"path": "../public/profile/project-02.jpg"
	},
	"/profile/project-10.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a0a7-gBO/z6gZ2RL7TXmGLOSP2zBI9V8\"",
		"mtime": "2026-09-30T13:23:30.549Z",
		"size": 237735,
		"path": "../public/profile/project-10.jpg"
	},
	"/profile/project-11.jpg": {
		"type": "image/jpeg",
		"etag": "\"b78f-9R41rbnWBGIJaBAVWjUPAsgWy+c\"",
		"mtime": "2026-09-30T13:23:30.742Z",
		"size": 46991,
		"path": "../public/profile/project-11.jpg"
	},
	"/profile/hero-construction.jpg": {
		"type": "image/jpeg",
		"etag": "\"ac3e7-dd1TWfZoGxVeAXK9kCjyALd/PPQ\"",
		"mtime": "2026-09-30T13:23:26.770Z",
		"size": 705511,
		"path": "../public/profile/hero-construction.jpg"
	},
	"/profile/project-04.jpg": {
		"type": "image/jpeg",
		"etag": "\"d948c-0QW9kHnu/CoQnBM9XDLlLN5Sx7E\"",
		"mtime": "2026-09-30T13:23:28.422Z",
		"size": 889996,
		"path": "../public/profile/project-04.jpg"
	},
	"/profile/project-03.jpg": {
		"type": "image/jpeg",
		"etag": "\"d2cfc-9XdQHzQ7kHxWmeUPNN39/eeVEMc\"",
		"mtime": "2026-09-30T13:23:28.155Z",
		"size": 863484,
		"path": "../public/profile/project-03.jpg"
	},
	"/profile/project-05.jpg": {
		"type": "image/jpeg",
		"etag": "\"9e4fb-zbl9L4xmerLIJiRN8q6x4ZrnV28\"",
		"mtime": "2026-09-30T13:23:28.708Z",
		"size": 648443,
		"path": "../public/profile/project-05.jpg"
	},
	"/profile/project-06.jpg": {
		"type": "image/jpeg",
		"etag": "\"b13fe-cjhHtuIwQcQxWqUGCuLRUy19orI\"",
		"mtime": "2026-09-30T13:23:29.508Z",
		"size": 726014,
		"path": "../public/profile/project-06.jpg"
	},
	"/profile/project-08.jpg": {
		"type": "image/jpeg",
		"etag": "\"9c131-8OU30fiN1HxEvOAuajgGNSCDh+4\"",
		"mtime": "2026-09-30T13:23:30.077Z",
		"size": 639281,
		"path": "../public/profile/project-08.jpg"
	},
	"/profile/project-09.jpg": {
		"type": "image/jpeg",
		"etag": "\"8e309-Vg5P3lQus1otvzGSBV8boPfvleQ\"",
		"mtime": "2026-09-30T13:23:30.324Z",
		"size": 582409,
		"path": "../public/profile/project-09.jpg"
	},
	"/profile/project-14.jpg": {
		"type": "image/jpeg",
		"etag": "\"69075-wI685hMB5bMid5ZpejXufIuPti4\"",
		"mtime": "2026-09-30T13:23:32.028Z",
		"size": 430197,
		"path": "../public/profile/project-14.jpg"
	},
	"/profile/project-15.jpg": {
		"type": "image/jpeg",
		"etag": "\"38d3d-XKxQx0JBn4AD/6Eu8c3o11lvPm8\"",
		"mtime": "2026-09-30T13:23:32.344Z",
		"size": 232765,
		"path": "../public/profile/project-15.jpg"
	},
	"/profile/project-16.jpg": {
		"type": "image/jpeg",
		"etag": "\"50409-872cnL7aGgp/vzbUvCTqK9VkwbA\"",
		"mtime": "2026-09-30T13:23:32.883Z",
		"size": 328713,
		"path": "../public/profile/project-16.jpg"
	},
	"/profile/project-12.jpg": {
		"type": "image/jpeg",
		"etag": "\"87c04-fM5nQpGj8Rm+/00AKoKCc/9JjAw\"",
		"mtime": "2026-09-30T13:23:31.010Z",
		"size": 556036,
		"path": "../public/profile/project-12.jpg"
	},
	"/profile/project-17.jpg": {
		"type": "image/jpeg",
		"etag": "\"c13b-C3mYrO1nvEBLG9oBrAN38r81gOk\"",
		"mtime": "2026-09-30T13:23:33.086Z",
		"size": 49467,
		"path": "../public/profile/project-17.jpg"
	},
	"/profile/project-07.jpg": {
		"type": "image/jpeg",
		"etag": "\"13045c-ZjPpLAtqEGXJRISVlRl9ZEFfR2s\"",
		"mtime": "2026-09-30T13:23:29.810Z",
		"size": 1246300,
		"path": "../public/profile/project-07.jpg"
	},
	"/profile/project-18.jpg": {
		"type": "image/jpeg",
		"etag": "\"12589-UV5/S14doxYXNc0BnCvJei6uUIg\"",
		"mtime": "2026-09-30T13:23:33.126Z",
		"size": 75145,
		"path": "../public/profile/project-18.jpg"
	},
	"/profile/project-19.jpg": {
		"type": "image/jpeg",
		"etag": "\"21876-OmGMUqBEkXXWJBDxs3kJfT5tgbk\"",
		"mtime": "2026-09-30T13:23:33.160Z",
		"size": 137334,
		"path": "../public/profile/project-19.jpg"
	},
	"/profile/project-13.jpg": {
		"type": "image/jpeg",
		"etag": "\"110025-ajHpabAa5wdlJHR71KheK0hYcV0\"",
		"mtime": "2026-09-30T13:23:31.492Z",
		"size": 1114149,
		"path": "../public/profile/project-13.jpg"
	},
	"/profile/project-20.jpg": {
		"type": "image/jpeg",
		"etag": "\"2cec5-8y62vfO/XThzZxLArdhOh986tGM\"",
		"mtime": "2026-09-30T13:23:33.194Z",
		"size": 184005,
		"path": "../public/profile/project-20.jpg"
	},
	"/profile/project-21.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ab37-5f00mdqIF+JLnuOwmTpQ/2Utk1M\"",
		"mtime": "2026-09-30T13:23:33.227Z",
		"size": 109367,
		"path": "../public/profile/project-21.jpg"
	},
	"/profile/clients/Euro Construct - English Profile-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"3bb3-1nSajFaSDUM452STc8dtPij/jIs\"",
		"mtime": "2026-09-30T21:15:37.374Z",
		"size": 15283,
		"path": "../public/profile/clients/Euro Construct - English Profile-1.jpg"
	},
	"/profile/clients/Euro Construct - English Profile4.jpg": {
		"type": "image/jpeg",
		"etag": "\"2658-W0p4kZnQz5Ngk9gFpWkdXDpU8g8\"",
		"mtime": "2026-09-30T21:16:03.985Z",
		"size": 9816,
		"path": "../public/profile/clients/Euro Construct - English Profile4.jpg"
	},
	"/profile/clients/Euro Construct - English Profile.jpg": {
		"type": "image/jpeg",
		"etag": "\"35f0-56CKuzBryPcmWfER45EPtj4SUjw\"",
		"mtime": "2026-09-30T21:14:28.901Z",
		"size": 13808,
		"path": "../public/profile/clients/Euro Construct - English Profile.jpg"
	},
	"/profile/clients/Euro Construct - English Profile2.jpg": {
		"type": "image/jpeg",
		"etag": "\"2fe5-DEWZoTXT3yOCuFadhyaWB1IvO1g\"",
		"mtime": "2026-09-30T21:15:47.270Z",
		"size": 12261,
		"path": "../public/profile/clients/Euro Construct - English Profile2.jpg"
	},
	"/profile/clients/Euro Construct - English Profile6.jpg": {
		"type": "image/jpeg",
		"etag": "\"2fd3-zl4Ocg7KJGPZVLAhkcEs0PMWC70\"",
		"mtime": "2026-09-30T21:16:59.282Z",
		"size": 12243,
		"path": "../public/profile/clients/Euro Construct - English Profile6.jpg"
	},
	"/profile/clients/Euro Construct - English Profile3.jpg": {
		"type": "image/jpeg",
		"etag": "\"34a0-YGCoQvDY5yumFwFK1hthGUIlDU8\"",
		"mtime": "2026-09-30T21:15:56.979Z",
		"size": 13472,
		"path": "../public/profile/clients/Euro Construct - English Profile3.jpg"
	},
	"/profile/clients/Euro Construct - English Profile5.jpg": {
		"type": "image/jpeg",
		"etag": "\"302f-9nn4ADDJj7zv4GATlUlBIQULQi0\"",
		"mtime": "2026-09-30T21:16:11.868Z",
		"size": 12335,
		"path": "../public/profile/clients/Euro Construct - English Profile5.jpg"
	},
	"/profile/clients/Euro Construct - English Profile7.jpg": {
		"type": "image/jpeg",
		"etag": "\"240f-+tDJcdaAGPsLubkff3PFo1Nwmso\"",
		"mtime": "2026-09-30T21:17:07.579Z",
		"size": 9231,
		"path": "../public/profile/clients/Euro Construct - English Profile7.jpg"
	},
	"/profile/clients/Picture56.png.webp": {
		"type": "image/webp",
		"etag": "\"1ebe-nk9O9nDaD28kNdpomeXiy6mtVmw\"",
		"mtime": "2026-09-16T16:27:14.237Z",
		"size": 7870,
		"path": "../public/profile/clients/Picture56.png.webp"
	},
	"/profile/clients/Euro Construct - English Profile8.jpg": {
		"type": "image/jpeg",
		"etag": "\"2e9a-XTd6vZ2a/mK2qS2uyKFbEyxXL6w\"",
		"mtime": "2026-09-30T21:17:15.965Z",
		"size": 11930,
		"path": "../public/profile/clients/Euro Construct - English Profile8.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = {
		route: "/assets/**",
		rank: 0,
		rules: [{
			name: "headers",
			route: "/assets/**",
			handler: headers,
			options: { "cache-control": "public, max-age=31536000, immutable" }
		}]
	};
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1);
		let s = p.split("/");
		if (s.length > 1 && s[s.length - 1] === "") {
			s.pop();
			p = p.slice(0, -1);
		}
		if (s.length > 1) {
			if (s[1] === "assets") r.push({
				data: $0,
				params: { "_": p.slice(8) }
			});
		}
		return r.reverse();
	};
})();
var _lazy_35e1399276dce164 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_35e1399276dce164
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => {
		event.context.routeRules = getRouteRules(event.req.method, event.url.pathname).routeRules;
		return findRoute(event.req.method, event.url.pathname);
	};
	h3App["~middleware"].push(createRouteRulesMiddleware());
	h3App["~middleware"].push(...globalMiddleware);
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
var _matchRouteRules;
function getRouteRules(method, pathname) {
	return (_matchRouteRules ??= memoizeRouteRulesMatcher(createMatcherFromFind(findRouteRules)))(method, pathname);
}
function createRouteRulesMiddleware() {
	const composed = /* @__PURE__ */ new WeakMap();
	const middleware = (event, next) => {
		const ruleMiddleware = getRouteRules(event.req.method, event.url.pathname).routeRuleMiddleware;
		if (ruleMiddleware.length === 0) return next();
		let chain = composed.get(ruleMiddleware);
		if (!chain) {
			chain = composeMiddleware(ruleMiddleware);
			composed.set(ruleMiddleware, chain);
		}
		return chain(event, next);
	};
	return markUntraced(middleware);
}
function markUntraced(middleware) {
	middleware.__traced__ = true;
	return middleware;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/runtime/internal/shutdown.mjs
function setupCloseHooks(server) {
	const closeServer = server.close.bind(server);
	let closeHooks;
	server.close = (closeActiveConnections) => closeServer(closeActiveConnections).finally(() => closeHooks ??= callCloseHooks());
}
async function callCloseHooks() {
	try {
		await useNitroHooks().callHook("close");
	} catch (error) {
		console.error("[nitro] Error while calling `close` hooks:", error);
	}
}
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
setupCloseHooks(serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
}));
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
