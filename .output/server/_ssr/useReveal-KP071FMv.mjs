import { __toESM } from "../_runtime.mjs";
import { require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useReveal-KP071FMv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useReveal() {
	(0, import_react.useEffect)(() => {
		const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: .12 });
		document.querySelectorAll(".reveal").forEach((element) => reveal.observe(element));
		return () => reveal.disconnect();
	}, []);
}
//#endregion
export { useReveal };
