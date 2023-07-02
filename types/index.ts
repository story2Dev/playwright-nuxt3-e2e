import { Food } from './Food';

export * from './Food'

export interface CartItem  {
    id: number;
    quantity: number;
    price: number;
    food: Food;
}