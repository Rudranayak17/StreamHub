import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload as UploadIcon } from 'lucide-react';

export default function Upload() {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Upload Video</h1>
        <p className="text-muted-foreground">Share your content with the world</p>
      </div>

      <Card className="p-6">
        <form className="space-y-6">
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
              dragActive ? 'border-primary' : 'border-muted'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrag}
          >
            <UploadIcon className="mx-auto h-12 w-12 text-muted-foreground" />
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                Drag and drop your video file here, or click to select
              </p>
              <Input
                type="file"
                accept="video/*"
                className="hidden"
                id="video-upload"
              />
              <Button variant="secondary" className="mt-4" asChild>
                <label htmlFor="video-upload">Select File</label>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Enter video title" />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Tell viewers about your video"
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="thumbnail">Thumbnail</Label>
              <Input type="file" id="thumbnail" accept="image/*" />
            </div>

            <Button className="w-full">Upload Video</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}