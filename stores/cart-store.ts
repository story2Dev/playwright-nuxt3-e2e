import { defineStore } from "pinia";
import { CartItem, Food } from "~/types";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    total(state) {
      return state.items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    },
  },
  actions: {
    addToCart(item: Food) {
      const cartItem = this.items.find((i) => i.food.id === item.id);
      if (cartItem) {
        cartItem.quantity++;
        return;
      }
      const cart = {
        id: this.items.length + 1,
        quantity: 1,
        price: item.price,
        food: item,
      };
      this.items.push(cart);
    },
    increment(index: number) {
      this.items[index].quantity++;
    },
    decrement(index: number) {
      // if quantity is 1, remove the item
      if (this.items[index].quantity === 1) {
        this.remove(this.items[index].id);
        return;
      }
      this.items[index].quantity--;
    },
    remove(id: number) {
      const index = this.items.findIndex((i) => i.id === id);
      this.items.splice(index, 1);
    },
    clear() {
      this.items = [];
    },
  },
});
