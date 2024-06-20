import React from 'react';
import { Link } from 'react-router-dom';
import B1 from '../assets/Blog/B1.jpg'
import B2 from '../assets/Blog/B2.webp'

// Mock blog data
const blogs = [
  {
    id: 1,
    title: `Debunking Myths: Indie Dogs Welcome at Scoob's House! All breeds and sizes are embraced in our loving haven.`,
    excerpt: 'This is a short summary of blog post 1.',
    imageUrl: B1,
  },
  {
    id: 2,
    title: "Ensuring Your Dog's Health: Importance of Vaccination, Deworming, and Tick & Flea Medication Before Boarding",
    excerpt: 'This is a short summary of blog post 2.',
    imageUrl:B2,
  },
];

const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-5xl text-orange-500 font-bold text-center mb-8">Category: Blogs</h1>
      <div className='flex flex-row justify-center items-center'>
        <Link to="/" className="text-lg text-orange-500 text-center">Home</Link>
        <div className="ml-4">
          The Importance Of Regular Vet Visits For Senior Pets
        </div> 
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 gap-8">
        {blogs.map((blog) => (
          <Link key={blog.id} to={`/blogs/${blog.id}`} className="block">
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-700">{blog.excerpt}</p>
                <button className='border-lime-200'>
                  <span className="text-blue-500 hover:underline mt-2 inline-block">Read More</span>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
