import { useSelector, shallowEqual } from 'react-redux';
import { CardProduct } from './app/components/cards/CardProduct';
import { Products } from './app/interfaces/product/product.interface';

import { ModalProduct } from './app/components/modals/product/ModalProduct';

interface productStore {
  productReducer: any
}

function App() {

  const result: Products = useSelector((store: productStore) => store.productReducer, shallowEqual)

  return (
    <div>
      <div className="container pt-2">
        <button 
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal" data-bs-target="#exampleModal">
          add Product
        </button>
   
        <div className="text-center display-6">
            List Products
        </div>

        <div className="row">
          {
            result.products.map(( item, index ) => (
              <div className="col-md-4 pt-2" key={item.id}>
                <CardProduct product={{ ...item }} index={index} />
              </div>
            ))
          }
        </div>
      </div>

     <ModalProduct
       id="exampleModal" 
     />
    </div>
  );
}

export default App;