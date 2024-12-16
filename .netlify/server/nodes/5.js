import * as universal from '../entries/pages/series/_id_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/series/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/series/[id]/+page.js";
export const imports = ["_app/immutable/nodes/5.BchsOwgq.js","_app/immutable/chunks/index.C6KfQZgV.js","_app/immutable/chunks/entry.BbVf8O15.js","_app/immutable/chunks/runtime.Dc1In6lT.js","_app/immutable/chunks/series.DLv8pAis.js","_app/immutable/chunks/autores.DwU1tmTh.js","_app/immutable/chunks/disclose-version.CyYIBoT6.js","_app/immutable/chunks/legacy.BJkqUp8v.js","_app/immutable/chunks/stores.BKymiSGh.js","_app/immutable/chunks/render.DsEvvzMo.js","_app/immutable/chunks/if.BcA1w1KC.js","_app/immutable/chunks/each.C8Iuz-sy.js","_app/immutable/chunks/attributes.BbJLTpX4.js","_app/immutable/chunks/props.BauSasbF.js","_app/immutable/chunks/Icon.DaRuYvw8.js"];
export const stylesheets = [];
export const fonts = [];
