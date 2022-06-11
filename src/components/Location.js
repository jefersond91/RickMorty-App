import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';

const Location = ({locationName}) => {

    const [location, setLocation] = useState({})

    const [id, setId] = useState("")

    useEffect(()=>{

        const randomId = Math.floor(Math.random()* 126) +1

        axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
        .then(res => setLocation(res.data))

    }, [])

    const searchLocation = ()=> {
        if(id <= 126){
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res => setLocation(res.data))
        }else{
            alert("Choose a number between 1 and 126")
        }
    }

    const [page, setPage] = useState(1);

    const residentNumbers = 6;
    const lastIndex = residentNumbers * page;
    const firstIndex = lastIndex - residentNumbers;
    const residentPaginated = location.residents?.slice(firstIndex, lastIndex);
    
    const lastPage = Math.ceil(location.residents?.length / residentNumbers);
    
    const numbers = [];
    for (let i = 1; i <= lastPage; i++) {
        numbers.push(i);
    }
        

    return (
        <div>
            <div className='searchInput'>
                <input className='input' type="text" onChange={e => setId(e.target.value)} value={id} placeholder="Choose a number between 1 and 126"/>
                <button onClick={searchLocation}>
                    Search
                </button>
            </div>
            <header className="header">
            </header>
            <div className='generalInfo'>
                <h2>{location.name}</h2>
                <article className='specificInfo'>
                    <p ><b>Type: </b>{location.type}</p >
                    <p ><b>Dimension: </b>{location.dimension}</p >
                    <p ><b>Residents: </b>{location.residents?.length}</p >
                </article>
            </div>

            <ul className='resident-list'>
                {residentPaginated?.map(resident => (
                    <ResidentInfo url = {resident} key={resident} />
                ))}
            </ul>
            <div className='paginated'>
                <button className='paginated-button' onClick={() => setPage(page - 1)} disabled={page === 1}>
                    Prev
                </button>
                
                {numbers.map((number) => (
                <button onClick={() => setPage(number)} key={number}>{number}</button>
                ))}
                
                <button className='paginated-button' onClick={() => setPage(page + 1)} disabled={page === lastPage}>
                Next
                </button>
            </div>
        </div>
    );
};

export default Location;