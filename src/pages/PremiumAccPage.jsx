import React from 'react';
import PremiumNavbar from './Premium/PremiumNavbar';
import GetPremium from './Premium/GetPremium';
import PowerOfPremium from './Premium/PowerOfPremium';
import PickPremium from './Premium/PickPremium';
import FooterPremium from './Premium/FooterPremium';

const PremiumAcc = () => {
    return (
        <div>
            <PremiumNavbar />
            <GetPremium />
            <PowerOfPremium />
            <PickPremium />
            <FooterPremium />
        </div>
    );
};

export default PremiumAcc;