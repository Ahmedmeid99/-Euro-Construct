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
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"165-AHyIaKq8UF2EojI+yxSvLqQ/fIw\"",
		"mtime": "2026-09-30T12:47:56.282Z",
		"size": 357,
		"path": "../public/favicon.svg"
	},
	"/profile/about-cranes.jpg": {
		"type": "image/jpeg",
		"etag": "\"27951-Vi6pg1DHEe1TATYXBnFphfNrG1o\"",
		"mtime": "2026-09-30T13:23:27.390Z",
		"size": 162129,
		"path": "../public/profile/about-cranes.jpg"
	},
	"/ecc-logo.jpg": {
		"type": "image/jpeg",
		"etag": "\"5277-1dJCqB651EmM7pkkW4jDdtmuwoQ\"",
		"mtime": "2026-09-30T12:23:59.074Z",
		"size": 21111,
		"path": "../public/ecc-logo.jpg"
	},
	"/profile/client-logos.jpg": {
		"type": "image/jpeg",
		"etag": "\"364ca-wG/CNgwck2XnGQMXSjI0A3EzTRk\"",
		"mtime": "2026-09-30T13:49:57.288Z",
		"size": 222410,
		"path": "../public/profile/client-logos.jpg"
	},
	"/profile/project-02.jpg": {
		"type": "image/jpeg",
		"etag": "\"4f6ed-HTCtzmfzES8yWsSTxWLpJdppT3c\"",
		"mtime": "2026-09-30T13:23:27.871Z",
		"size": 325357,
		"path": "../public/profile/project-02.jpg"
	},
	"/profile/project-01.jpg": {
		"type": "image/jpeg",
		"etag": "\"55aca-SlAD0ujpq4n2atrFyTDwo9SDn3E\"",
		"mtime": "2026-09-30T13:23:27.637Z",
		"size": 350922,
		"path": "../public/profile/project-01.jpg"
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
	"/profile/project-14.jpg": {
		"type": "image/jpeg",
		"etag": "\"69075-wI685hMB5bMid5ZpejXufIuPti4\"",
		"mtime": "2026-09-30T13:23:32.028Z",
		"size": 430197,
		"path": "../public/profile/project-14.jpg"
	},
	"/profile/project-16.jpg": {
		"type": "image/jpeg",
		"etag": "\"50409-872cnL7aGgp/vzbUvCTqK9VkwbA\"",
		"mtime": "2026-09-30T13:23:32.883Z",
		"size": 328713,
		"path": "../public/profile/project-16.jpg"
	},
	"/profile/project-17.jpg": {
		"type": "image/jpeg",
		"etag": "\"c13b-C3mYrO1nvEBLG9oBrAN38r81gOk\"",
		"mtime": "2026-09-30T13:23:33.086Z",
		"size": 49467,
		"path": "../public/profile/project-17.jpg"
	},
	"/profile/project-15.jpg": {
		"type": "image/jpeg",
		"etag": "\"38d3d-XKxQx0JBn4AD/6Eu8c3o11lvPm8\"",
		"mtime": "2026-09-30T13:23:32.344Z",
		"size": 232765,
		"path": "../public/profile/project-15.jpg"
	},
	"/profile/project-03.jpg": {
		"type": "image/jpeg",
		"etag": "\"d2cfc-9XdQHzQ7kHxWmeUPNN39/eeVEMc\"",
		"mtime": "2026-09-30T13:23:28.155Z",
		"size": 863484,
		"path": "../public/profile/project-03.jpg"
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
	"/profile/project-09.jpg": {
		"type": "image/jpeg",
		"etag": "\"8e309-Vg5P3lQus1otvzGSBV8boPfvleQ\"",
		"mtime": "2026-09-30T13:23:30.324Z",
		"size": 582409,
		"path": "../public/profile/project-09.jpg"
	},
	"/profile/project-08.jpg": {
		"type": "image/jpeg",
		"etag": "\"9c131-8OU30fiN1HxEvOAuajgGNSCDh+4\"",
		"mtime": "2026-09-30T13:23:30.077Z",
		"size": 639281,
		"path": "../public/profile/project-08.jpg"
	},
	"/profile/project-12.jpg": {
		"type": "image/jpeg",
		"etag": "\"87c04-fM5nQpGj8Rm+/00AKoKCc/9JjAw\"",
		"mtime": "2026-09-30T13:23:31.010Z",
		"size": 556036,
		"path": "../public/profile/project-12.jpg"
	},
	"/profile/project-18.jpg": {
		"type": "image/jpeg",
		"etag": "\"12589-UV5/S14doxYXNc0BnCvJei6uUIg\"",
		"mtime": "2026-09-30T13:23:33.126Z",
		"size": 75145,
		"path": "../public/profile/project-18.jpg"
	},
	"/profile/project-07.jpg": {
		"type": "image/jpeg",
		"etag": "\"13045c-ZjPpLAtqEGXJRISVlRl9ZEFfR2s\"",
		"mtime": "2026-09-30T13:23:29.810Z",
		"size": 1246300,
		"path": "../public/profile/project-07.jpg"
	},
	"/profile/project-13.jpg": {
		"type": "image/jpeg",
		"etag": "\"110025-ajHpabAa5wdlJHR71KheK0hYcV0\"",
		"mtime": "2026-09-30T13:23:31.492Z",
		"size": 1114149,
		"path": "../public/profile/project-13.jpg"
	},
	"/assets/about-Nrfr4O3r.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1344-kEKtPL19QlCkaHlD++RUqZ8oTaE\"",
		"mtime": "2026-09-30T17:35:56.931Z",
		"size": 4932,
		"path": "../public/assets/about-Nrfr4O3r.js"
	},
	"/profile/project-19.jpg": {
		"type": "image/jpeg",
		"etag": "\"21876-OmGMUqBEkXXWJBDxs3kJfT5tgbk\"",
		"mtime": "2026-09-30T13:23:33.160Z",
		"size": 137334,
		"path": "../public/profile/project-19.jpg"
	},
	"/assets/capabilities-C_MYUQCu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"83a-JxB454H+DAwlFD868IvuwN7y/hk\"",
		"mtime": "2026-09-30T17:35:56.931Z",
		"size": 2106,
		"path": "../public/assets/capabilities-C_MYUQCu.js"
	},
	"/profile/project-20.jpg": {
		"type": "image/jpeg",
		"etag": "\"2cec5-8y62vfO/XThzZxLArdhOh986tGM\"",
		"mtime": "2026-09-30T13:23:33.194Z",
		"size": 184005,
		"path": "../public/profile/project-20.jpg"
	},
	"/assets/check-BlgVb7k2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"73-3hi54kKeI9CkkIsJY/vo7C2QxoQ\"",
		"mtime": "2026-09-30T17:35:56.931Z",
		"size": 115,
		"path": "../public/assets/check-BlgVb7k2.js"
	},
	"/assets/circle-check-DTeHEZCk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a8-ZJsPUsaGbDGhpL/aG3rrrQM8cPE\"",
		"mtime": "2026-09-30T17:35:56.936Z",
		"size": 168,
		"path": "../public/assets/circle-check-DTeHEZCk.js"
	},
	"/assets/clients-BHBZKKoh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"789-dn0VZe9vxVj1DYXku3UAEEuWG6I\"",
		"mtime": "2026-09-30T17:35:56.936Z",
		"size": 1929,
		"path": "../public/assets/clients-BHBZKKoh.js"
	},
	"/assets/contact-BmUodEGY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f28-2P+QrD5a7EaPmMkUOoC+RZ/71R0\"",
		"mtime": "2026-09-30T17:35:56.936Z",
		"size": 3880,
		"path": "../public/assets/contact-BmUodEGY.js"
	},
	"/assets/index-CZK5nN4y.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"9857-zeRz9KM6t9enPiBV1IEmQDVspA4\"",
		"mtime": "2026-09-30T17:35:56.940Z",
		"size": 38999,
		"path": "../public/assets/index-CZK5nN4y.css"
	},
	"/assets/content-mPtAmuGW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6ea6-cqw1wv7TpnSlqXQ56wRC4S1BEeI\"",
		"mtime": "2026-09-30T17:35:56.936Z",
		"size": 28326,
		"path": "../public/assets/content-mPtAmuGW.js"
	},
	"/assets/index-AFiHdDUe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"406d4-K1/mMEUlttdGrnGI8JY+ftUnSb8\"",
		"mtime": "2026-09-30T17:35:56.931Z",
		"size": 263892,
		"path": "../public/assets/index-AFiHdDUe.js"
	},
	"/assets/map-pin-1Yc7eoxf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f9-iQ75C8lPYtVB64M9iTKshsdU2dI\"",
		"mtime": "2026-09-30T17:35:56.936Z",
		"size": 249,
		"path": "../public/assets/map-pin-1Yc7eoxf.js"
	},
	"/assets/move-right-CKYYG1Yn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-g5zgf+RWG4/xHhuuVphyH27quyk\"",
		"mtime": "2026-09-30T17:35:56.938Z",
		"size": 158,
		"path": "../public/assets/move-right-CKYYG1Yn.js"
	},
	"/assets/PageHeader-EysClxPT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"365-bSG+3805niioFIXpZ9YZiG3lYsA\"",
		"mtime": "2026-09-30T17:35:56.931Z",
		"size": 869,
		"path": "../public/assets/PageHeader-EysClxPT.js"
	},
	"/assets/projects-O8GnncW2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"987-VZ8oU41pvoK1qqyinJxyOoenZfQ\"",
		"mtime": "2026-09-30T17:35:56.938Z",
		"size": 2439,
		"path": "../public/assets/projects-O8GnncW2.js"
	},
	"/assets/routes-C-2zD8Ag.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4135-tmUGOuLHuJVIcnjjGFWpJDAPypA\"",
		"mtime": "2026-09-30T17:35:56.938Z",
		"size": 16693,
		"path": "../public/assets/routes-C-2zD8Ag.js"
	},
	"/assets/services-COL51BZm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9ac-GcUou+vTqKlrS3pwlNNd0MS2foc\"",
		"mtime": "2026-09-30T17:35:56.940Z",
		"size": 2476,
		"path": "../public/assets/services-COL51BZm.js"
	},
	"/assets/projects_._projectId-BEJSd-8f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dd4-O1osmACHk09sV9MbERxhCzL7n78\"",
		"mtime": "2026-09-30T17:35:56.938Z",
		"size": 3540,
		"path": "../public/assets/projects_._projectId-BEJSd-8f.js"
	},
	"/assets/useReveal-Bz58hT8z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"146-w69UOC86zm7AAGWE8JKPXik5/DY\"",
		"mtime": "2026-09-30T17:35:56.940Z",
		"size": 326,
		"path": "../public/assets/useReveal-Bz58hT8z.js"
	},
	"/profile/project-21.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ab37-5f00mdqIF+JLnuOwmTpQ/2Utk1M\"",
		"mtime": "2026-09-30T13:23:33.227Z",
		"size": 109367,
		"path": "../public/profile/project-21.jpg"
	},
	"/profile/clients/client-03.png": {
		"type": "image/png",
		"etag": "\"452a-W23fJehWMInceFycEuYzw94Ep5g\"",
		"mtime": "2026-09-30T13:23:33.688Z",
		"size": 17706,
		"path": "../public/profile/clients/client-03.png"
	},
	"/profile/clients/client-02.png": {
		"type": "image/png",
		"etag": "\"45f2-ZghfNyxTAi0VkH00T6zphAAbxVI\"",
		"mtime": "2026-09-30T13:23:33.661Z",
		"size": 17906,
		"path": "../public/profile/clients/client-02.png"
	},
	"/profile/clients/client-01.png": {
		"type": "image/png",
		"etag": "\"45e3-+3l5x9yCLBAGNYv8tlmM68lMFGI\"",
		"mtime": "2026-09-30T13:23:33.627Z",
		"size": 17891,
		"path": "../public/profile/clients/client-01.png"
	},
	"/profile/clients/client-04.png": {
		"type": "image/png",
		"etag": "\"45e0-rBNqenElgzeaMV7ouM+VEIt66lM\"",
		"mtime": "2026-09-30T13:23:33.712Z",
		"size": 17888,
		"path": "../public/profile/clients/client-04.png"
	},
	"/profile/clients/client-05.png": {
		"type": "image/png",
		"etag": "\"43f8-j86F8aBGv353yqvBmaDh6OFDDwQ\"",
		"mtime": "2026-09-30T13:23:33.727Z",
		"size": 17400,
		"path": "../public/profile/clients/client-05.png"
	},
	"/profile/clients/client-06.png": {
		"type": "image/png",
		"etag": "\"4409-VUf996i5gONu2SW/rWHbE2G6aDQ\"",
		"mtime": "2026-09-30T13:23:33.756Z",
		"size": 17417,
		"path": "../public/profile/clients/client-06.png"
	},
	"/profile/clients/client-07.png": {
		"type": "image/png",
		"etag": "\"43a2-COoPxBUsPCNxLblk0yqLArfhpug\"",
		"mtime": "2026-09-30T13:23:33.778Z",
		"size": 17314,
		"path": "../public/profile/clients/client-07.png"
	},
	"/profile/clients/client-08.png": {
		"type": "image/png",
		"etag": "\"441c-La+gRFMWhp61iOMoa0X5EIZQ5WM\"",
		"mtime": "2026-09-30T13:23:33.794Z",
		"size": 17436,
		"path": "../public/profile/clients/client-08.png"
	},
	"/profile/clients/client-09.png": {
		"type": "image/png",
		"etag": "\"453a-uUq7mJ8vdmBvfp7JJ3wCILhcJvU\"",
		"mtime": "2026-09-30T13:23:33.824Z",
		"size": 17722,
		"path": "../public/profile/clients/client-09.png"
	},
	"/profile/clients/client-12.png": {
		"type": "image/png",
		"etag": "\"439e-HZNLQ/7ZdNUppAZL6iWqtxExFKg\"",
		"mtime": "2026-09-30T13:23:33.891Z",
		"size": 17310,
		"path": "../public/profile/clients/client-12.png"
	},
	"/profile/clients/client-10.png": {
		"type": "image/png",
		"etag": "\"43a8-bGzwyBEzeA+BcHK8LlbZxzdl3t0\"",
		"mtime": "2026-09-30T13:23:33.846Z",
		"size": 17320,
		"path": "../public/profile/clients/client-10.png"
	},
	"/profile/clients/client-11.png": {
		"type": "image/png",
		"etag": "\"4531-1pTAeXJnSm9yGzFoV/FH0O9iGgM\"",
		"mtime": "2026-09-30T13:23:33.861Z",
		"size": 17713,
		"path": "../public/profile/clients/client-11.png"
	},
	"/profile/clients/client-15.png": {
		"type": "image/png",
		"etag": "\"399d-hR4QQxp037tegG1VpK4BsCBHzY8\"",
		"mtime": "2026-09-30T13:23:33.928Z",
		"size": 14749,
		"path": "../public/profile/clients/client-15.png"
	},
	"/profile/clients/client-13.png": {
		"type": "image/png",
		"etag": "\"6b55-5OI1do/rkBFiAcwWnjo+eS4XKnk\"",
		"mtime": "2026-09-30T13:23:33.895Z",
		"size": 27477,
		"path": "../public/profile/clients/client-13.png"
	},
	"/profile/clients/client-14.png": {
		"type": "image/png",
		"etag": "\"51ac-2Kp3kdrZ7jxOlQzwfmkx/A8MW4s\"",
		"mtime": "2026-09-30T13:23:33.919Z",
		"size": 20908,
		"path": "../public/profile/clients/client-14.png"
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
