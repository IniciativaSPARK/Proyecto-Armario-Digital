import {
  usuarioMock,
  opcionesMenuMock,
} from "@/data/perfilMock";

import {
  Usuario,
  OpcionMenu,
} from "@/types/perfil";

export const perfilService = {

  async obtenerUsuario(): Promise<Usuario> {

    // FUTURA API

    /*
    const response = await fetch(
      "https://api.tulook.com/usuario"
    );

    if (!response.ok) {
      throw new Error("Error obteniendo usuario");
    }

    return response.json();
    */

    return Promise.resolve(usuarioMock);
  },

  async obtenerOpcionesMenu(): Promise<OpcionMenu[]> {

    return Promise.resolve(opcionesMenuMock);
  },
};