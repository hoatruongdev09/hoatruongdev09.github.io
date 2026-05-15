import { HeadContent, Outlet, Scripts, createFileRoute, createHashHistory, createRootRoute, createRouter, lazyRouteComponent } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/styles.css?url
var styles_default = "/assets/styles-BMUHPQ-g.css";
//#endregion
//#region src/components/footer.component.tsx
function Footer() {
	return /* @__PURE__ */ jsx("div", {
		className: "px-4 text-center text-sm text-gray-500 ",
		children: "© 2026 Hoa Truong | All rights reserved."
	});
}
//#endregion
//#region src/routes/__root.tsx
var Route$1 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "TanStack Start Starter" }
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	component: RootComponent
});
function RootComponent() {
	return /* @__PURE__ */ jsxs(RootDocument, { children: [/* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Footer, {})] });
}
function RootDocument({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-CeEcphF7.js");
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = { IndexRoute: createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") }).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
		history: typeof window !== "undefined" ? createHashHistory() : void 0
	});
}
//#endregion
export { getRouter };
