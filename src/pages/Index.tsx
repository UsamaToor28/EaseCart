import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Star, Truck, Shield, RefreshCcw, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
//import heroImage from "@/assets/hero-sneakers.jpg";
import heroImage from "@/assets/product-headphones.jpg"
import { useRef } from "react";

const features = [
  { icon: Truck, title: "Free Shipping", description: "On orders over $99" },
  { icon: Shield, title: "Secure Payment", description: "100% protected" },
  { icon: RefreshCcw, title: "Easy Returns", description: "30-day guarantee" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}

{/* =================================================================================================================================== */}

      <section ref={heroRef} className="relative min-h-[100vh] flex items-center overflow-hidden bg-background">
        {/* Animated Background */}
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 bg-gradient-hero"
        />
        
        {/* Floating Elements - Enhanced */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              y: [-30, 30, -30], 
              x: [-20, 20, -20],
              rotate: [0, 8, 0] 
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-[15%] w-32 h-32 bg-primary/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [30, -30, 30], 
              x: [20, -20, 20],
              rotate: [0, -8, 0] 
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 left-[10%] w-40 h-40 bg-accent/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [20, -20, 20], 
              rotate: [0, -5, 0] 
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/3 left-1/4 w-24 h-24 bg-primary/3 rounded-full blur-2xl"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto container-padding grid lg:grid-cols-2 gap-12 lg:gap-24 items-center py-20 lg:py-22">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 lg:pr-8 z-10"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              New Collection 2024
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              Shop Smarter,{" "}
              <span className="text-gradient">Refined Design</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Discover premium products curated for modern living. 
              Experience shopping the way it should be, simple, elegant, and delightful.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-5 pt-4"
            >
              <Link to="/shop">
                <Button variant="hero" size="xl" className="group">
                  Explore Collection
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="hero-outline" size="xl">
                  Our Story
                </Button>
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-8 pt-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                     
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium shadow-sm hover:scale-110 transition-transform"
                  >
                    {String.fromCharCode(64 + i)}
                  </motion.div>
                ))}
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                    >
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">10,000+</span> happy customers
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image - Modern Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:pl-8 z-10 -mt-8 md:-mt-12 lg:-mt-16"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Background Accent Shapes */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-2xl"
              />
              
              {/* Main Image */}
              <motion.div
                className="relative aspect-[4.5/5] rounded-3xl overflow-hidden shadow-strong bg-secondary"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src={heroImage}
                  alt="Premium white sneakers"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                />
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                
                {/* Corner Accent */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-background/30 rounded-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-background/30 rounded-3xl" />
              </motion.div>
            </div>

            {/* Badge - Free Shipping */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -bottom-8 -left-8 bg-background rounded-2xl shadow-card p-5 border border-border/50 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-display font-bold text-sm">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">On all orders</p>
                </div>
              </div>
            </motion.div>

            {/* Badge - Discount */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-foreground to-foreground/90 text-background rounded-2xl shadow-strong px-6 py-4 border border-background/20 backdrop-blur-sm"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <p className="font-display font-bold text-lg">-20% OFF</p>
                <p className="text-xs opacity-80">Limited Time</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Bar */}
      {/* <section className="bg-secondary/50 py-10 border-y border-border">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-center gap-5"
              >
                <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center shadow-soft">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-lg">{feature.title}</p>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

{/* //=========================================================================================================== */}

      {/* Featured Products */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          >
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Featured Products
              </h2>
              <p className="text-muted-foreground text-lg max-w-lg">
                Handpicked essentials for those who appreciate quality and design
              </p>
            </div>
            <Link to="/shop">
              <Button variant="outline" size="lg" className="group">
                View All
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {products.slice(0, 6).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-10 border-y border-border">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-center gap-5"
              >
                <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center shadow-soft">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-lg">{feature.title}</p>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Categories */}
      <section className="py-20 md:py-24 bg-background-muted">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Shop by Category
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Explore our collections designed for your lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {[
              { name: "Footwear", image: products[0].image },
              { name: "Accessories", image: products[1].image },
              { name: "Electronics", image: products[3].image },
              { name: "Home", image: products[5].image },
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
              >
                <Link
                  to={`/shop?category=${category.name.toLowerCase()}`}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-secondary shadow-soft group-hover:shadow-card transition-shadow duration-700">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <h3 className="font-display font-bold text-xl md:text-2xl text-background group-hover:translate-x-2 transition-transform duration-500">
                        {category.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-sm">Explore</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-dark text-background">
        <div className="max-w-5xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Join the EaseCart Community
            </h2>
            <p className="text-background/70 text-xl max-w-2xl mx-auto">
              Subscribe to get exclusive offers, early access to new products, and curated style guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              />
              <Button variant="hero" size="lg" className="whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;