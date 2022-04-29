import React from "react";
import {useLocation} from "react-router-dom";

const OtherProfile = () => {
    const location = useLocation();
    console.log(location.pathname)
    return(
        <>My Profile</>
    )
}

export default OtherProfile;