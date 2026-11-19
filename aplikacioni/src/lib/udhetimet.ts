import "server-only";
import { getSql } from "./db";

export type Udhetim = {
  id: string;
  nisja: string;
  destinacioni: string;
  ora: string;
  vendtakimi: string;
  vende: number;
  ora_e_meparshme?: string | null;
  shoferi?: string | null;
}

const udhetimetDemo: Udhetim[] = [
  {
    id: "1",
    nisja: "Prishtinë",
    destinacioni: "AAB",
    ora: "08:00",
    vendtakimi: "Stacioni i autobusëve",
    vende: 2,
  },
  {
    id: "2",
    nisja: "Fushë Kosovë",
    destinacioni: "AAB",
    ora: "08:15",
    vendtakimi: "Te stacioni kryesor",
    vende: 1,
  },
  {
    id: "3",
    nisja: "Lipjan",
    destinacioni: "AAB",
    ora: "07:45",
    vendtakimi: "Qendra e qytetit",
    vende: 0,
  },
];

export async function lexoUdhetimet(): Promise<Udhetim[]> {
  if (!process.env.DATABASE_URL) return udhetimetDemo;

  const sql = getSql();
  const rows = await sql`
    SELECT id, nisja, destinacioni, ora, vendtakimi, vende
    FROM udhetimet
    ORDER BY id
  `;
  return rows as Udhetim[];
}

export async function gjejUdhetimin(id: string): Promise<Udhetim | undefined> {
  if (!process.env.DATABASE_URL) {
    return udhetimetDemo.find((udhetim) => udhetim.id === id);
  }

  const sql = getSql();
  const rows = await sql`
    SELECT id, nisja, destinacioni, ora, vendtakimi, vende
    FROM udhetimet
    WHERE id = ${id}
  `;
  return rows[0] as Udhetim | undefined;
}
