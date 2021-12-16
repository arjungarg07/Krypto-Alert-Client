import { ButtonLink } from "./Button";
import Image from "next/image";
import React from "react";
import NumberFormat from 'react-number-format';

export default function Coin({ coinName, acronym, price, change24H }) {
  return (
    <thead>
    <tr className="hover:bg-gray-100">
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
        <div className="flex flex-row">
          <span>
            {acronym && acronym.includes("USDT") ? (
              acronym.length === 4 ? (
                <Image
                  src="/usdt.png"
                  alt={`${acronym} image`}
                  width="30"
                  height="30"
                />
              ) : (
                <Image
                  src={`/${acronym.replace(/USDT/g, "").toLowerCase()}.png`}
                  alt={`${acronym} image`}
                  width="30"
                  height="30"
                />
              )
            ) : (
              <Image
                src={`/${acronym.toLowerCase()}.png`}
                alt={`${acronym} image`}
                width="30"
                height="30"
              />
            )}
          </span>
          <div className="flex flex-col">
            <div className="flex flex-row mx-1">
              <div className="font-medium">{acronym.includes("USDT")&& acronym.length === 4 ? 'USDT' :acronym.replace(/USDT/g, "")}</div>
              {acronym.includes("USDT") ? (
                acronym.length === 4 ? '' : <div className="text-gray-600">/ USDT </div>
              ) : (
                <div className="text-gray-600">/ INR</div>
              )}
            </div>
            <div className="mx-1 text-xs text-gray-600">{coinName}</div>
          </div>
        </div>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 font-medium text-xs whitespace-nowrap p-4 ">
        {acronym && acronym.includes("USDT") ? acronym.length === 4 ? <NumberFormat className = "font-medium" displayType={'text'} thousandSeparator={true} prefix={'₹'} value={price} /> : (<NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />) : <NumberFormat className = "font-medium" displayType={'text'} thousandSeparator={true} prefix={'₹'} value={price} />}
      </td>
      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {change24H>=0 ? <div className="font-medium text-green-600">+{change24H}%</div> : <div className="font-medium text-red-600">{change24H}%</div>}
      </td>
      <td className="">
        <ButtonLink
          className=""
          size="small"
          type="success"
          variant="ghost"
          color="link"
        >
          Set Alert
        </ButtonLink>
      </td>
    </tr>
    </thead>
  );
}
