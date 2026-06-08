import {
  categoriasMock,
  temporadasMock,
} from "@/data/catalogoMock";

import {
  Categoria,
  Temporada,
} from "@/types/catalogo";

export const catalogoService = {
  async obtenerCategorias(): Promise<Categoria[]> {

    // FUTURA API

    /*
    const response = await fetch(
      "https://api.tulook.com/categorias"
    );

    if (!response.ok) {
      throw new Error("Error obteniendo categorias");
    }

    return response.json();
    */

    return Promise.resolve(categoriasMock);
  },

  async obtenerTemporadas(): Promise<Temporada[]> {

    // FUTURA API

    /*
    const response = await fetch(
      "https://api.tulook.com/temporadas"
    );

    if (!response.ok) {
      throw new Error("Error obteniendo temporadas");
    }

    return response.json();
    */

    return Promise.resolve(temporadasMock);
  },
};