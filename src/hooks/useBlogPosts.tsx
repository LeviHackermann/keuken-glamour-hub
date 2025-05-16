
import { useState, useEffect } from 'react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: string;
  tags?: string[];
}

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        
        // In a real application, this would be an API call
        // For now, we'll use localStorage to simulate a data store
        const storedPosts = localStorage.getItem('blogPosts');
        let blogPosts: BlogPost[] = [];
        
        if (storedPosts) {
          blogPosts = JSON.parse(storedPosts);
        } else {
          // Initialize with sample posts if none exist
          const samplePosts: BlogPost[] = [
            {
              id: '1',
              title: 'De nieuwste keukentrends van 2025',
              slug: 'nieuwste-keukentrends-2025',
              excerpt: 'Ontdek de nieuwste trends op het gebied van keukendesign, materialen en kleuren voor het komende jaar.',
              content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.</p><p>Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.</p><h2>Materiaaltrends</h2><p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum.</p>',
              coverImage: '/placeholder.svg',
              date: '2025-05-10T12:00:00Z',
              author: 'Sophie van der Meer',
              tags: ['trends', 'design', 'inspiratie']
            },
            {
              id: '2',
              title: 'Duurzame keuzes voor uw nieuwe keuken',
              slug: 'duurzame-keuzes-nieuwe-keuken',
              excerpt: 'Maak bewuste keuzes die niet alleen goed zijn voor uw huis, maar ook voor het milieu.',
              content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.</p><p>Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.</p><h2>Duurzame materialen</h2><p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum.</p>',
              coverImage: '/placeholder.svg',
              date: '2025-04-22T14:30:00Z',
              author: 'Lars Jansen',
              tags: ['duurzaamheid', 'materialen', 'tips']
            },
            {
              id: '3',
              title: 'Maximaal gebruik van een kleine keukenruimte',
              slug: 'maximaal-gebruik-kleine-keukenruimte',
              excerpt: 'Slimme oplossingen en tips om het meeste te halen uit een compacte keuken.',
              content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.</p><p>Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.</p><h2>Ruimtebesparende ideeën</h2><p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum.</p>',
              coverImage: '/placeholder.svg',
              date: '2025-04-05T09:45:00Z',
              author: 'Emma de Vries',
              tags: ['kleine ruimtes', 'tips', 'organisatie']
            }
          ];
          
          // Save sample posts to localStorage
          localStorage.setItem('blogPosts', JSON.stringify(samplePosts));
          blogPosts = samplePosts;
        }
        
        setPosts(blogPosts);
      } catch (err) {
        setError(err);
        console.error('Error fetching blog posts:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Add deletePost function
  const deletePost = (id: string) => {
    try {
      const updatedPosts = posts.filter(post => post.id !== id);
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
      setPosts(updatedPosts);
      return true;
    } catch (err) {
      console.error('Error deleting blog post:', err);
      return false;
    }
  };

  // Add updatePost function
  const updatePost = (updatedPost: BlogPost) => {
    try {
      const postIndex = posts.findIndex(post => post.id === updatedPost.id);
      
      if (postIndex === -1) {
        return false;
      }

      const updatedPosts = [...posts];
      updatedPosts[postIndex] = updatedPost;
      
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
      setPosts(updatedPosts);
      return true;
    } catch (err) {
      console.error('Error updating blog post:', err);
      return false;
    }
  };

  return { posts, isLoading, error, deletePost, updatePost };
}
