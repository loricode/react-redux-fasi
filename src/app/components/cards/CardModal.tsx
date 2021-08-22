import { ReactElement } from "react";

interface Props{
   children:ReactElement,
   id:string
}

export function CardModal(props:Props) {

   return (
      <div className="modal fade" id={props.id}>
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title">Product</h5>
                  <button 
                   type="button"
                   className="btn-close"
                   data-bs-dismiss="modal"
                   aria-label="Close"></button>
               </div>
               <div className="modal-body">
                { props.children } 
               </div>
            </div>
         </div>
      </div>
   );
}