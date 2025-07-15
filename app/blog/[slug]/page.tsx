"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { blogPosts } from "@/app/utils/blogData";
import { marked } from "marked";
import blogPostAnimation from "@/app/utils/blogPostAnimations";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    if (mq.matches) {
      // Desktop animations with motion effects
      blogPostAnimation.blogPostHeaderAnimation();
      blogPostAnimation.blogPostImageAnimation();
      blogPostAnimation.blogPostContentAnimation();
    } else {
      // Mobile animations with simpler effects
      blogPostAnimation.mobileAnimation();
    }
  }, []);

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-8">Blog post not found</h1>
        <Button as={Link} href="/blog" color="default" className="bg-gray-600 text-white">
          Back to Blog
        </Button>
      </div>
    );
  }

  // Parse markdown content
  const contentHtml = marked.parse(post.content);

  return (
    <div className="container mx-auto px-6 py-8">
      <Button as={Link} href="/blog" color="default" className="mb-6 bg-gray-600 text-white opacity-0 blog-post-header blog-post-mobile-animation">
        Back to Blog
      </Button>
      
      <Card className="mb-8">
        <CardBody className="p-0">
          <div className="relative w-full h-64 lg:h-96 opacity-0 blog-post-image blog-post-mobile-animation">
            <Image 
              src={post.coverImage} 
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </CardBody>
      </Card>
      
      <div className="text-sm text-gray-400 mb-2 opacity-0 blog-post-header blog-post-mobile-animation">{post.date}</div>
      <h1 className="text-4xl font-bold mb-8 opacity-0 blog-post-header blog-post-mobile-animation">{post.title}</h1>
      
      <div 
        className="blog-content opacity-0 prose prose-invert lg:prose-xl max-w-none blog-post-mobile-animation"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}
