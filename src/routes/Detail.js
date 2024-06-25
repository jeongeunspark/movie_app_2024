import React, {useEffect} from "react";
import { useLocation, useNavigate } from 'react-router-dom';

function Detail() {
    const location = useLocation();
    const nevigate = useNavigate();

    useEffect(() => {
        if (location.state == null) {
            return nevigate('/')
        }
    },[])

    if (location.state) {
        return <span>{location.state.title}</span>;
    } else {
        return null;
    }
}

export default Detail;