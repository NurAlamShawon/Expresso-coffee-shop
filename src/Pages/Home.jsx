import React from 'react';
import HeroSection from '../Components/HeroSection';
import Democard from '../Components/Democard';
import MainCardsection from '../Components/MainCardsection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <MainCardsection></MainCardsection>
            <Democard></Democard>
            
        </div>
    );
};

export default Home;