import { messages } from "@/lib/db";
import { deleteMessageAction } from "./actions";

// data lama
export default function MessagesPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold">Pesan Masuk</h1>

      <div className="mt-8 space-y-4">
        {messages.length === 0 ? (
          <p className="text-muted-foreground">Belum ada pesan masuk.</p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="rounded-lg border p-4">
              <p className="font-medium">{msg.name} — {msg.email}</p>
              <p className="mt-1 text-sm text-muted-foreground">{msg.message}</p>

            {/* penambahan tombol delete */}
            <form action={deleteMessageAction.bind(null, msg.id)}>
              <button type="submit" className="mt-2 px-3 py-1 bg-red-500 text-white rounded text-sm">
                Hapus
              </button>
            </form>

            </div>
          ))
        )}
      </div>
    </section>
  );
}