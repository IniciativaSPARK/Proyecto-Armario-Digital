"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getItems } from "@/services/itemsService";
import { getCategories } from "@/services/categoriesService";
import { getFabrics } from "@/services/fabricsService";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log("ITEMS:", await getItems());
        console.log("CATEGORIES:", await getCategories());
        console.log("FABRICS:", await getFabrics());
      } catch (error) {
        console.error(error);
      }
      router.push("/inicioSesion");
    };

    loadData();
  }, [router]);

  return (
    <main className="p-8">
      <h1>Armario Digital</h1>
      <p>Probando conexión con Supabase...</p>
    </main>
  );
}