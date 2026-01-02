import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary font-heading" data-testid="link-logo">
          <Heart className="h-6 w-6" />
          <span>GOLDEN AURA</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              data-testid={`link-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === item.href ? "text-primary" : "text-foreground/70"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Button 
          size="icon" 
          variant="ghost" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                data-testid={`link-mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block py-2 text-sm font-medium transition-colors hover:text-primary",
                  location === item.href ? "text-primary" : "text-foreground/70"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
