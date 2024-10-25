import React from "react";
import Sidebar from "./Sidebar";
import BlogPosts from "./BlogPosts";
import { BlogPost } from "./BlogPosts";

// Dummy data for blog posts
const blogData: BlogPost[] = [
  {
    id: 1,
    title:
      "The potential impact of blockchain on the future of digital identity and privacy",
    author: "Alex",
    category: "Blockchain Applications, Introduction to Blockchain",
    date: "January 2023",
    excerpt:
      "Suscipit gravida sem, eget tincidunt ligula. Vivamus faucibus vulputate magna ac aliquam. Pellentesque pulvinar tincidunt tortor, sed finibus velit consequat scelerisque.",
    image: "bitcoin-image-url",
  },
  {
    id: 2,
    title: "The scalability concerns facing blockchain technology",
    author: "Sam",
    category: "Blockchain Scalability",
    date: "February 2023",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus lorem id eros scelerisque, sit amet congue sapien imperdiet.",
    image: "scalability-image-url",
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row">
          {/* BlogPosts Component */}
          <div className="md:w-2/3">
            <BlogPosts blogs={blogData} />
          </div>
          {/* Sidebar Component */}
          <div className="md:w-1/3 md:ml-8 mt-10 md:mt-0">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
