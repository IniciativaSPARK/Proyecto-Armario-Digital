import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        {
          connected: false,
          message: "Faltan variables de entorno de Supabase.",
          hasUrl: Boolean(supabaseUrl),
          hasKey: Boolean(supabaseKey),
        },
        { status: 500 }
      );
    }

    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .limit(5);

    if (error) {
      return NextResponse.json(
        {
          connected: false,
          message: "Supabase respondió con error.",
          error: error.message,
          supabaseUrl,
          hasKey: Boolean(supabaseKey),
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      connected: true,
      message: "Conexión con Supabase correcta.",
      supabaseUrl,
      hasKey: Boolean(supabaseKey),
      data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        connected: false,
        message: "Error inesperado al conectar con Supabase.",
        error: error instanceof Error ? error.message : "Error desconocido",
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasKey: Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
      },
      { status: 500 }
    );
  }
}