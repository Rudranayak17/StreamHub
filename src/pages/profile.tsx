import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, Upload } from 'lucide-react';

export default function Profile() {
  return (
    <div className="space-y-8">
      <Card className="p-6">
        <div className="flex items-start gap-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">John Doe</h1>
                <p className="text-muted-foreground">@johndoe</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload
                </Button>
              </div>
            </div>
            <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
              <div>
                <span className="font-semibold text-foreground">1.2K</span>{' '}
                Followers
              </div>
              <div>
                <span className="font-semibold text-foreground">450</span> Following
              </div>
              <div>
                <span className="font-semibold text-foreground">32</span> Videos
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Tabs defaultValue="videos">
        <TabsList>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="playlists">Playlists</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>
        <TabsContent value="videos" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Video grid will go here */}
          </div>
        </TabsContent>
        <TabsContent value="playlists">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Playlists grid will go here */}
          </div>
        </TabsContent>
        <TabsContent value="about">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">About</h2>
            <p className="text-muted-foreground">
              Content creator passionate about technology and education. Sharing
              knowledge through video tutorials and live streams.
            </p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}