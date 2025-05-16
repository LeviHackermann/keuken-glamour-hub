
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useBlogPosts } from '@/hooks/useBlogPosts';
import AddBlogPostModal from '@/components/blog/AddBlogPostModal';
import EditBlogPostModal from '@/components/blog/EditBlogPostModal';
import { useToast } from '@/components/ui/use-toast';
import { DialogContent, Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Pencil, Trash2 } from 'lucide-react';

const Blog: React.FC = () => {
  const { posts, isLoading, error, deletePost, updatePost } = useBlogPosts();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [adminPassword, setAdminPassword] = useState('');
  const { toast } = useToast();

  const ADMIN_PASSWORD = 'keukenhelden2025';

  // Filter posts based on search term
  const filteredPosts = posts?.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleEditClick = (post: BlogPost) => {
    setSelectedPost(post);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (post: BlogPost) => {
    setSelectedPost(post);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (adminPassword !== ADMIN_PASSWORD) {
      toast({
        title: "Verificatie mislukt",
        description: "Onjuist wachtwoord. Verwijdering geannuleerd.",
        variant: "destructive",
      });
      return;
    }

    if (selectedPost && deletePost(selectedPost.id)) {
      toast({
        title: "Blog post verwijderd",
        description: "De blog post is succesvol verwijderd."
      });
    } else {
      toast({
        title: "Fout bij verwijderen",
        description: "De blog post kon niet worden verwijderd.",
        variant: "destructive",
      });
    }

    setAdminPassword('');
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Blog - Keukenhelden</title>
        <meta name="description" content="Lees onze blog voor de nieuwste trends en inspiratie voor uw keuken. Ontdek praktische tips, designideeën en meer." />
        <meta name="keywords" content="keuken blog, keukenhelden blog, keukentrends, keukendesign, keukentips" />
        <link rel="canonical" href="https://www.keukenhelden.nl/blog" />
        <meta property="og:title" content="Blog - Keukenhelden" />
        <meta property="og:description" content="Lees onze blog voor de nieuwste trends en inspiratie voor uw keuken." />
        <meta property="og:url" content="https://www.keukenhelden.nl/blog" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container mx-auto px-4 py-16 mt-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Blog</h1>
              <p className="text-lg text-gray-600">Inspiratie en tips voor uw droomkeuken</p>
            </div>
            <Button onClick={() => setIsAddModalOpen(true)} className="bg-black hover:bg-gray-800">
              Nieuwe Blog Post
            </Button>
          </div>

          <div className="mb-8">
            <Input 
              placeholder="Zoeken in blog posts..." 
              className="max-w-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all">Alle Posts</TabsTrigger>
              <TabsTrigger value="inspiration">Inspiratie</TabsTrigger>
              <TabsTrigger value="tips">Tips & Tricks</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <BlogPostsList 
                posts={filteredPosts} 
                isLoading={isLoading} 
                error={error}
                onEdit={handleEditClick}
                onDelete={handleDeleteClick}
              />
            </TabsContent>
            <TabsContent value="inspiration" className="mt-6">
              <BlogPostsList 
                posts={filteredPosts?.filter(post => post.tags?.includes('inspiratie'))} 
                isLoading={isLoading} 
                error={error}
                onEdit={handleEditClick}
                onDelete={handleDeleteClick}
              />
            </TabsContent>
            <TabsContent value="tips" className="mt-6">
              <BlogPostsList 
                posts={filteredPosts?.filter(post => post.tags?.includes('tips'))} 
                isLoading={isLoading} 
                error={error}
                onEdit={handleEditClick}
                onDelete={handleDeleteClick}
              />
            </TabsContent>
            <TabsContent value="trends" className="mt-6">
              <BlogPostsList 
                posts={filteredPosts?.filter(post => post.tags?.includes('trends'))} 
                isLoading={isLoading} 
                error={error}
                onEdit={handleEditClick}
                onDelete={handleDeleteClick}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <AddBlogPostModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
      />

      <EditBlogPostModal 
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        post={selectedPost}
        onUpdate={updatePost}
      />

      <Dialog open={isDeleteModalOpen} onOpenChange={(open) => {
        if (!open) {
          setAdminPassword('');
          setIsDeleteModalOpen(false);
        }
      }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Blog Post Verwijderen</DialogTitle>
            <DialogDescription>
              Weet u zeker dat u deze blog post wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt.
              Voer het beheerderswachtwoord in om door te gaan.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="admin-password">Beheerderswachtwoord</Label>
              <Input 
                id="admin-password" 
                type="password" 
                value={adminPassword} 
                onChange={(e) => setAdminPassword(e.target.value)} 
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setAdminPassword('');
              setIsDeleteModalOpen(false);
            }}>
              Annuleren
            </Button>
            <Button variant="destructive" onClick={handleConfirmDelete}>
              Verwijderen
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

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

interface BlogPostsListProps {
  posts?: BlogPost[];
  isLoading: boolean;
  error: unknown;
  onEdit: (post: BlogPost) => void;
  onDelete: (post: BlogPost) => void;
}

const BlogPostsList: React.FC<BlogPostsListProps> = ({ posts, isLoading, error, onEdit, onDelete }) => {
  if (isLoading) {
    return <div className="text-center py-8">Loading blog posts...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">Error loading blog posts</div>;
  }

  if (!posts || posts.length === 0) {
    return <div className="text-center py-8">Geen blog posts gevonden</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map(post => (
        <Card key={post.id} className="overflow-hidden flex flex-col">
          <div className="relative pb-[60%]">
            <img 
              src={post.coverImage || '/placeholder.svg'} 
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <CardContent className="flex-grow flex flex-col py-4">
            <div className="mb-2 flex items-center text-sm text-gray-500">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-2 flex-grow">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {post.tags?.map(tag => (
                <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t p-4 flex justify-between">
            <Link to={`/blog/${post.slug}`}>
              <Button variant="link" className="p-0 h-auto font-semibold">
                Lees meer
              </Button>
            </Link>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="p-1 h-8 w-8" 
                onClick={(e) => {
                  e.preventDefault();
                  onEdit(post);
                }}
              >
                <Pencil className="h-4 w-4" />
                <span className="sr-only">Bewerk</span>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="p-1 h-8 w-8 text-red-500 hover:text-red-700" 
                onClick={(e) => {
                  e.preventDefault();
                  onDelete(post);
                }}
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Verwijder</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Blog;
