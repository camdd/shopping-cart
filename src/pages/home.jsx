// home.jsx
import { Filters } from '../components/Filters';
import { Products } from '../components/Products';
import './home.css';

export function Home(props) {
    const { products } = props; // Recibe los productos desde props

    return (
        <div className='main-container'>
            <div className='filters-container'>
                <Filters />
            </div>
            <div className='products-container'> {/* Agregar la clase 'products-container' */}
                <Products products={products} /> {/* Pasa los productos a Products */}
            </div>
        </div>
    );
}