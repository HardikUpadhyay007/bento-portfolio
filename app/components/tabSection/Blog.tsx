"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { blogPosts } from "@/app/utils/blogData";
import { BlogPost } from "@/app/types";
import blogAnimation from "../../utils/blogSectionAnimations";

export const Blog = () => {
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    if (mq.matches) {
      // Desktop animations with motion effects
      blogAnimation.blogCardsAnimation();
    } else {
      // Mobile animations with simpler effects
      blogAnimation.mobileAnimation();
    }
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden bg-black">
      {blogPosts.map((post: BlogPost) => (
        <Card 
          key={post.id} 
          className="blog-card opacity-0 blog-mobile-animation"
          isPressable
          as={Link}
          href={`/blog/${post.slug}`}
        >
          <CardBody className="p-0">
            <div className="relative w-full h-48">
              <Image 
                src={post.coverImage} 
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </CardBody>
          <CardFooter className="flex flex-col items-start">
            <div className="text-sm text-gray-400 mb-2">{post.date}</div>
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-400 line-clamp-3">{post.excerpt}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
