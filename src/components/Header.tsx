import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import ksbLogo from '@/assets/ksb-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#courses' },
    { name: 'Notifications', href: '#notifications' },
    { name: 'Current Affairs', href: '#current-affairs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={ksbLogo} alt="KSB Logo" className="h-10 w-10" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">KingMakers</h1>
              <p className="text-xs text-muted-foreground">School of Banking</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              Enroll Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="hero" size="sm" className="mt-4 w-full">
                Enroll Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;