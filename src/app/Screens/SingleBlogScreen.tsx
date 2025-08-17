"use client";
import React from "react";

interface SingleBlogScreenProps {
  post: any;
  theme?: string;
}

export default function SingleBlogScreen({ post, theme }: SingleBlogScreenProps) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>
      <small>Theme: {theme}</small>
    </div>
  );
}4