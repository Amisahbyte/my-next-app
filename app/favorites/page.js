"use client";

import { useFavorite } from "@/context/FavoriteContext";
import UserCard from "@/components/UserCard";

export default function FavoritesPage() {
  const { favorites } = useFavorite();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Favorite</p>
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl mt-1 text-white">My Favorite Users</h1>
      <p className="text-sm text-muted-foreground mt-2">Data ini diambil langsung dari FavoriteContext.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {favorites.length === 0 ? (
          <p className="text-muted-foreground">Belum ada user yang ditambahkan ke favorite.</p>
        ) : (
          favorites.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
}