import { e as error } from "../../../../chunks/index2.js";
import { a as autores } from "../../../../chunks/autores.js";
function load(dados) {
  const autorId = dados.params.id;
  for (let autor of autores) {
    if (autor.id == autorId) {
      return { autor };
    }
  }
  error(404, "Autor não encontrado");
}
export {
  load
};
