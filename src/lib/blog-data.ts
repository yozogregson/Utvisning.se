export type Post = {
  slug: string;
  title: string;
  author: string;
  date: string;
  imageId: string;
  excerpt: string;
  content: string;
};

export const blogPosts: Post[] = [
  {
    slug: 'the-art-of-content-display',
    title: 'The Art of Content Display',
    author: 'Jane Doe',
    date: '2024-07-20',
    imageId: 'blog-1',
    excerpt: 'Learn how to structure your content in a visually appealing manner that captivates your audience.',
    content: `
      <p>In the digital age, content is king. But even the best content can fail to make an impact if it's not presented well. This post delves into the principles of effective content display, from typography and layout to the strategic use of white space.</p>
      <h3 class="mt-6 mb-2 text-xl font-bold font-headline">Readability is Key</h3>
      <p>The foundation of good content display is readability. Choose a clean, legible font like PT Sans. Ensure your text has enough contrast against the background. We recommend a line height of at least 1.5 for body text to give your lines room to breathe.</p>
      <h3 class="mt-6 mb-2 text-xl font-bold font-headline">Visual Hierarchy</h3>
      <p>Guide your reader's eye through the content using a clear visual hierarchy. Use different font sizes and weights for headings, subheadings, and body text. This helps users scan the page and quickly find the information they're looking for.</p>
    `,
  },
  {
    slug: 'designing-for-conversion',
    title: 'Designing for Conversion: A Guide',
    author: 'John Smith',
    date: '2024-07-15',
    imageId: 'blog-2',
    excerpt: 'Discover how to design a website that not only looks good but also converts visitors into customers.',
    content: `
      <p>A beautiful website is great, but a beautiful website that drives business goals is even better. This guide will walk you through the key design principles for increasing conversions, from clear calls-to-action to trust-building elements.</p>
      <h3 class="mt-6 mb-2 text-xl font-bold font-headline">The Power of the CTA</h3>
      <p>Your Call-to-Action (CTA) buttons should be impossible to miss. Use a vibrant accent color, like our #FF9800 orange, to make them stand out. The text should be clear and action-oriented, such as "Get Started" or "Contact Us Today".</p>
      <h3 class="mt-6 mb-2 text-xl font-bold font-headline">Building Trust</h3>
      <p>Incorporate social proof like testimonials, case studies, and partner logos. A professional, error-free design and a secure connection (HTTPS) are also crucial for building trust with your visitors.</p>
    `,
  },
  {
    slug: 'why-an-image-gallery-matters',
    title: 'Why an Image Gallery Matters',
    author: 'Emily White',
    date: '2024-07-10',
    imageId: 'blog-3',
    excerpt: 'A picture is worth a thousand words. A gallery is worth a million. Explore the benefits of a dedicated image gallery.',
    content: `
      <p>In our visually-driven world, a high-quality image gallery is an essential tool for many businesses. It's not just for photographers; it's for anyone who wants to showcase products, projects, or their brand's personality.</p>
      <h3 class="mt-6 mb-2 text-xl font-bold font-headline">Show, Don't Just Tell</h3>
      <p>Whether you're an architect showing off your latest building, a chef displaying your culinary creations, or a company highlighting your team events, a gallery provides tangible proof of your claims. It allows potential customers to see the quality of your work for themselves.</p>
      <h3 class="mt-6 mb-2 text-xl font-bold font-headline">Optimizing for Performance</h3>
      <p>A gallery full of high-resolution images can slow down your site. That's why it's crucial to use modern image formats like WebP and tools like Next.js's Image component, which automatically optimizes images for different screen sizes and lazy loads them to ensure a fast user experience.</p>
    `,
  },
];
