import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Tv2, Upload, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section className="py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to StreamHub
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Your premier destination for high-quality video content. Stream,
                create, and share with our global community.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link to="/browse">
                  <Play className="mr-2 h-4 w-4" />
                  Start Watching
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/upload">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Video
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">
          Why Choose StreamHub?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <Tv2 className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">High-Quality Streaming</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Enjoy crystal clear video quality with adaptive streaming technology.
            </p>
          </Card>
          <Card className="p-6">
            <Users className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Global Community</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Connect with creators and viewers from around the world.
            </p>
          </Card>
          <Card className="p-6">
            <Upload className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Easy Upload</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Share your content with our simple and fast upload system.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}