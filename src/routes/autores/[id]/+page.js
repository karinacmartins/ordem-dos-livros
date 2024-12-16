import { error } from "@sveltejs/kit";
import autores from "../../../constants/autores.js";

export function load(dados) {
  const autorId = dados.params.id;

  for (let autor of autores) {
    if (autor.id == autorId) {
      return { autor };
    }
  }

  error(404, "Autor não encontrado");
}
