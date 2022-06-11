import React, { useState,useEffect } from 'react';
import axios from 'axios';

const ResidentInfo = ({url}) => {

    const [resident, setResident] = useState({})
    const [colorStatus, setColorStatus] = useState("green")

    useEffect(()=> {
        axios.get(url)
        .then(res => setResident(res.data))

        if (resident?.status === "Alive") {
            setColorStatus("green")
        }else if (resident?.status === "Dead") {
            setColorStatus("red")
        }else{
            setColorStatus("gray")
        }
    }, [url, resident?.status])
    console.log(resident)


    return (
        <li>
            <div className='card'>
                <div className={`status ${colorStatus}`}>
                    <p>{resident.status}</p>
                </div>
                <h3>{resident.name}</h3>
                <img src={resident.image} alt=""/>

                <hr className='text-ligth'/>
                
                <h4> <strong>Origin: </strong></h4>
                <p>{resident.origin?.name}</p>
                <h4> <strong>Specie: </strong></h4>
                <p>{resident.species}</p>
                <h4> <strong># Episodes: </strong></h4>
                <p>{resident.episode?.length}</p>
            </div>
        </li>
    );
};

export default ResidentInfo;