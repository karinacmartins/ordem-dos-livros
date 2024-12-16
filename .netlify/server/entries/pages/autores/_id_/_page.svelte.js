import { Y as fallback, $ as attr, _ as bind_props, T as pop, R as push, a0 as store_get, a1 as unsubscribe_stores } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import { marked } from "marked";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function ConteudoAutor($$payload, $$props) {
  push();
  let autor = fallback($$props["autor"], null);
  if (autor) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex flex-col gap-5"><img${attr("src", autor.imagem)} alt="Foto do Autor" class="h-96 object-cover rounded-md"> <article class="prose lg:prose-xl prose-invert">${html(marked.parse(autor.biografia))}</article></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { autor });
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  ConteudoAutor($$payload, {
    autor: store_get($$store_subs ??= {}, "$page", page).data.autor
  });
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
