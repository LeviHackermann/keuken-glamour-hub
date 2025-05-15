
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { nanoid } from 'nanoid';

interface AddBlogPostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddBlogPostModal: React.FC<AddBlogPostModalProps> = ({ isOpen, onClose }) => {
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
    setIsSubmitting(true);

    // In a real application, you would save this to a backend
    // For now, we'll save it to localStorage
    try {
      const newPost = {
        id: nanoid(),
        title,
        slug: title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-'),
        excerpt,
        content,
        coverImage: coverImage || '/placeholder.svg',
        date: new Date().toISOString(),
        author: 'Admin', // In a real app, this would be the current user
        tags: tags.split(',').map(tag => tag.trim()).filter(Boolean)
      };

      // Get existing posts or initialize empty array
      const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
      
      // Add new post
      localStorage.setItem('blogPosts', JSON.stringify([newPost, ...existingPosts]));

      toast({
        title: "Blog post toegevoegd",
        description: "De blog post is succesvol toegevoegd.",
      });

      // Reset form and close modal
      setTitle('');
      setExcerpt('');
      setContent('');
      setCoverImage('');
      setTags('');
      onClose();
    } catch (error) {
      toast({
        title: "Er is een fout opgetreden",
        description: "De blog post kon niet worden toegevoegd.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Nieuwe Blog Post</DialogTitle>
          <DialogDescription>
            {isAuthenticated 
              ? "Vul de velden in om een nieuwe blog post toe te voegen."
              : "Alleen de beheerder kan nieuwe blog posts toevoegen. Voer het beheerderswachtwoord in om door te gaan."}
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
              <Button type="button" variant="outline" onClick={onClose}>
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
              <Button type="button" variant="outline" onClick={onClose}>
                Annuleren
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Toevoegen..." : "Blog Post Toevoegen"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AddBlogPostModal;
