import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Heart,
  MessageSquare,
  Share2,
  ThumbsDown,
  ThumbsUp,
} from 'lucide-react';
import { useParams } from 'react-router-dom';

export default function VideoPlayer() {
  const { id } = useParams();

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className="overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Video Player: {id}</p>
          </div>
        </AspectRatio>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1fr,300px]">
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold">
              Understanding React Hooks: A Deep Dive
            </h1>
            <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
              <span>123K views</span>
              <span>2 days ago</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <ThumbsUp className="mr-2 h-4 w-4" />
              12K
            </Button>
            <Button variant="ghost" size="sm">
              <ThumbsDown className="mr-2 h-4 w-4" />
              234
            </Button>
            <Button variant="ghost" size="sm">
              <Heart className="mr-2 h-4 w-4" />
              Save
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Channel avatar"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">TechEd Channel</h3>
                <p className="text-sm text-muted-foreground">50K subscribers</p>
              </div>
              <Button className="ml-auto">Subscribe</Button>
            </div>
            <p className="mt-4 text-sm">
              In this comprehensive tutorial, we explore React Hooks in detail,
              covering useState, useEffect, and custom hooks. Perfect for both
              beginners and intermediate developers looking to level up their React
              skills.
            </p>
          </Card>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Comments</h2>
            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="User avatar"
                className="h-8 w-8 rounded-full"
              />
              <Button variant="ghost" className="w-full justify-start">
                <MessageSquare className="mr-2 h-4 w-4" />
                Add a comment
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold">Up next</h2>
          {/* Related videos will go here */}
        </div>
      </div>
    </div>
  );
}