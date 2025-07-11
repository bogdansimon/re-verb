import { getAllPosts } from "@/api/sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-16">
      {posts.map((post) => (
        <article key={post._id} className="space-y-4">
          <h2 className="text-3xl font-bold">{post.title}</h2>
          <p className="text-sm text-gray-500">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>

          {post?.image?.asset?.url && (
            <Image
              src={post.image.asset.url}
              alt={post?.image?.alt || post.title}
              className="rounded-lg"
              width={1200}
              height={600}
              style={{ objectFit: "cover" }}
            />
          )}

          <div className="prose prose-neutral max-w-none">
            <PortableText value={post.body} />
          </div>
        </article>
      ))}
    </div>
  );
}
