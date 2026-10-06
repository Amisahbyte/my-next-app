const profile = {
  name: "Amisah",
  role: "peserta bootcamp",
  favoriteTech: ["Next.js", "Vs Code", "React", "Tailwind CSS"],
};

export async function GET() {
  return Response.json(profile);
}