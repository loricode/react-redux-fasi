import { Product, Products } from "../product/product.interface";

export interface Action{
   type:string,
   payload: Product | Products[] | number
}