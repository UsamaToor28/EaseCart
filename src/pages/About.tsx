import { motion } from "framer-motion";
import { Heart, Target, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Quality First",
    description: "We obsess over every detail, ensuring each product meets our exacting standards.",
  },
  {
    icon: Target,
    title: "Thoughtful Design",
    description: "Form follows function. Every element serves a purpose in creating the perfect experience.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Our customers inspire us. Your feedback shapes our collection and vision.",
  },
  {
    icon: Sparkles,
    title: "Sustainable Future",
    description: "We're committed to ethical practices and minimizing our environmental footprint.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-secondary">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              Our Story
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Redefining How You{" "}
              <span className="text-primary">Shop</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              EaseCart was born from a simple belief: shopping should be effortless, 
              inspiring, and delightful. We curate premium products that bring joy 
              to everyday life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                More Than a Store, It's a Philosophy
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In a world of endless options and overwhelming choices, we believe 
                  in the power of curation. Our team carefully selects each product 
                  not just for its quality, but for the story it tells and the value 
                  it brings to your life.
                </p>
                <p>
                  We partner with artisans and brands who share our commitment to 
                  excellence. From sustainable materials to ethical manufacturing, 
                  every item in our collection reflects our values.
                </p>
                <p>
                  EaseCart isn't just about selling products — it's about creating 
                  experiences. From the moment you browse to the joy of unboxing, 
                  we design every touchpoint to be seamless and memorable.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl bg-gradient-accent opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-6xl md:text-7xl font-bold text-primary mb-2">
                    10K+
                  </div>
                  <div className="text-muted-foreground">Happy Customers</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl p-8 shadow-soft"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-foreground text-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Customers" },
              { number: "500+", label: "Products" },
              { number: "50+", label: "Partners" },
              { number: "4.9", label: "Rating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary-glow mb-2">
                  {stat.number}
                </div>
                <div className="text-background/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
