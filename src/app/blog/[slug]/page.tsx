import { notFound } from "next/navigation";
import { posts } from "../../api/posts/data";
import SingleBlogClient from "./SingleBlogClient";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  [key: string]: any;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post: BlogPost | undefined = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen">
      <SingleBlogClient post={post} />
    </main>
  );
}