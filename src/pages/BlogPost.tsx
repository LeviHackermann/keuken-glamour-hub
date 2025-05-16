
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { useBlogPost } from '@/hooks/useBlogPost';
import { ArrowLeft, Pencil } from 'lucide-react';
import EditBlogPostModal from '@/components/blog/EditBlogPostModal';
import { useBlogPosts } from '@/hooks/useBlogPosts';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { post, isLoading, error } = useBlogPost(slug || '');
  const { updatePost } = useBlogPosts();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16 text-center">
        <div className="max-w-3xl mx-auto">
          <p>Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Blog post niet gevonden</h1>
          <p className="mb-8">De pagina die u zoekt bestaat niet of is verplaatst.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Terug naar Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const postDate = new Date(post.date).toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>{`${post.title} - Keukenhelden Blog`}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags?.join(', ')} />
        <link rel="canonical" href={`https://www.keukenhelden.nl/blog/${post.slug}`} />
        <meta property="og:title" content={`${post.title} - Keukenhelden Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://www.keukenhelden.nl/blog/${post.slug}`} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        {post.tags?.map((tag) => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            'headline': post.title,
            'image': post.coverImage,
            'datePublished': post.date,
            'author': {
              '@type': 'Person',
              'name': post.author
            },
            'publisher': {
              '@type': 'Organization',
              'name': 'Keukenhelden',
              'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.keukenhelden.nl/logo.png'
              }
            },
            'description': post.excerpt
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-16 mt-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-black">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Terug naar Blog
            </Link>
            <Button 
              variant="outline" 
              className="flex items-center gap-1"
              onClick={() => setIsEditModalOpen(true)}
            >
              <Pencil className="h-4 w-4" />
              Bewerken
            </Button>
          </div>

          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags?.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span>{postDate}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>
          </div>

          {post.coverImage && (
            <div className="rounded-lg overflow-hidden mb-8">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Render content using dangerouslySetInnerHTML - in a real app, you'd use a rich text renderer */}
          <article 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-2xl font-bold mb-4">Deel dit artikel</h3>
            <div className="flex gap-4">
              <Button variant="outline">Facebook</Button>
              <Button variant="outline">Twitter</Button>
              <Button variant="outline">LinkedIn</Button>
            </div>
          </div>
        </div>
      </div>

      <EditBlogPostModal 
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        post={post}
        onUpdate={updatePost}
      />
    </>
  );
};

export default BlogPost;
