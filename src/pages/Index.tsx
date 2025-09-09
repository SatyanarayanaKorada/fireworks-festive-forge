import { useState } from "react";
import { CartItem, Product } from "@/types/product";
import { featuredProducts, categories } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Cart from "@/components/Cart";
import Footer from "@/components/Footer";

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        toast({
          title: "Updated cart",
          description: `Increased quantity of ${product.name}`,
        });
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast({
          title: "Added to cart! 🎉",
          description: `${product.name} has been added to your cart`,
        });
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart",
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout initiated! 🛒",
      description: "Redirecting to payment gateway...",
    });
    // In a real app, this would redirect to checkout page
  };

  const handleViewDetails = (product: Product) => {
    toast({
      title: "Product details",
      description: `Viewing details for ${product.name}`,
    });
    // In a real app, this would navigate to product details page
  };

  const handleCategoryClick = (category: any) => {
    toast({
      title: "Category selected",
      description: `Browsing ${category.name} products`,
    });
    // In a real app, this would navigate to category page
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main>
        <HeroSection />
        <Categories 
          categories={categories}
          onCategoryClick={handleCategoryClick}
        />
        <FeaturedProducts 
          products={featuredProducts}
          onAddToCart={addToCart}
          onViewDetails={handleViewDetails}
        />
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Index;
