import { outfitsMock } from "@/data/outfitsMock";
import { Outfit } from "@/types/outfit";

export const outfitService = {
  async getOutfits(): Promise<Outfit[]> {

    // FUTURA INTEGRACIÓN API

    /*
    const response = await fetch(
      "https://api.tudominio.com/outfits"
    );

    if (!response.ok) {
      throw new Error("Error obteniendo outfits");
    }

    return response.json();
    */

    return Promise.resolve(outfitsMock);
  },
};