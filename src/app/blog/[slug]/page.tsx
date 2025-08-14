

import { notFound } from "next/navigation";
import useLocalStorage from "../../components/theme/useLocalStorage";
import SingleBlogScreen from "../../Screens/SingleBlogScreen";
import { posts } from "../../api/posts/data"; // import your data directly to avoid fetch during build

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    [key: string]: any;
}

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

const post: BlogPost | undefined = posts.find((p: BlogPost) => p.slug === params.slug);

  if (!post) notFound();
  return (
    <main className="h-screen">
      <SingleBlogScreen post={post}  />
    </main>
  );
}