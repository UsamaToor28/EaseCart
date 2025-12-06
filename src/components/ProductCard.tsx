import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag, Star, ArrowUpRight } from "lucide-react";
import { Product } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addItem } = useCartStore();
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 3D tilt effect values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group perspective-1000"
    >
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <div className="relative aspect-[4/4] rounded-3xl overflow-hidden bg-secondary mb-6 shadow-soft transition-shadow duration-700 group-hover:shadow-card">
            {/* Badge */}
            {product.badge && (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={cn(
                  "absolute top-4 left-4 z-10 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide",
                  product.badge === "Best Seller" && "bg-primary text-primary-foreground",
                  product.badge === "New" && "bg-foreground text-background",
                  product.badge === "Popular" && "bg-accent text-accent-foreground"
                )}
              >
                {product.badge}
              </motion.div>
            )}

            {/* Image with zoom effect */}
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              style={{ transform: "translateZ(0)" }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Quick Add Button - slides up */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileHover={{ scale: 1.02 }}
              className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-spring"
            >
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  addItem(product);
                }}
                className="w-full bg-background/95 backdrop-blur-sm text-foreground py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-medium hover:shadow-strong transition-all duration-300"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </motion.button>
            </motion.div>

            {/* Arrow icon on hover */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-100 scale-50">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </Link>

        {/* Product Info */}
        <div className="space-y-3 px-1">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-1 bg-secondary rounded-lg">
              <Star className="w-3.5 h-3.5 fill-primary text-primary" />
              <span className="text-sm font-semibold">{product.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
          </div>

          {/* Name */}
          <Link to={`/product/${product.id}`}>
            <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors duration-300">
              {product.name}
            </h3>
          </Link>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-xl">${product.price}</span>
            {product.originalPrice && (
              <span className="text-muted-foreground line-through text-base">
                ${product.originalPrice}
              </span>
            )}
            {product.originalPrice && (
              <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-lg">
                Save ${product.originalPrice - product.price}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};