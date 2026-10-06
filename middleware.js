// Latihan 1. Logger
import { NextResponse } from "next/server";

export function middleware(request) {
  const waktu = new Date().toISOString();
  console.log(`[${waktu}] ${request.method} ${request.nextUrl.pathname}`);

  return NextResponse.next(); // lanjutkan request seperti biasa
}

export const config = {
  matcher: ["/api/:path*"], // middleware ini cuma jalan untuk request ke /api/...
};


// -------------------------------------------------------------------------------------//


