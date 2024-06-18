import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Mock detailed blog data
const blogDetails = {
  '1': {
    title: 'Blog Post 1',
    date: '15 March, 2024',
    content: `
      <p>As our pets age, they become an increasingly important part of our lives...</p>
      <h3 className="text-xl font-bold mb-2">Table of Contents:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Understanding the aging process in pets</li>
        <li>When is a pet considered a senior?</li>
        <li>What to expect during a vet visit for senior pets</li>
        <li>5 key benefits of regular vet visits for older pets</li>
        <li>How often should older pets see the vet?</li>
        <li>The role of pet insurance in senior pet care</li>
        <li>Key Takeaways</li>
      </ul>
      <h3 className="text-xl font-bold mb-2">Understanding the Aging Process in Pets</h3>
      <p>Before delving into the specifics of geriatric veterinary care, it’s essential to understand when a pet is considered a ‘senior’ and the typical changes you may observe as your pet matures.</p>
      <!-- Add more content as needed -->
    `,
    tags: ['BREEDING', 'PET CARE', 'PETS']
  },
  '2': {
    title: 'Blog Post 2',
    date: '16 March, 2024',
    content: '<p>Content for Blog Post 2...</p>',
    tags: ['HEALTH', 'WELLNESS', 'LIFESTYLE']
  },
  '3': {
    title: 'Blog Post 3',
    date: '17 March, 2024',
    content: '<p>Content for Blog Post 3...</p>',
    tags: ['TECH', 'GADGETS', 'REVIEWS']
  },
  '4': {
    title: 'Blog Post 4',
    date: '18 March, 2024',
    content: '<p>Content for Blog Post 4...</p>',
    tags: ['TRAVEL', 'ADVENTURE', 'PHOTOGRAPHY']
  },
};

const ParticularBlog = () => {
  const { id } = useParams();
  const blog = blogDetails[id];

  if (!blog) {
    return <div className="max-w-4xl mx-auto py-8 px-4">Blog post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Blogs | {blog.date}</h1>
      <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      <div className="flex flex-wrap">
        {blog.tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-8">
        <Link to="/" className="text-blue-500 hover:underline">Back to Blogs</Link>
      </div>
    </div>
  );
};

export default ParticularBlog;
