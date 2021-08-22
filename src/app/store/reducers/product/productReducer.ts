import { Action } from "../../../interfaces/action/action.interface";
import { Product } from "../../../interfaces/product/product.interface";

import { ADD_PRODUCT, DELETE_PRODUCT, ADD_PRODUCTS } from '../../actions/product/product.action';

const initialState = {
   products:[] as Product[]
}

export function productReducer(state = initialState, action:Action){
   switch(action.type){

      case ADD_PRODUCT:
        return {
         products:[...state.products, action.payload]
        }

      case DELETE_PRODUCT:       
        return {
         products:state.products.filter((_, index) => index !== action.payload)
        }  

      case ADD_PRODUCTS:       
        return {
         products: action.payload
        } 

      default:
        return state
  }
}