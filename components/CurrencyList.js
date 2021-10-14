import Coin from './Coin';
import { useState, useEffect } from 'react';
import fetch from "isomorphic-fetch";
import loading from '../public/loading.svg';
import Image from "next/image";
import React from 'react';

const CurrencyList = ({coinsData}) => {    
    return (
        <React.Fragment>
            {coinsData.map((coin,index) => (
                <Coin key={index} coinName={coin.coinName} acronym={coin.acronym} price={coin.highest_buy_bid} volume={coin.volume}/>
            ))}
        </React.Fragment>
    )
};

export default CurrencyList;