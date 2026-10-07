import { favorites } from "@/lib/db";

// 1. Tambahkan method PATCH di sini untuk mengubah data (misalnya: menambah/mengubah note)
export async function PATCH(request, { params }) {
  const { id } = await params;
  const body = await request.json();
  const { note } = body;

  const index = favorites.findIndex((f) => String(f.id) === id);

  if (index === -1) {
    return Response.json({ error: "Data tidak ditemukan" }, { status: 404 });
  }

  // Memperbarui field note pada data favorite yang ditemukan
  favorites[index].note = note !== undefined ? note : favorites[index].note;

  return Response.json({
    message: "Berhasil memperbarui catatan favorite",
    data: favorites[index],
  });
}



// Yang sudah ada seBelumnya, jaangan diubah
// export async function DELETE(request, { params }) {
//   const { id } = await params;
//   const index = favorites.findIndex((f) => String(f.id) === id);

//   if (index === -1) {
//     return Response.json({ error: "Data tidak ditemukan" }, { status: 404 });
//   }

//   favorites.splice(index, 1);
//   return Response.json({ message: "Berhasil dihapus" });
// }


import { removeFavorite } from "@/lib/services/favoriteService";

export async function DELETE(request, { params }) {
  const { id } = await params;
  const numId = Number(id);
  const result = removeFavorite(numId);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ message: "Berhasil dihapus" });
}
