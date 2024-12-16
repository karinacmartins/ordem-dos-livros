import { e as error } from "../../../../chunks/index2.js";
import { s as series } from "../../../../chunks/series.js";
function load(dados) {
  const serieId = dados.params.id;
  for (let serie of series) {
    if (serie.id == serieId) {
      return { serie };
    }
  }
  error(404, "Série não encontrada");
}
export {
  load
};
