import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Background */}
      <div
        className="h-[70vh] md:h-[80vh] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Light Up Your
              <span className="block bg-gradient-festival bg-clip-text text-transparent">
                Celebrations
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed">
              Premium quality fireworks and crackers for Diwali, New Year, and all your festive celebrations. 
              Safe, colorful, and magical moments guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                variant="hero" 
                className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🛒 Shop Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🎁 Gift Boxes
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 animate-sparkle hidden lg:block">
          <div className="w-4 h-4 bg-primary rounded-full opacity-80"></div>
        </div>
        <div className="absolute bottom-32 right-32 animate-sparkle hidden lg:block" style={{ animationDelay: "1s" }}>
          <div className="w-3 h-3 bg-accent rounded-full opacity-70"></div>
        </div>
        <div className="absolute top-40 left-20 animate-sparkle hidden lg:block" style={{ animationDelay: "2s" }}>
          <div className="w-2 h-2 bg-festival-red rounded-full opacity-90"></div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-gradient-festival rounded-full flex items-center justify-center">
                <span className="text-2xl">🚚</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-foreground">Free Delivery</h3>
                <p className="text-sm text-muted-foreground">On orders above ₹2000</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-gradient-royal rounded-full flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-foreground">Safety Certified</h3>
                <p className="text-sm text-muted-foreground">ISI marked products</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-gradient-sparkle rounded-full flex items-center justify-center">
                <span className="text-2xl">💳</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-foreground">Easy Payments</h3>
                <p className="text-sm text-muted-foreground">UPI, Card, COD available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
