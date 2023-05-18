import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Gallery from '../Gallery/Gallery';
import SuccessStory from '../SuccessStory/SuccessStory';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <Categories />
            <SuccessStory />
            <Testimonials />
        </div>
    );
};

export default Home;