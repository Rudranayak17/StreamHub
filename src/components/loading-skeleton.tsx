import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';

export function VideoSkeleton() {
  return (
    <Card className="overflow-hidden">
      <AspectRatio ratio={16 / 9}>
        <Skeleton className="h-full w-full" />
      </AspectRatio>
      <div className="p-4">
        <Skeleton className="h-4 w-2/3" />
        <div className="mt-2 flex items-center text-sm">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="ml-2 h-3 w-16" />
        </div>
      </div>
    </Card>
  );
}

export function VideoSkeletonGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <VideoSkeleton key={i} />
      ))}
    </div>
  );
}