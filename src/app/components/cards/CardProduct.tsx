import { useDispatch } from 'react-redux';

import { Product } from "../../interfaces/product/product.interface";
import { DELETE_PRODUCT } from '../../store/actions/product/product.action';

interface Props{
   product:Product,
   index:number      
} 

export function CardProduct({ product, index }:Props){

   const dispatch = useDispatch()

   return (
     <div className="card">
         <div className="card-title text-center">
             <h2>{product.name}</h2>
         </div>

         <div className="card-body">
            <p>{ product.price }</p>
           <h4>{ product.description }</h4>         
         </div> 
         <div className="card-footer">
            <button 
             className="btn btn-danger"
             onClick={() => dispatch({type:DELETE_PRODUCT, payload:index})}
            >
             Delete
            </button>
         </div>
     </div>
  );
}