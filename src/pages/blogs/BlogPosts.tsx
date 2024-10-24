import React from "react";

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}

interface BlogPostsProps {
  blogs: BlogPost[];
}

const BlogPosts: React.FC<BlogPostsProps> = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full rounded-md mb-4 transition-transform duration-300 hover:scale-105"
          />
          <h1 className="text-3xl font-fira-code font-bold mb-4 text-gray-100">
            {blog.title}
          </h1>
          <p className="text-gray-400 font-mono mb-6">
            {blog.category} / {blog.author}
          </p>
          <p className="text-gray-300 font-mono mb-4">{blog.excerpt}</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-black rounded-md font-mono transition-colors duration-300 hover:bg-green-600 focus:outline-none">
            Read More »
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
