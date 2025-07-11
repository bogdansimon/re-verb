import { groq, PortableTextBlock } from "next-sanity";
import { sanityClient } from "@/config";

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  image?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  body: PortableTextBlock[];
}

const postFields = `
  _id,
  title,
  slug,
  publishedAt,
  image {
    asset->{
      url
    },
    alt
  },
  body
`;

export async function getAllPosts(): Promise<Post[]> {
  return sanityClient.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      ${postFields}
    }`
  );
}
