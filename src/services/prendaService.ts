import {
  prendasMock,
  categoriasMock,
} from "@/data/prendaMock";

import {
  Prenda,
  Categoria,
} from "@/types/prendas";

export const prendaService = {
  async obtenerPrendas(): Promise<Prenda[]> {

    // FUTURA API

    /*
    const response = await fetch(
      "https://api.midominio.com/prendas"
    );

    if (!response.ok) {
      throw new Error("Error obteniendo prendas");
    }

    return response.json();
    */

    return Promise.resolve(prendasMock);
  },

  async obtenerCategorias(): Promise<Categoria[]> {

    // FUTURA API

    /*
    const response = await fetch(
      "https://api.midominio.com/categorias"
    );

    if (!response.ok) {
      throw new Error("Error obteniendo categorías");
    }

    return response.json();
    */

    return Promise.resolve(categoriasMock);
  },
};