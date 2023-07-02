<script setup lang="ts">
import { Food } from "~/types";
import { useCartStore } from "~/stores/cart-store";
const url =
  "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
const urlCat = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

const categories = ref<string[]>([]);
const { data: dataCat, error: errorCat } = useFetch<any>(urlCat);
if (dataCat.value) {
  const items = dataCat.value.meals.map((item: any) => {
    return item.strCategory;
  });
  categories.value = items;
}

const { data, error } = useFetch<any>(url);
const foods = ref<Food[]>([]);
console.log(data);
if (data.value) {
  const items = data.value.meals.map((item: any) => {
    return {
      id: item.idMeal,
      name: item.strMeal,
      image: item.strMealThumb,
      price: Math.floor(Math.random() * 20),
    };
  });
  foods.value = items;
}
const cart = useCartStore();
</script>
<template>
  <div class="h-screen p-4">
    <section class="h-full flex gap-4">
      <article class="flex-grow">
        <ul class="flex gap-2 flex-wrap items-center">
          <li class="bg-orange-400 text-white px-4 py-1 rounded-full">All</li>
          <li v-for="(item, index) in categories" :key="index">
            {{ item }}
          </li>
        </ul>
        <ul class="grid grid-cols-3 gap-4 mt-4">
          <li
            v-for="(item, index) in foods"
            :key="index"
            class="h-auto rounded-md p-4 flex flex-col cursor-pointer justify-between border"
            @click="cart.addToCart(item)"
          >
            <p class="break-words text-xl text-gray-500">{{ item.name }}</p>
            <div class="flex justify-between items-end">
              <div class="flex justify-between">
                <p class="text-xl font-sans font-bold text-orange-400">
                  ${{ item.price }}
                </p>
              </div>
              <div class="w-20 h-20">
                <img :src="item.image" class="rounded-lg" />
              </div>
            </div>
          </li>
        </ul>
      </article>
      <article class="max-w-md w-full">
        <nav class="flex justify-between items-center">
          <h1 class="text-xl font-sans font-bold">Current Order</h1>
          <ul class="flex gap-2">
            <li>
              <button
                class="p-2 px-4 text-red-500 bg-red-100 rounded-lg"
                @click="cart.clear()"
              >
                Clear all
              </button>
            </li>
            <li>
              <button class="p-2 px-4 text-slate-500 bg-slate-100 rounded-lg">
                setting
              </button>
            </li>
          </ul>
        </nav>

        <!-- item list -->
        <ul class="mt-4 flex flex-col space-y-3">
          <li
            v-if="!cart.items.length"
            class="p-4 border rounded-lg bg-orange-50"
          >
            No item in cart
          </li>
          <li
            v-for="(item, index) in cart.items"
            :key="index"
            class="flex gap-2 items-center"
          >
            <div class="flex flex-grow gap-2">
              <img :src="item.food.image" alt="" class="w-12 h-12 rounded-lg" />
              <article>
                <p>{{ item.food.name }}</p>
              </article>
            </div>
            <div class="flex justify-end">
              <ul class="flex gap-1 items-center justify-end">
                <li class="flex gap-1 items-center">
                  <button
                    class="py-1 px-4 text-red-500 bg-red-100 rounded-lg"
                    @click="cart.decrement(index)"
                  >
                    -
                  </button>
                  <p class="px-2 w-10">{{ item.quantity }}</p>
                  <button
                    class="py-1 px-4 text-slate-500 bg-slate-100 rounded-lg"
                    @click="cart.increment(index)"
                  >
                    +
                  </button>
                </li>
                <li>
                  <div class="px-2">${{ item.price }}</div>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <!-- total -->
        <ul class="border rounded-lg mt-4">
          <li class="p-4 flex justify-between">
            <span>Total</span>
            <span class="font-bold font-sans">${{ cart.total }}</span>
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>
