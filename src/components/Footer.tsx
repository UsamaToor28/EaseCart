import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto container-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-display font-bold text-2xl">
              Ease<span className="text-primary-glow">Cart</span>
            </Link>
            <p className="mt-4 text-background/60 text-sm leading-relaxed">
              Effortless shopping, refined design. Premium products curated for modern living.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 hover:bg-background/10 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover:bg-background/10 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover:bg-background/10 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover:bg-background/10 rounded-lg transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display font-semibold mb-6">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shop" className="text-background/60 hover:text-background transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=footwear" className="text-background/60 hover:text-background transition-colors">Footwear</Link></li>
              <li><Link to="/shop?category=accessories" className="text-background/60 hover:text-background transition-colors">Accessories</Link></li>
              <li><Link to="/shop?category=electronics" className="text-background/60 hover:text-background transition-colors">Electronics</Link></li>
              <li><Link to="/shop?category=home" className="text-background/60 hover:text-background transition-colors">Home</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-background/60 hover:text-background transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-background/60 hover:text-background transition-colors">Contact</Link></li>
              <li><a href="#" className="text-background/60 hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="text-background/60 hover:text-background transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-background/60 hover:text-background transition-colors">FAQ</a></li>
              <li><a href="#" className="text-background/60 hover:text-background transition-colors">Shipping</a></li>
              <li><a href="#" className="text-background/60 hover:text-background transition-colors">Returns</a></li>
              <li><a href="#" className="text-background/60 hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-background/60 hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">
            © 2025 EaseCart. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/40">
            <a href="#" className="hover:text-background transition-colors">Privacy</a>
            <a href="#" className="hover:text-background transition-colors">Terms</a>
            <a href="#" className="hover:text-background transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
