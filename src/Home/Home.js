import React, { useState, useEffect } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { setSelectedProducts, getselectedProductsCount } from '../Redux/actions/products-action'
import SingleProduct from './SingleProduct';

function Home({ productList, setSelectedProducts, getselectedProductsCount }) {
    const [productsListDetails, setProductsList] = useState(productList);

    useEffect(
        () => {
            setProductsList(productList);
        },
        [productList]
    );

    function handleToggleComplete(id) {
        var Items = [...productList];
        Items.map((item, index) => {
            if (item.id === id) {
                Items[index] = { ...Items[index], addToCart: !item.addToCart };
            }
        });

        setSelectedProducts(Items);
        getselectedProductsCount();

    }
    return (
        <>
            <div className="productContainer">
                {productList.map((prod) => (
                    <SingleProduct prod={prod} key={prod.id} handleClick={handleToggleComplete} />
                ))}
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        productList: state.allProducts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedProducts: (selectedProduct) => dispatch(setSelectedProducts(selectedProduct)),
        getselectedProductsCount: () => dispatch(getselectedProductsCount())
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Home);