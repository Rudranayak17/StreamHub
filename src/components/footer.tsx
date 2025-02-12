import { Link } from 'react-router-dom';
import { Film, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link className="flex items-center space-x-2" to="/">
              <Film className="h-6 w-6" />
              <span className="font-bold">StreamHub</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your premier destination for high-quality video content.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold">Product</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/browse" className="text-muted-foreground hover:text-foreground">
                  Browse
                </Link>
              </li>
              <li>
                <Link to="/live" className="text-muted-foreground hover:text-foreground">
                  Live Streams
                </Link>
              </li>
              <li>
                <Link to="/upload" className="text-muted-foreground hover:text-foreground">
                  Upload
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold">Connect</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="https://twitter.com"
                  className="flex items-center text-muted-foreground hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  className="flex items-center text-muted-foreground hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} StreamHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}