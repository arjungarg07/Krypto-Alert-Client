import Coin from './Coin';
import { useState, useEffect } from 'react';
import loading from '../public/loading.svg';
import Image from "next/image";
import React from 'react';

const CurrencyList = ({coinsData}) => {    
    return (
        <React.Fragment>
            {coinsData.map((coin,index) => (
                <Coin key={index} coinName={coin.coinName} acronym={coin.acronym} price={coin.price} change24H={coin.change24H} change1YR={coin.change1YR}/>
            ))}
        </React.Fragment>
    )
};

export default CurrencyList;