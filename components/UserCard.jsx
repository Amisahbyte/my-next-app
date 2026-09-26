import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useFavorite } from "@/context/FavoriteContext";

export default function UserCard({ user }) {
  const { toggleFavorite, isFavorite } = useFavorite();
  const liked = isFavorite(user.id);

  return (
    <Card className={"bg-[#384a64]"}>
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-[#FFFFFF]">
          {user.email}
        </p>

        <p className="mt-1 text-sm text-[#FFFFFF]">
          {user.company.name}
        </p>

        {/* [DITAMBAHKAN]: Menggunakan container flex agar tombol View Profile dan Favorite berdampingan rapi */}
        <div className="mt-4 flex items-center gap-3">
          <Button className="bg-[#0cf5d6]">
            View Profile
          </Button>

          {/* [DITAMBAHKAN]: Tombol Favorite interaktif dengan kondisi klik */}
          <Button
            onClick={() => toggleFavorite(user)}
            className={
              liked
                ? "bg-white text-black hover:bg-white/90"
                : "bg-transparent border border-white/20 text-white hover:bg-white/10"
            }
          >
            {liked ? <span className="text-red-500 text-xl">♥</span> : <span className="text-white text-lg">♡</span>} {liked ?
            "Favourite" : "Add Favourite"}
          </Button>
        </div>
        
      </CardContent>
    </Card>
  );
}