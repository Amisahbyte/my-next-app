"use server";

import { revalidatePath } from "next/cache";
import { messages } from "@/lib/db";

export async function deleteMessageAction(id) {
  // Cari posisi pesan yang mau dihapus
  const index = messages.findIndex((m) => m.id === id);
  
  // Kalau ketemu, hapus dari daftar
  if (index !== -1) {
    messages.splice(index, 1);
  }

  // Perbarui halaman otomatis
  revalidatePath("/messages");
}