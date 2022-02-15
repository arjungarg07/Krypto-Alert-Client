import React from "react";
import Alert from "./Alert";

const AlertList = ({alertsData})=> {
    return(
        <React.Fragment>
        {/* {console.log('alertlist',alertsData)} */}
            {alertsData.map((alert,index)=>(
                <Alert key={index} alert={alert}/>
            ))}
        </React.Fragment>
    )
}

export default AlertList;