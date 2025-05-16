
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

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

interface EditBlogPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost | null;
  onUpdate: (post: BlogPost) => boolean;
}

const EditBlogPostModal: React.FC<EditBlogPostModalProps> = ({ isOpen, onClose, post, onUpdate }) => {
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [tags, setTags] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Admin authentication states
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  
  const ADMIN_PASSWORD = 'keukenhelden2025'; // In a real app, this would be server-side authenticated

  useEffect(() => {
    if (post && isOpen) {
      setTitle(post.title);
      setExcerpt(post.excerpt);
      setContent(post.content);
      setCoverImage(post.coverImage);
      setTags(post.tags?.join(', ') || '');
    }
  }, [post, isOpen]);

  const handleAuthentication = () => {
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: "Verificatie geslaagd",
        description: "U bent nu ingelogd als beheerder.",
      });
    } else {
      toast({
        title: "Verificatie mislukt",
        description: "Het ingevoerde wachtwoord is onjuist.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!post) return;
    
    setIsSubmitting(true);

    try {
      const updatedPost: BlogPost = {
        ...post,
        title,
        excerpt,
        content,
        coverImage: coverImage || '/placeholder.svg',
        tags: tags.split(',').map(tag => tag.trim()).filter(Boolean)
      };

      const success = onUpdate(updatedPost);

      if (success) {
        toast({
          title: "Blog post bijgewerkt",
          description: "De blog post is succesvol bijgewerkt.",
        });
        onClose();
      } else {
        throw new Error("Failed to update post");
      }
    } catch (error) {
      toast({
        title: "Er is een fout opgetreden",
        description: "De blog post kon niet worden bijgewerkt.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsAuthenticated(false);
    setAdminPassword('');
    setTitle('');
    setExcerpt('');
    setContent('');
    setCoverImage('');
    setTags('');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Blog Post Bewerken</DialogTitle>
          <DialogDescription>
            {isAuthenticated 
              ? "Werk de gegevens van deze blog post bij."
              : "Alleen de beheerder kan blog posts bewerken. Voer het beheerderswachtwoord in om door te gaan."}
          </DialogDescription>
        </DialogHeader>

        {!isAuthenticated ? (
          <form onSubmit={(e) => { e.preventDefault(); handleAuthentication(); }} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="adminPassword">Beheerderswachtwoord</Label>
              <Input 
                id="adminPassword" 
                type="password"
                value={adminPassword} 
                onChange={(e) => setAdminPassword(e.target.value)} 
                required 
              />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={handleClose}>
                Annuleren
              </Button>
              <Button type="submit">
                Verifiëren
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Titel</Label>
              <Input 
                id="title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Samenvatting</Label>
              <Textarea 
                id="excerpt" 
                value={excerpt} 
                onChange={(e) => setExcerpt(e.target.value)} 
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Inhoud</Label>
              <Textarea 
                id="content" 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                rows={8}
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="coverImage">Afbeelding URL</Label>
              <Input 
                id="coverImage" 
                value={coverImage} 
                onChange={(e) => setCoverImage(e.target.value)} 
                placeholder="https://example.com/image.jpg" 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags (gescheiden door komma's)</Label>
              <Input 
                id="tags" 
                value={tags} 
                onChange={(e) => setTags(e.target.value)} 
                placeholder="inspiratie, tips, trends" 
              />
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={handleClose}>
                Annuleren
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Bijwerken..." : "Blog Post Bijwerken"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EditBlogPostModal;
