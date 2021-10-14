// create a crypto currency table component
import CurrencyList from "./CurrencyList";
import { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";
import loading from "../public/loading.svg";
import Image from "next/image";
import React from "react";
import search from "../public/search.svg";
import coinData from '../data.json';
const CurrencyTable = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // const result = await fetch("http://localhost:8000/api/v1/data/top");
      // const json = await result.json();
      // const data = json.data;
      setCoins(coinData.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 border shadow-lg rounded ">
          <div className="flex justify-between items-center px-6 pt-5 pb-4">
            <div className="font-bold mx-64 ml-0 relative text-2xl">Market</div>
            <div className="flex focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg appearance-none leading-normal">
              <Image src={search} className="w-8 h-8 ml-4" alt="search-icon" />
              <input
                className="bg-white  py-2 px-4 block w-full"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
          {/* <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  Page Visits
                </h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <button
                  className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  See all
                </button>
              </div>
            </div>
          </div> */}
          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse table-fixed">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Coins
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Price
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    24H Change
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Set Alert
                  </th>
                </tr>
              </thead>
              {isLoading ? (
                <div className="">
                  <Image
                    className="py-72 bg-gray-100"
                    src={loading}
                    alt="Loading..."
                  />
                  </div>
              ) : (
                <CurrencyList coinsData={coins} className="" />
              )}
              {/* <tbody className="bg-black">
              </tbody> */}
            </table>
            <div className="border border-blue-400 cursor-pointer font-medium rounded text-center">More</div>
          </div>
        </div>
      </div>
      {/* <footer className="relative pt-8 pb-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Made with{" "}
                 <a
                  href="https://www.creative-tim.com/product/notus-js"
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                >
                  Notus JS
                </a>{" "}
                by{" "}
                <a
                  href="https://www.creative-tim.com"
                  className="text-blueGray-500 hover:text-blueGray-800"
                  target="_blank"
                > 
                Creative Tim
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </section>
  );
};

export default CurrencyTable;
