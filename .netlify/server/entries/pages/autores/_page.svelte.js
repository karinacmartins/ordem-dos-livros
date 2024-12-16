import { Y as fallback, $ as attr, a2 as stringify, Z as escape_html, _ as bind_props, T as pop, R as push, a3 as ensure_array_like } from "../../../chunks/index.js";
import { a as autores } from "../../../chunks/autores.js";
function ItemAutor($$payload, $$props) {
  push();
  let autor = fallback($$props["autor"], null);
  if (autor) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", `/autores/${stringify(autor.id)}`)} class="flex flex-col rounded-md relative overflow-hidden border border-zinc-800"><img${attr("src", autor.imagem)} alt="Foto do Autor" class="h-96 object-cover"> <div class="absolute bottom-0 w-full flex justify-end px-6 py-4 bg-black/50"><span class="text-2xl font-black">${escape_html(autor.nome)}</span></div></a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { autor });
  pop();
}
function Titulo($$payload, $$props) {
  let principal = fallback($$props["principal"], "");
  let secundario = fallback($$props["secundario"], "");
  $$payload.out += `<div class="flex flex-col"><h1 class="text-3xl font-black">${escape_html(principal)}</h1> <p class="text-sm text-zinc-400">${escape_html(secundario)}</p></div>`;
  bind_props($$props, { principal, secundario });
}
function _page($$payload) {
  const each_array = ensure_array_like(autores);
  $$payload.out += `<div class="flex flex-col gap-5">`;
  Titulo($$payload, {
    principal: "Autores",
    secundario: "Conheça os autores que escrevem as histórias que você ama"
  });
  $$payload.out += `<!----> <div class="grid grid-cols-2 gap-5"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let autor = each_array[$$index];
    ItemAutor($$payload, { autor });
  }
  $$payload.out += `<!--]--></div></div>`;
}
export {
  _page as default
};
