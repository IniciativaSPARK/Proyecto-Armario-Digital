import {
  Usuario,
  OpcionMenu,
} from "@/types/perfil";

export const usuarioMock: Usuario = {
  id: 1,
  nombre: "Usuario",
  correo: "valerygamboa@gmail.com",
  imagen: "/usuario-logo.png",
};

export const opcionesMenuMock: OpcionMenu[] = [
  {
    id: 1,
    titulo: "Editar perfil",
    icono: "/usuario-logo.png",
  },
  {
    id: 2,
    titulo: "Configuración",
    icono: "/icono-configuracion.png",
  },
  {
    id: 3,
    titulo: "Favoritos",
    icono: "/icono-favorito-activo-decorativo.png",
  },
  {
    id: 4,
    titulo: "Notificaciones",
    icono: "/icono-notificaciones.png",
  },
  {
    id: 5,
    titulo: "Ayuda y soporte",
    icono: "/icono-ayuda.png",
  },
];