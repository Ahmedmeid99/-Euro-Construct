import { __toESM } from "../_runtime.mjs";
import { require_react } from "./@tanstack/react-router+[...].mjs";
//#region node_modules/lucide-react/dist/esm/shared/src/utils.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && array.indexOf(className) === index;
}).join(" ");
//#endregion
//#region node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = (0, import_react.forwardRef)(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => {
	return (0, import_react.createElement)("svg", {
		ref,
		...defaultAttributes,
		width: size,
		height: size,
		stroke: color,
		strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
		className: mergeClasses("lucide", className),
		...rest
	}, [...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)), ...Array.isArray(children) ? children : [children]]);
});
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var createLucideIcon = (iconName, iconNode) => {
	const Component = (0, import_react.forwardRef)(({ className, ...props }, ref) => (0, import_react.createElement)(Icon, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
		...props
	}));
	Component.displayName = `${iconName}`;
	return Component;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/arrow-left.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowLeft = createLucideIcon("ArrowLeft", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/arrow-right.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowRight = createLucideIcon("ArrowRight", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/arrow-up-right.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowUpRight = createLucideIcon("ArrowUpRight", [["path", {
	d: "M7 7h10v10",
	key: "1tivn9"
}], ["path", {
	d: "M7 17 17 7",
	key: "1vkiza"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/building-2.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Building2 = createLucideIcon("Building2", [
	["path", {
		d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
		key: "1b4qmf"
	}],
	["path", {
		d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
		key: "i71pzd"
	}],
	["path", {
		d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
		key: "10jefs"
	}],
	["path", {
		d: "M10 6h4",
		key: "1itunk"
	}],
	["path", {
		d: "M10 10h4",
		key: "tcdvrf"
	}],
	["path", {
		d: "M10 14h4",
		key: "kelpxr"
	}],
	["path", {
		d: "M10 18h4",
		key: "1ulq68"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/check.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Check = createLucideIcon("Check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/chevron-down.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronDown = createLucideIcon("ChevronDown", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/chevron-right.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronRight = createLucideIcon("ChevronRight", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/circle-check.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleCheck = createLucideIcon("CircleCheck", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/clipboard-check.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ClipboardCheck = createLucideIcon("ClipboardCheck", [
	["rect", {
		width: "8",
		height: "4",
		x: "8",
		y: "2",
		rx: "1",
		ry: "1",
		key: "tgr4d6"
	}],
	["path", {
		d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
		key: "116196"
	}],
	["path", {
		d: "m9 14 2 2 4-4",
		key: "df797q"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/compass.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Compass = createLucideIcon("Compass", [["path", {
	d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
	key: "9ktpf1"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/construction.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Construction = createLucideIcon("Construction", [
	["rect", {
		x: "2",
		y: "6",
		width: "20",
		height: "8",
		rx: "1",
		key: "1estib"
	}],
	["path", {
		d: "M17 14v7",
		key: "7m2elx"
	}],
	["path", {
		d: "M7 14v7",
		key: "1cm7wv"
	}],
	["path", {
		d: "M17 3v3",
		key: "1v4jwn"
	}],
	["path", {
		d: "M7 3v3",
		key: "7o6guu"
	}],
	["path", {
		d: "M10 14 2.3 6.3",
		key: "1023jk"
	}],
	["path", {
		d: "m14 6 7.7 7.7",
		key: "1s8pl2"
	}],
	["path", {
		d: "m8 6 8 8",
		key: "hl96qh"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/file-check-2.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FileCheck2 = createLucideIcon("FileCheck2", [
	["path", {
		d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
		key: "1pf5j1"
	}],
	["path", {
		d: "M14 2v4a2 2 0 0 0 2 2h4",
		key: "tnqrlb"
	}],
	["path", {
		d: "m3 15 2 2 4-4",
		key: "1lhrkk"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/hard-hat.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var HardHat = createLucideIcon("HardHat", [
	["path", {
		d: "M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",
		key: "1dej2m"
	}],
	["path", {
		d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",
		key: "1p9q5i"
	}],
	["path", {
		d: "M4 15v-3a6 6 0 0 1 6-6",
		key: "9ciidu"
	}],
	["path", {
		d: "M14 6a6 6 0 0 1 6 6v3",
		key: "1hnv84"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/landmark.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Landmark = createLucideIcon("Landmark", [
	["line", {
		x1: "3",
		x2: "21",
		y1: "22",
		y2: "22",
		key: "j8o0r"
	}],
	["line", {
		x1: "6",
		x2: "6",
		y1: "18",
		y2: "11",
		key: "10tf0k"
	}],
	["line", {
		x1: "10",
		x2: "10",
		y1: "18",
		y2: "11",
		key: "54lgf6"
	}],
	["line", {
		x1: "14",
		x2: "14",
		y1: "18",
		y2: "11",
		key: "380y"
	}],
	["line", {
		x1: "18",
		x2: "18",
		y1: "18",
		y2: "11",
		key: "1kevvc"
	}],
	["polygon", {
		points: "12 2 20 7 4 7",
		key: "jkujk7"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/layers-3.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Layers3 = createLucideIcon("Layers3", [
	["path", {
		d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
		key: "8b97xw"
	}],
	["path", {
		d: "m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",
		key: "1e5n1m"
	}],
	["path", {
		d: "m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",
		key: "1iwflc"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/map-pin.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MapPin = createLucideIcon("MapPin", [["path", {
	d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
	key: "1r0f0z"
}], ["circle", {
	cx: "12",
	cy: "10",
	r: "3",
	key: "ilqhr7"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/menu.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Menu = createLucideIcon("Menu", [
	["line", {
		x1: "4",
		x2: "20",
		y1: "12",
		y2: "12",
		key: "1e0a9i"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "6",
		y2: "6",
		key: "1owob3"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "18",
		y2: "18",
		key: "yk5zj1"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/move-right.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MoveRight = createLucideIcon("MoveRight", [["path", {
	d: "M18 8L22 12L18 16",
	key: "1r0oui"
}], ["path", {
	d: "M2 12H22",
	key: "1m8cig"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/pause.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Pause = createLucideIcon("Pause", [["rect", {
	x: "14",
	y: "4",
	width: "4",
	height: "16",
	rx: "1",
	key: "zuxfzm"
}], ["rect", {
	x: "6",
	y: "4",
	width: "4",
	height: "16",
	rx: "1",
	key: "1okwgv"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/play.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Play = createLucideIcon("Play", [["polygon", {
	points: "6 3 20 12 6 21 6 3",
	key: "1oa8hb"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/ruler.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Ruler = createLucideIcon("Ruler", [
	["path", {
		d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
		key: "icamh8"
	}],
	["path", {
		d: "m14.5 12.5 2-2",
		key: "inckbg"
	}],
	["path", {
		d: "m11.5 9.5 2-2",
		key: "fmmyf7"
	}],
	["path", {
		d: "m8.5 6.5 2-2",
		key: "vc6u1g"
	}],
	["path", {
		d: "m17.5 15.5 2-2",
		key: "wo5hmg"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/shield-check.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ShieldCheck = createLucideIcon("ShieldCheck", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/target.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Target = createLucideIcon("Target", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "6",
		key: "1vlfrh"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/users.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Users = createLucideIcon("Users", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}],
	["path", {
		d: "M22 21v-2a4 4 0 0 0-3-3.87",
		key: "kshegd"
	}],
	["path", {
		d: "M16 3.13a4 4 0 0 1 0 7.75",
		key: "1da9ce"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/x.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var X = createLucideIcon("X", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
export { ArrowLeft, ArrowRight, ArrowUpRight, Building2, Check, ChevronDown, ChevronRight, CircleCheck, ClipboardCheck, Compass, Construction, FileCheck2, HardHat, Landmark, Layers3, MapPin, Menu, MoveRight, Pause, Play, Ruler, ShieldCheck, Target, Users, X };
