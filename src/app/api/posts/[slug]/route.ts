import { NextResponse } from "next/server";
import { posts } from "../data";

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  return NextResponse.json(post);
}