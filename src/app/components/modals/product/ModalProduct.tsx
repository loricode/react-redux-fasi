import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CardModal } from "../../cards/CardModal";
import { Product } from "../../../interfaces/product/product.interface";

import { ADD_PRODUCT } from '../../../store/actions/product/product.action';

interface Props {
   id: string
}

export function ModalProduct(props: Props) {

   const dispatch = useDispatch()

   const [ stateForm, setStateForm ] = useState<Product>({
      id:'',
      name:'',
      price:0,
      description:'',    
   })

   const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
       setStateForm({ 
           ...stateForm,
          [e.target.name]:e.target.value 
       })
   }

   const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
     e.preventDefault()
     dispatch({  type:ADD_PRODUCT,  payload:stateForm })
   }

   
   return (
      <CardModal id={props.id}>
         <form
          onSubmit={handleSubmit}
          >
            <div className="row">
            <input 
                 name="id"
                 className="form-control mb-2"
                 onChange={handleChange}
                 placeholder="Id" />

               <input 
                 name="name"
                 className="form-control mb-2"
                 onChange={handleChange}
                 placeholder="Name" />
            </div>

            <div className="row">
               <input 
                 className="form-control mb-2"
                 min="0"
                 type="number"
                 name="price"
                 onChange={handleChange}
                 placeholder="Price" />
            </div>

            <div className="row">
               <textarea       
                 className="form-control"
                 name="description"
                 onChange={handleChange}
                 placeholder="Description" />
            </div>
            <div className="modal-footer">
                  <button 
                    type="button"    
                    className="btn btn-secondary"
                    data-bs-dismiss="modal">Close</button>
                  <button    
                   type="submit"
                   className="btn btn-primary">Save</button>
           </div>
         </form>
      </CardModal>
   );
}