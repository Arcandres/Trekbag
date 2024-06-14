import { create } from 'zustand';
import { initialItems } from '../lib/constants';

export const useItemsStore = create((set) => ({
  items: initialItems,
  addItem: (itemName) => {
    const newItem = {
      id: crypto.randomUUID(),
      name: itemName,
      packed: false,
    };

    set((state) => ({ items: [...state.items, newItem] }));
  },
  deleteItem: (itemId) => {
    set((state) => {
      const newItem = state.items.filter((item) => item.id !== itemId);

      return { items: newItem };
    });
  },
  toggleItem: (itemId) => {
    set((state) => {
      const newItem = state.items.map((item) => {
        if (item.id === itemId) {
          return { ...item, packed: !item.packed };
        }

        return item;
      });

      return { items: newItem };
    });
  },
  allCompleted: () => {
    set((state) => {
      const newItems = state.items.map((item) => ({ ...item, packed: true }));

      return { items: newItems };
    });
  },
  allInCompleted: () => {
    set((state) => {
      const newItems = state.items.map((item) => ({ ...item, packed: false }));

      return { items: newItems };
    });
  },
  resetItems: () => {
    set(() => ({ items: initialItems }));
  },
  removeAllItems: () => {
    set(() => ({ items: [] }));
  },
}));
