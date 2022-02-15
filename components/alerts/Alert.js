import Image from "next/image";
// coin: "BTC"
// isDrop: false
// isSent: false
// triggerPrice: "212121"
// updated: "2021-10-21T04:43:45.637Z"
// userId: "616eba744eacbc4f1dcbd5ad"
// __v: 0
// _id: "6170f0019733e95abbb75d35"
// every alert card would be a modal which can be edited and saved
// const deleteAlert = (id) => {
//   const token = localStorage.getItem("token");
//   const config = {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   fetch(`/api/alerts/${id}`, config)  
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => console.log(err));
// };

const Alert = ({ alert }) => {
  console.log("alertlist", alert);
  return (
    <div>
      <div className="bg-white p-6 shadow-md border border-gray-200 rounded-lg max-w-sm">
        <a href="#">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {alert?.coin}
          </h5>
        </a>
        <p className="font-normal text-gray-700 mb-3">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
        >
          Read more
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Alert;
