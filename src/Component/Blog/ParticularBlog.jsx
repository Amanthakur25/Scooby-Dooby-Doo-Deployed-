import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Mock detailed blog data
const blogDetails = {
  1: {
    title: 'Debunking Myths: Indie Dogs Are Welcome at Scoob’s House!',
    date: '15 March, 2024',
    content: `
      <p>At Scoob’s House, we believe every dog deserves love, care, and a welcoming environment. One of the common myths we want to debunk today is the idea that indie dogs, or street dogs, aren't suitable for boarding or aren't as friendly as other breeds. Let's set the record straight: indie dogs are just as wonderful, loving, and deserving of a great boarding experience as any other dog breed.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">What Are Indie Dogs?</h3>
      <p>Indie dogs, often known as Indian street dogs or pariah dogs, are native to various regions and are typically found living on the streets. They are known for their resilience, intelligence, and adaptability. Despite their tough beginnings, indie dogs can be incredibly affectionate and loyal companions.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Myths and Facts About Indie Dogs</h3>
      <h4 class="text-xl font-bold mb-2">Myth 1: Indie Dogs Are Not Social</h4>
      <p>Fact: Indie dogs, like all dogs, thrive on social interaction. They are often very social and can get along well with other dogs and humans when given the right environment and socialisation opportunities.</p>
      <h4 class="text-xl font-bold mb-2">Myth 2: Indie Dogs Are Aggressive</h4>
      <p>Fact: Aggression in dogs is often a result of their environment and experiences, not their breed. Indie dogs are no more likely to be aggressive than any other breed. With proper training, care, and love, they can be as gentle and friendly as any dog.</p>
      <h4 class="text-xl font-bold mb-2">Myth 3: Indie Dogs Cannot Be Trained</h4>
      <p>Fact: Indie dogs are highly intelligent and can be trained just like any other dog. They are quick learners and can excel in obedience training and various dog sports.</p>
      <h4 class="text-xl font-bold mb-2">Myth 4: Indie Dogs Are Not Healthy</h4>
      <p>Fact: Indie dogs are often more robust and healthier than many purebred dogs due to their genetic diversity. They tend to have fewer inherited health issues and can live long, healthy lives with proper care.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Our Commitment to Inclusivity</h3>
      <p>At Scoob’s House, we do not discriminate based on breed or background. We welcome all dogs, including indie dogs, and ensure they receive the same level of care, attention, and love. Here's what we offer:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Safe and Comfortable Environment: Our cageless boarding ensures that every dog, regardless of breed, enjoys a stress-free stay.</li>
        <li>Individualised Care: We understand that each dog is unique and may have different needs. Our staff is trained to provide personalised care to ensure all dogs feel safe and happy.</li>
        <li>Socialisation Opportunities: We facilitate positive interactions between all dogs, fostering a community where indie dogs and other breeds can play and socialize together.</li>
        <li>Health and Wellness: We monitor the health and well-being of all our guests closely, providing nutritious meals and regular health checks.</li>
      </ul>
      <h3 class="text-2xl font-bold mt-8 mb-4">Success Stories</h3>
      <p>We have had the pleasure of boarding many indie dogs who have left a lasting impression on us and their fellow canine guests. Here are a few stories:</p>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Molly Transformation:</strong> Molly, an indie dog, came to us a bit shy and wary. With patience and gentle care, she quickly became one of the most playful and affectionate dogs in our care.</li>
        <li><strong>Nikko Social Skills:</strong> Nikko, another indie dog, initially had trouble socialising. Over time, she made friends and became a favourite among our regular guests, proving that with the right environment, any dog can thrive.</li>
      </ul>
      <h3 class="text-2xl font-bold mt-8 mb-4">Join the Scoob’s House Family</h3>
      <p>We invite you to bring your indie dog to Scoob’s House and see the difference a loving, inclusive environment can make. Our team is dedicated to providing the best care for all dogs, ensuring they leave with wagging tails and happy hearts.</p>
    `,
    tags: ['BREEDING', 'PET CARE', 'PETS']
  },
  2: {
    title: "Ensuring Your Dog's Health: Importance of Vaccination, Deworming, and Tick & Flea Medication Before Boarding",
    date: '16 March, 2024',
    content: `
      <p>When it comes to preparing your beloved dog for boarding, ensuring their health and safety should be a top priority. Here’s why vaccinations, deworming, and tick & flea medication administration are crucial steps:</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">1. Vaccinations: Protecting Against Diseases</h3>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Preventive Care:</strong> Vaccinations are essential to protect your dog from serious and potentially life-threatening diseases such as rabies, distemper, parvovirus, and kennel cough.</li>
        <li><strong>Boarding Requirements:</strong> Many boarding facilities require proof of up-to-date vaccinations to prevent the spread of contagious illnesses among dogs. Ensuring your dog is vaccinated not only protects them but also other dogs they may come in contact with.</li>
      </ul>
      <h3 class="text-2xl font-bold mt-8 mb-4">2. Deworming: Eliminating Internal Parasites</h3>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Health Risks:</strong> Internal parasites like roundworms, hookworms, and tapeworms can compromise your dog's health, causing issues like weight loss, diarrhoea, and even anaemia.</li>
        <li><strong>Routine Maintenance:</strong> Regular deworming treatments help eliminate these parasites, reducing the risk of transmission to other dogs and humans.</li>
      </ul>
      <h3 class="text-2xl font-bold mt-8 mb-4">3. Tick & Flea Medication: Preventing Infestations</h3>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Year-Round Protection:</strong> Ticks and fleas are not only irritating but can also transmit diseases such as Lyme disease and tapeworms. Using effective preventive medications ensures your dog remains protected.</li>
        <li><strong>Boarding Facilities Standards:</strong> Many boarding facilities require proof of tick and flea prevention to maintain a clean and safe environment for all dogs.</li>
      </ul>
      <h3 class="text-2xl font-bold mt-8 mb-4">Before Boarding Checklist:</h3>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Consult Your Vet:</strong> Schedule a visit with your veterinarian well in advance of boarding to ensure your dog is up-to-date on vaccinations and to discuss any specific health concerns.</li>
        <li><strong>Documentation:</strong> Obtain copies of vaccination records and any recent deworming and tick & flea medication history to present to the boarding facility.</li>
        <li><strong>Follow Guidelines:</strong> Follow your veterinarian's recommendations for the timing and type of medications suitable for your dog’s age, health status, and the local environment.</li>
      </ul>
      <p>Proper vaccination, deworming, and tick & flea medication administration are critical steps in preparing your dog for boarding. These measures not only protect your dog's health but also contribute to a safer and healthier environment for all pets at the boarding facility. By staying proactive about your dog's healthcare, you can ensure they have a comfortable and worry-free experience while you're away.</p>
      <p>Remember, a healthy dog is a happy dog – and ensuring they are protected from preventable illnesses and parasites is a key part of responsible pet ownership.</p>
    `,
    tags: ['HEALTH', 'WELLNESS', 'LIFESTYLE']
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
        <Link to="/blogs" className="text-blue-500 hover:underline">Back to Blogs</Link>
      </div>
    </div>
  );
};

export default ParticularBlog;
