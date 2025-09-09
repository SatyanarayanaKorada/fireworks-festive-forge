import { ShoppingCart, User, Search, Menu, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-4">
            <span>📞 +91 81799 16434</span>
            <span>📧 info@maharajacrackers.com</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>🚚 Free delivery on orders above ₹2000</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span>4.8/5 Customer Rating</span>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-festival bg-clip-text text-transparent">
              🎆 Maharaja Crackers
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Shop</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Categories</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">About Us</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden md:flex relative">
              <Input
                type="search"
                placeholder="Search crackers..."
                className="w-64 pl-10 bg-muted/50"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>

            {/* User Account */}
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>

            {/* Cart */}
            <Button variant="outline" size="icon" onClick={onCartClick} className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-festival-red text-festival-red-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-border/50">
            <div className="flex flex-col space-y-4 pt-4">
              <div className="flex relative mb-4">
                <Input
                  type="search"
                  placeholder="Search crackers..."
                  className="w-full pl-10 bg-muted/50"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium py-2">Home</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium py-2">Shop</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium py-2">Categories</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium py-2">About Us</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium py-2">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
