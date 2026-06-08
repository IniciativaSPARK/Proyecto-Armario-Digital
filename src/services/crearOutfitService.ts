import {
  categoriasMock,
  prendasMock,
  temporadasMock,
} from "@/data/crearOutfitMock";

export const crearOutfitService = {

  async obtenerPrendas() {

    /*
    const response = await fetch(
      "https://api.tulook.com/prendas"
    );

    return response.json();
    */

    return Promise.resolve(prendasMock);
  },

  async obtenerCategorias() {

    /*
    const response = await fetch(
      "https://api.tulook.com/categorias"
    );

    return response.json();
    */

    return Promise.resolve(categoriasMock);
  },

  async obtenerTemporadas() {

    /*
    const response = await fetch(
      "https://api.tulook.com/temporadas"
    );

    return response.json();
    */

    return Promise.resolve(temporadasMock);
  },
};