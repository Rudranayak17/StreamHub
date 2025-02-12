import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { VideoSkeletonGrid } from '@/components/loading-skeleton';
import { useEffect, useState } from 'react';

const videos = [
  {
    id: '1',
    title: 'Getting Started with Web Development',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    duration: '12:34',
    views: '1.2K',
    author: 'TechGuru',
  },
  {
    id: '2',
    title: 'Modern Architecture Design',
    thumbnail: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2',
    duration: '8:45',
    views: '856',
    author: 'DesignMaster',
  },
  {
    id: '3',
    title: 'Cooking Masterclass',
    thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d',
    duration: '15:20',
    views: '2.3K',
    author: 'ChefLife',
  },
];

export default function Browse() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Browse Videos</h1>
          <p className="text-muted-foreground">
            Discover amazing content from creators around the world
          </p>
        </div>
        <VideoSkeletonGrid />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Browse Videos</h1>
        <p className="text-muted-foreground">
          Discover amazing content from creators around the world
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <img
                src={video.thumbnail}
                alt={video.title}
                className="object-cover w-full h-full transition-transform hover:scale-105"
              />
              <div className="absolute bottom-2 right-2 bg-black/75 px-2 py-1 rounded text-xs text-white">
                {video.duration}
              </div>
            </AspectRatio>
            <div className="p-4">
              <h3 className="font-semibold line-clamp-2">{video.title}</h3>
              <div className="mt-2 flex items-center text-sm text-muted-foreground">
                <span>{video.author}</span>
                <span className="mx-2">•</span>
                <span>{video.views} views</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}