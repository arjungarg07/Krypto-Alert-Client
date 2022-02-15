import { Avatar } from "../../components/Avatar";
import { Container } from "../../components/Layout";
import styles from "./UserHeader.module.css";
import Image from "next/image";
import AlertCards from "../../components/alerts/AlertCards";

const UserHeader = ({user}) => {
  // const userData = JSON.parse(user);
  console.log();
  return (
    <div className="bg-white border m-auto mb-6 rounded shadow-lg w-5/6">
      <h1>
        <div className={styles.name}>{user?.userDetails?.name}</div>
        <div className={styles.username}>@{user?.userDetails?.username}</div>
      </h1>
      {/* <p className={styles.bio}>{',asnksanlasnkasn'}</p> */}
      <div className="flex flex-col ml-5">
        <div className="flex flex-row mt-2">
          <div>
            <Image
              src="/bell-solid.svg"
              className=""
              height="25"
              width="25"
              alt="Bell Icon"
            />
          </div>
          <div>Price Alerts</div>
        </div>
        <div className="flex flex-row mt-3">
          {
            user?.alertDetails ? (<AlertCards alertsData={user?.alertDetails || []}/>) : (<div>No Alerts</div>)
          }
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
