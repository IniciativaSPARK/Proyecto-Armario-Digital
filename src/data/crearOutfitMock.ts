import {
  CategoriaPrenda,
  Prenda,
  Temporada,
} from "@/types/crearOutfit";

export const temporadasMock: Temporada[] = [
  { id: 1, nombre: "Verano" },
  { id: 2, nombre: "Otoño" },
  { id: 3, nombre: "Invierno" },
  { id: 4, nombre: "Primavera" },
];

export const categoriasMock: CategoriaPrenda[] = [
  {
    id: 1,
    nombre: "Accesorios para la cabeza",
  },
  {
    id: 2,
    nombre: "Ropa exterior",
  },
  {
    id: 3,
    nombre: "Prendas superiores",
  },
  {
    id: 4,
    nombre: "Prendas inferiores",
  },
  {
    id: 5,
    nombre: "Calzado",
  },
];

export const prendasMock: Prenda[] = [
  {
    id: 1,
    nombre: "Sombrero",
    imagen: "/sombrero.png",
    categoriaId: 1,
  },
  {
    id: 2,
    nombre: "Casaca",
    imagen: "/casaca.png",
    categoriaId: 2,
  },
  {
    id: 3,
    nombre: "Polo",
    imagen: "/polo.png",
    categoriaId: 3,
  },
  {
    id: 4,
    nombre: "Short",
    imagen: "/short.png",
    categoriaId: 4,
  },
  {
    id: 5,
    nombre: "Botas",
    imagen: "/botas.png",
    categoriaId: 5,
  },
];