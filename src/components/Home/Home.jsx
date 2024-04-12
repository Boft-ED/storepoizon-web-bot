import React from "react";
import './Home.scss';
import ProductList from '../ProductList/ProductList';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
            <Banner />
            <ProductList />
        </>
    );
};

export default Home;