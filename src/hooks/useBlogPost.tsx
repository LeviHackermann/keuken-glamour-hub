
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

export function useBlogPost(slug: string) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      try {
        setIsLoading(true);
        
        // In a real application, this would be an API call
        // For now, we'll use localStorage to simulate a data store
        const storedPosts = localStorage.getItem('blogPosts');
        
        if (storedPosts) {
          const posts: BlogPost[] = JSON.parse(storedPosts);
          const foundPost = posts.find(p => p.slug === slug);
          
          if (foundPost) {
            setPost(foundPost);
          } else {
            setError(new Error('Post not found'));
          }
        } else {
          setError(new Error('No posts available'));
        }
      } catch (err) {
        setError(err);
        console.error('Error fetching blog post:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return { post, isLoading, error };
}
