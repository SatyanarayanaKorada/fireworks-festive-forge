import { Category } from "@/types/product";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CategoriesProps {
  categories: Category[];
  onCategoryClick: (category: Category) => void;
}

const Categories = ({ categories, onCategoryClick }: CategoriesProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🎊 Shop by Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of premium fireworks and crackers, 
            carefully categorized for easy shopping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer hover:shadow-royal transition-all duration-300 hover:scale-105 bg-card border-border overflow-hidden"
              onClick={() => onCategoryClick(category)}
            >
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                  <p className="text-sm text-white/80 mb-2">{category.description}</p>
                  <div className="text-xs text-primary-glow font-medium">
                    {category.productCount} products
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Shop {category.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;