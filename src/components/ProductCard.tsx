import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart, onViewDetails }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-festival transition-all duration-300 hover:scale-105 bg-card border-border overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.discount && (
          <Badge className="absolute top-2 right-2 bg-festival-red text-festival-red-foreground">
            {product.discount}% OFF
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 left-2 bg-white/20 backdrop-blur hover:bg-white/30 text-white"
        >
          <Heart className="w-4 h-4" />
        </Button>
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive" className="text-lg px-4 py-2">
              Out of Stock
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 
            className="font-semibold text-foreground line-clamp-2 cursor-pointer hover:text-primary transition-colors"
            onClick={() => onViewDetails(product)}
          >
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-primary text-primary"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviews})
            </span>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-1">
            {product.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
        
        <Button
          variant={product.inStock ? "hero" : "outline"}
          size="sm"
          disabled={!product.inStock}
          onClick={() => onAddToCart(product)}
          className="min-w-fit"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {product.inStock ? "Add to Cart" : "Unavailable"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;