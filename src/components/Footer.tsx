import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-festival bg-clip-text text-transparent">
              🎆 Maharaja Crackers
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for premium quality fireworks and crackers. 
              Making celebrations memorable since 1995 with safety and quality as our top priority.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' })}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                All Products
              </button>
              <button
                type="button"
                onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Gift Boxes
              </button>
              <button
                type="button"
                onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Safety Guidelines
              </button>
              <button
                type="button"
                onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Categories</h4>
            <div className="space-y-2">
              {[
                'Sparklers',
                'Flower Pots',
                'Rockets & Aerial',
                'Ground Chakkars',
                'Fancy Crackers',
                'Gift Boxes',
              ].map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block w-full text-left text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Shop no 369 Iron yard beside reliance digital gate Bhavani Puram Vijayawada (520012)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+91 81799 16434</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">maharajacrackers.info@gmail.com</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h5 className="font-medium text-foreground text-sm">Newsletter</h5>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email" 
                  type="email" 
                  className="flex-1 text-sm"
                />
                <Button variant="hero" size="sm">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get updates on new arrivals and festival offers!
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Maharaja Crackers. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Shipping Policy</a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-festival rounded-full">
            <span className="text-sm font-medium">🛡️ ISI Certified Products</span>
            <span className="text-sm font-medium">🚚 Pan India Delivery</span>
            <span className="text-sm font-medium">💳 Secure Payments</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
