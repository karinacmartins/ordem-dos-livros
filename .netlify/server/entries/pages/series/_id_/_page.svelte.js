import { V as spread_props, W as slot, X as sanitize_props, Y as fallback, $ as attr, Z as escape_html, _ as bind_props, T as pop, R as push, a3 as ensure_array_like, a2 as stringify, a0 as store_get, a1 as unsubscribe_stores } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import { I as Icon } from "../../../../chunks/Icon.js";
function Brand_amazon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M17 12.5a15.198 15.198 0 0 1 -7.37 1.44a14.62 14.62 0 0 1 -6.63 -2.94"
      }
    ],
    [
      "path",
      {
        "d": "M19.5 15c.907 -1.411 1.451 -3.323 1.5 -5c-1.197 -.773 -2.577 -.935 -4 -1"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { type: "outline", name: "brand-amazon" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function ItemLivro($$payload, $$props) {
  push();
  let livro = fallback($$props["livro"], null);
  if (livro) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", livro.link)} target="_blank" class="flex flex-col rounded-md overflow-hidden bg-zinc-800"><img${attr("src", livro.imagem)} alt="Imagem do Livro" class="h-96"> <div class="flex-1 flex flex-col p-5 gap-2"><span class="flex-1 font-bold text-center">${escape_html(livro.titulo)}</span> <button class="botao azul">`;
    Brand_amazon($$payload, { size: 25 });
    $$payload.out += `<!----> <span>Link do Livro</span></button></div></a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { livro });
  pop();
}
function ConteudoSerie($$payload, $$props) {
  push();
  let serie = fallback($$props["serie"], null);
  if (serie) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(serie.livros);
    $$payload.out += `<div class="flex flex-col gap-5"><h1 class="text-3xl font-black">${escape_html(serie.titulo)}</h1> <a${attr("href", `/autores/${stringify(serie.autor.id)}`)} class="text-sm text-zinc-400 -mt-4">${escape_html(serie.autor.nome)}</a> <img${attr("src", serie.imagem)} alt="Imagem da Série" class="h-96 object-cover"> <p class="text-lg text-zinc-400 text-justify">${escape_html(serie.descricao)}</p> <h2>Lista de Livros</h2> <div class="grid grid-cols-3 gap-5"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let livro = each_array[$$index];
      ItemLivro($$payload, { livro });
    }
    $$payload.out += `<!--]--></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { serie });
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  ConteudoSerie($$payload, {
    serie: store_get($$store_subs ??= {}, "$page", page).data.serie
  });
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
