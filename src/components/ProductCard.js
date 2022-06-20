import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ data }) => {
    return (
        <div className='product-card d-flex .flex-row flex-wrap justify-content-evenly'>
            {data.map((product) => (
                <Link to={`products/${product.id}`} key={product.id}>
                    <div className="card h-80 p-4 my-3 text-center" style={{ width: "18rem" }}>
                        <img src={product.image} className="card-img-top" alt="product" height={"250px"} />
                        <div className="card-body">
                            <h5 className="card-title">{product.title.substring(0, 15)}</h5>
                            <p>${product.price}</p>
                            <p className="card-text">{product.description.substring(0, 60)}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductCard