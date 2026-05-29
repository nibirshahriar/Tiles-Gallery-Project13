import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function proxy(request) {
  const session = await authClient.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/all-tiles/:id"],
};
