import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import useFetch from '../customHooks/useFetch'

const ProductPage = () => {
    const { id } = useParams();
    const { data: product, error, loading } = useFetch(`https://fakestoreapi.com/products/${id}`)
    const navigate = useNavigate();
    
    return (
        <div>
            {error && <div>could not fetch data of that resource</div>}
            {loading && <div className='text-center fs-4 text-muted'>Loading...</div>}
            {product && (
                <div class="card my-3 mx-auto p-4 container" style={{ maxWidth: "80%", minHeight: '70vh' }}>
                    <div class="row g-0">

                        <div className="col-md-1">
                            <button type="button" class="btn btn-outline-primary" onClick={() => navigate(-1)}>Back</button>
                        </div>

                        <div class="col-md-4">
                            <img src={product.image} className="img-fluid rounded-start mt-4" alt="product" style={{ maxWidth: "80%", maxHeight: '80%', marginLeft: '20px' }} />
                        </div>

                        <div class="col-md-7">
                            <div class="card-body ">
                                <h5 class="card-title">{product.title}</h5>
                                <div class="d-flex justify-content-start align-items-center mb-3">
                                    <h6 className="me-3">${product.price}</h6>
                                    <button type="button" class="btn btn-outline-primary">Add to cart</button>
                                </div>
                                <p class="card-text">{product.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <p className="col">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor dolor in felis euismod, in posuere ligula ultrices. Donec ultrices at leo ac egestas. Curabitur scelerisque tincidunt tortor, eget feugiat neque mollis sit amet. Vivamus porttitor, sem id porttitor accumsan, sapien est ullamcorper metus, consectetur fringilla sem ante id dolor. Vivamus et nibh ut felis ultrices mattis. Curabitur non venenatis ipsum. Quisque at urna eleifend, volutpat nulla quis, rutrum urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi scelerisque cursus dignissim. Fusce dapibus faucibus quam nec pulvinar.
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductPage