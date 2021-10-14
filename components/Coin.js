import { ButtonLink } from './Button';
import Image from "next/image";
import React from 'react';

export default function Coin({coinName,acronym,price,volume}) {
  let rupeeSign = '₹';
  return (
    <tr className="hover:bg-gray-100">
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
        <div className="flex flex-row">
        <span>
        {acronym && acronym.includes('USDT') ? (
            acronym.length === 4 ? (
                <Image src = '/usdt.png' alt = {`${acronym} image`} width="30" height = "30"/>
            ) : (
                <Image src = {`/${acronym.replace(/USDT/g, '').toLowerCase()}.png`} alt = {`${acronym} image`} width="30" height = "30"/>
            )
            ) : (
        <Image src = {`/${acronym.toLowerCase()}.png`} alt = {`${acronym} image`} width="30" height = "30"/>
        )}
        </span>
        <div className="flex flex-col">
        <div className="mx-1 font-medium">{acronym}</div>
        <div className="mx-1">{coinName}</div>
        </div>
        </div>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
      {acronym && acronym.includes('USDT') ? (  rupeeSign && price) : ( rupeeSign && price)}
      </td>
      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {volume}
      </td>
      <td className="">
        <ButtonLink className = "" size="small" type="success" variant="ghost" color="link">
            Set Alert
        </ButtonLink>
      </td>
    </tr>
  );
}
