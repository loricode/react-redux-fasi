import axios from 'axios';

export class ProductRepository{
   
   public static getProduct():Promise<any>{
      return axios.get('http://localhost:8000/api/product')
   }

}