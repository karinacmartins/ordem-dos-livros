export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["github-round-svgrepo-com.svg","instagram-round-svgrepo-com.svg","linkedin-round-svgrepo-com.svg","logo.png","portfolio.png","scrennshot.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.asqVP4lp.js","app":"_app/immutable/entry/app.DmMrUlov.js","imports":["_app/immutable/entry/start.asqVP4lp.js","_app/immutable/chunks/entry.BbVf8O15.js","_app/immutable/chunks/runtime.Dc1In6lT.js","_app/immutable/entry/app.DmMrUlov.js","_app/immutable/chunks/runtime.Dc1In6lT.js","_app/immutable/chunks/render.DsEvvzMo.js","_app/immutable/chunks/disclose-version.CyYIBoT6.js","_app/immutable/chunks/if.BcA1w1KC.js","_app/immutable/chunks/props.BauSasbF.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/autores",
				pattern: /^\/autores\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/autores/[id]",
				pattern: /^\/autores\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/series/[id]",
				pattern: /^\/series\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
