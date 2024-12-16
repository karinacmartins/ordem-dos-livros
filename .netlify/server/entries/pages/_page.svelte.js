import { Y as fallback, $ as attr, a2 as stringify, Z as escape_html, _ as bind_props, T as pop, R as push, a3 as ensure_array_like } from "../../chunks/index.js";
import { s as series } from "../../chunks/series.js";
function ItemSerie($$payload, $$props) {
  push();
  let serie = fallback($$props["serie"], null);
  if (serie) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", `/series/${stringify(serie.id)}`)} class="flex flex-col rounded-md overflow-hidden border border-zinc-800"><img${attr("src", serie.imagem)} alt="Imagem da Serie" class="h-96 object-cover"> <div class="flex flex-col gap-2 p-5"><span class="text-2xl font-black">${escape_html(serie.titulo)}</span> <span class="text-sm text-zinc-400 text-justify">${escape_html(serie.descricao)}</span> <button class="botao azul self-end">Leia Mais</button></div></a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { serie });
  pop();
}
function _page($$payload) {
  const each_array = ensure_array_like(series);
  $$payload.out += `<div class="flex flex-col gap-5"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let serie = each_array[$$index];
    ItemSerie($$payload, { serie });
  }
  $$payload.out += `<!--]--></div>`;
}
export {
  _page as default
};
