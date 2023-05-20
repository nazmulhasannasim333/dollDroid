import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Deal from '../Deal/Deal';
import Gallery from '../Gallery/Gallery';
import SuccessStory from '../SuccessStory/SuccessStory';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner />
            <Gallery />
            <Categories />
            <Deal />
            <Testimonials />
            <SuccessStory />
        </div>
    );
};

export default Home;