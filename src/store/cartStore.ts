import { create } from 'zustand';
import { Product } from '@/data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, quantity?: number, color?: string, size?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (product, quantity = 1, color, size) => {
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.product.id === product.id && 
                  item.selectedColor === color && 
                  item.selectedSize === size
      );
      
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id && 
            item.selectedColor === color && 
            item.selectedSize === size
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
          isOpen: true,
        };
      }
      
      return {
        items: [...state.items, { product, quantity, selectedColor: color, selectedSize: size }],
        isOpen: true,
      };
    });
  },
  
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== productId),
    }));
  },
  
  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId);
      return;
    }
    
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      ),
    }));
  },
  
  clearCart: () => set({ items: [] }),
  
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  
  totalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
  
  totalPrice: () =>
    get().items.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
}));
