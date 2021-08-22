export interface Product {
   id:string
   name:string
   price:number,
   description:string,
   created_at:any,
   updated_at:any
}

export interface Products{
  products:Product[]
}