"use client";

import { FormEvent, useEffect, useState } from "react";
import { getCategories } from "@/services/categoriesService";
import { getFabrics } from "@/services/fabricsService";
import { createItem, deleteItem, getItems } from "@/services/itemsService";

type Option = {
  id: string;
  name: string;
};

type Item = {
  id: string;
  name: string;
  image_url?: string;
  color_hex?: string;
  min_temp?: number;
  max_temp?: number;
};

export default function TestCrudPage() {
  const [categories, setCategories] = useState<Option[]>([]);
  const [fabrics, setFabrics] = useState<Option[]>([]);
  const [items, setItems] = useState<Item[]>([]);

  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [fabricId, setFabricId] = useState("");
  const [colorHex, setColorHex] = useState("#000000");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    const [categoriesData, fabricsData, itemsData] = await Promise.all([
      getCategories(),
      getFabrics(),
      getItems(),
    ]);

    setCategories(categoriesData || []);
    setFabrics(fabricsData || []);
    setItems(itemsData || []);
  };

  useEffect(() => {
    loadData().catch((error) => {
      setMessage(error.message);
    });
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      setLoading(true);
      setMessage("Registrando prenda...");

      if (!imageFile) {
        throw new Error("Selecciona una imagen.");
      }

      await createItem({
        name,
        category_id: categoryId,
        fabric_id: fabricId || null,
        color_hex: colorHex,
        image_file: imageFile,
        min_temp: minTemp ? Number(minTemp) : null,
        max_temp: maxTemp ? Number(maxTemp) : null,
      });

      setName("");
      setCategoryId("");
      setFabricId("");
      setColorHex("#000000");
      setMinTemp("");
      setMaxTemp("");
      setImageFile(null);

      await loadData();

      setMessage("Prenda registrada correctamente.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Error desconocido.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const confirmDelete = confirm("¿Seguro que deseas eliminar esta prenda?");

      if (!confirmDelete) return;

      setMessage("Eliminando prenda...");

      await deleteItem(id);
      await loadData();

      setMessage("Prenda eliminada correctamente.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Error al eliminar.");
    }
  };

  const isErrorMessage =
    message.toLowerCase().includes("error") ||
    message.toLowerCase().includes("failed") ||
    message.toLowerCase().includes("no se");

  return (
    <main style={styles.page}>
      <section style={styles.container}>
        <header style={styles.header}>
          <div>
            <p style={styles.eyebrow}>Armario Digital</p>
            <h1 style={styles.title}>Prueba temporal de prendas</h1>
            <p style={styles.description}>
              Registra prendas con imagen, categoría, tela, color y rango de temperatura.
            </p>
          </div>
        </header>

        {message && (
          <div
            style={{
              ...styles.alert,
              ...(isErrorMessage ? styles.alertError : styles.alertSuccess),
            }}
          >
            {message}
          </div>
        )}

        <div style={styles.grid}>
          <form onSubmit={handleSubmit} style={styles.card}>
            <h2 style={styles.cardTitle}>Nueva prenda</h2>

            <div style={styles.field}>
              <label style={styles.label}>Nombre</label>
              <input
                style={styles.input}
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Ejemplo: Polo negro"
              />
            </div>

            <div style={styles.row}>
              <div style={styles.field}>
                <label style={styles.label}>Categoría</label>
                <select
                  style={styles.input}
                  value={categoryId}
                  onChange={(event) => setCategoryId(event.target.value)}
                >
                  <option value="">Seleccionar categoría</option>

                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div style={styles.field}>
                <label style={styles.label}>Tipo de tela</label>
                <select
                  style={styles.input}
                  value={fabricId}
                  onChange={(event) => setFabricId(event.target.value)}
                >
                  <option value="">Seleccionar tela</option>

                  {fabrics.map((fabric) => (
                    <option key={fabric.id} value={fabric.id}>
                      {fabric.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.field}>
                <label style={styles.label}>Color hexadecimal</label>
                <input
                  style={styles.input}
                  value={colorHex}
                  onChange={(event) => setColorHex(event.target.value)}
                  placeholder="#000000"
                />
              </div>

              <div style={styles.colorPreviewWrapper}>
                <span style={styles.label}>Vista del color</span>
                <div
                  style={{
                    ...styles.colorPreview,
                    backgroundColor: colorHex || "#000000",
                  }}
                />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.field}>
                <label style={styles.label}>Temperatura mínima</label>
                <input
                  style={styles.input}
                  type="number"
                  value={minTemp}
                  onChange={(event) => setMinTemp(event.target.value)}
                  placeholder="Ejemplo: 15"
                />
              </div>

              <div style={styles.field}>
                <label style={styles.label}>Temperatura máxima</label>
                <input
                  style={styles.input}
                  type="number"
                  value={maxTemp}
                  onChange={(event) => setMaxTemp(event.target.value)}
                  placeholder="Ejemplo: 28"
                />
              </div>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Imagen</label>
              <input
                style={styles.fileInput}
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files?.[0] || null;
                  setImageFile(file);
                }}
              />

              {imageFile && (
                <p style={styles.fileName}>Archivo seleccionado: {imageFile.name}</p>
              )}
            </div>

            <button style={styles.primaryButton} type="submit" disabled={loading}>
              {loading ? "Registrando..." : "Registrar prenda"}
            </button>
          </form>

          <section style={styles.card}>
            <div style={styles.listHeader}>
              <div>
                <h2 style={styles.cardTitle}>Prendas registradas</h2>
                <p style={styles.counter}>{items.length} prenda(s)</p>
              </div>

              <button style={styles.secondaryButton} onClick={loadData}>
                Actualizar
              </button>
            </div>

            {items.length === 0 ? (
              <div style={styles.emptyState}>
                <p style={styles.emptyTitle}>No hay prendas registradas</p>
                <p style={styles.emptyText}>
                  Cuando registres una prenda, aparecerá en esta sección.
                </p>
              </div>
            ) : (
              <div style={styles.itemsList}>
                {items.map((item) => (
                  <article key={item.id} style={styles.itemCard}>
                    <div style={styles.itemImageBox}>
                      {item.image_url ? (
                        <img
                          src={item.image_url}
                          alt={item.name}
                          style={styles.itemImage}
                        />
                      ) : (
                        <span style={styles.noImage}>Sin imagen</span>
                      )}
                    </div>

                    <div style={styles.itemContent}>
                      <h3 style={styles.itemName}>{item.name}</h3>

                      <div style={styles.itemMeta}>
                        {item.color_hex && (
                          <span style={styles.badge}>{item.color_hex}</span>
                        )}

                        {item.min_temp !== null &&
                          item.min_temp !== undefined &&
                          item.max_temp !== null &&
                          item.max_temp !== undefined && (
                            <span style={styles.badge}>
                              {item.min_temp}°C - {item.max_temp}°C
                            </span>
                          )}
                      </div>

                      <button
                        style={styles.deleteButton}
                        onClick={() => handleDelete(item.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #0f172a 0%, #111827 45%, #1e1b4b 100%)",
    color: "#e5e7eb",
    padding: "40px 20px",
    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  container: {
    maxWidth: "1180px",
    margin: "0 auto",
  },
  header: {
    marginBottom: "24px",
  },
  eyebrow: {
    margin: 0,
    color: "#38bdf8",
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  title: {
    margin: "8px 0",
    fontSize: "36px",
    lineHeight: 1.1,
    color: "#ffffff",
  },
  description: {
    margin: 0,
    color: "#cbd5e1",
    fontSize: "16px",
  },
  alert: {
    padding: "14px 16px",
    borderRadius: "14px",
    marginBottom: "20px",
    fontWeight: 600,
    border: "1px solid transparent",
  },
  alertSuccess: {
    backgroundColor: "rgba(34, 197, 94, 0.12)",
    color: "#bbf7d0",
    borderColor: "rgba(34, 197, 94, 0.35)",
  },
  alertError: {
    backgroundColor: "rgba(239, 68, 68, 0.12)",
    color: "#fecaca",
    borderColor: "rgba(239, 68, 68, 0.35)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "minmax(320px, 440px) 1fr",
    gap: "24px",
    alignItems: "start",
  },
  card: {
    backgroundColor: "rgba(15, 23, 42, 0.88)",
    border: "1px solid rgba(148, 163, 184, 0.22)",
    borderRadius: "22px",
    padding: "24px",
    boxShadow: "0 24px 70px rgba(0, 0, 0, 0.35)",
    backdropFilter: "blur(10px)",
  },
  cardTitle: {
    margin: "0 0 18px",
    fontSize: "22px",
    color: "#ffffff",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginBottom: "16px",
    width: "100%",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
  },
  label: {
    fontSize: "14px",
    color: "#cbd5e1",
    fontWeight: 600,
  },
  input: {
    width: "100%",
    height: "44px",
    borderRadius: "12px",
    border: "1px solid rgba(148, 163, 184, 0.35)",
    backgroundColor: "#020617",
    color: "#f8fafc",
    padding: "0 12px",
    outline: "none",
    fontSize: "14px",
  },
  fileInput: {
    borderRadius: "12px",
    border: "1px dashed rgba(148, 163, 184, 0.45)",
    backgroundColor: "#020617",
    color: "#cbd5e1",
    padding: "12px",
    fontSize: "14px",
  },
  fileName: {
    margin: "4px 0 0",
    color: "#93c5fd",
    fontSize: "13px",
  },
  colorPreviewWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginBottom: "16px",
  },
  colorPreview: {
    height: "44px",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  primaryButton: {
    width: "100%",
    height: "48px",
    border: "none",
    borderRadius: "14px",
    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
    color: "#ffffff",
    fontWeight: 800,
    cursor: "pointer",
    fontSize: "15px",
    marginTop: "6px",
  },
  secondaryButton: {
    border: "1px solid rgba(148, 163, 184, 0.35)",
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    color: "#e5e7eb",
    borderRadius: "12px",
    padding: "10px 14px",
    cursor: "pointer",
    fontWeight: 700,
  },
  listHeader: {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    alignItems: "center",
    marginBottom: "16px",
  },
  counter: {
    margin: "-10px 0 0",
    color: "#94a3b8",
    fontSize: "14px",
  },
  emptyState: {
    border: "1px dashed rgba(148, 163, 184, 0.35)",
    borderRadius: "16px",
    padding: "28px",
    textAlign: "center",
    color: "#94a3b8",
  },
  emptyTitle: {
    margin: 0,
    color: "#e2e8f0",
    fontWeight: 800,
  },
  emptyText: {
    margin: "8px 0 0",
    fontSize: "14px",
  },
  itemsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "16px",
  },
  itemCard: {
    overflow: "hidden",
    borderRadius: "18px",
    backgroundColor: "#020617",
    border: "1px solid rgba(148, 163, 184, 0.2)",
  },
  itemImageBox: {
    width: "100%",
    height: "160px",
    backgroundColor: "#111827",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  itemImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  noImage: {
    color: "#64748b",
    fontSize: "14px",
  },
  itemContent: {
    padding: "14px",
  },
  itemName: {
    margin: "0 0 10px",
    fontSize: "17px",
    color: "#ffffff",
  },
  itemMeta: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "14px",
  },
  badge: {
    backgroundColor: "rgba(59, 130, 246, 0.14)",
    color: "#bfdbfe",
    border: "1px solid rgba(59, 130, 246, 0.3)",
    borderRadius: "999px",
    padding: "5px 9px",
    fontSize: "12px",
    fontWeight: 700,
  },
  deleteButton: {
    width: "100%",
    height: "38px",
    border: "1px solid rgba(248, 113, 113, 0.35)",
    backgroundColor: "rgba(127, 29, 29, 0.35)",
    color: "#fecaca",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: 700,
  },
};