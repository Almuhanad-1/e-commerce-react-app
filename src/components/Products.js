import useFetch from '../customHooks/useFetch';
import ProductCard from './ProductCard';


const Products = () => {

    const { data: productsData, error, loading } = useFetch('https://fakestoreapi.com/products');

    return (
        <>
            <h2 className='text-center mt-5 mb-4'>Latest Products</h2>
            {error && <div>could not fetch data of that resource</div>}
            {loading && <div className='text-center fs-4 text-muted'>Loading...</div>}
            {productsData && <ProductCard data={productsData} />}
        </>
    )
}

export default Products