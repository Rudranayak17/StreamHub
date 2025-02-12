import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Users } from 'lucide-react';

const liveStreams = [
  {
    id: '1',
    title: 'Live Coding Session: Building a React App',
    thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
    viewers: '1.2K',
    streamer: 'CodeMaster',
  },
  {
    id: '2',
    title: 'Gaming: Exploring New Worlds',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e',
    viewers: '856',
    streamer: 'GamePro',
  },
  {
    id: '3',
    title: 'Art Studio Live: Digital Painting',
    thumbnail: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f',
    viewers: '2.3K',
    streamer: 'ArtistLife',
  },
];

export default function Live() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Live Now</h1>
        <p className="text-muted-foreground">
          Watch live streams from your favorite creators
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {liveStreams.map((stream) => (
          <Card key={stream.id} className="overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <img
                src={stream.thumbnail}
                alt={stream.title}
                className="object-cover w-full h-full transition-transform hover:scale-105"
              />
              <Badge
                variant="destructive"
                className="absolute top-2 left-2 uppercase"
              >
                Live
              </Badge>
              <div className="absolute bottom-2 right-2 bg-black/75 px-2 py-1 rounded text-xs text-white flex items-center gap-1">
                <Users className="h-3 w-3" />
                {stream.viewers}
              </div>
            </AspectRatio>
            <div className="p-4">
              <h3 className="font-semibold line-clamp-2">{stream.title}</h3>
              <div className="mt-2 flex items-center text-sm text-muted-foreground">
                <span>{stream.streamer}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}