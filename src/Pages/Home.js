import React, { useEffect, useState } from 'react'
import axios from "axios";
import MainContainer from './MainContainer'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Home() {
    const [data, setData] = useState(0);
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099',
        }).then((response)=>{
            console.log(response)
            setData(response.data[0])
        })
    },[]);
    return (
        <div>
            <div className='d-flex justify-content-between p-3'>  
                <div className='align-items-center d-flex h4'>
                    <div className='p-2 d-block d-md-none'>
                        <ArrowBackIcon/>
                    </div>
                    UNI Resto Cafe
                </div>
                <div className='d-flex'>
                    <div className='h6 p-1'>
                        My Orders
                    </div>
                    <div>
                        <ShoppingCartIcon/>
                    </div>
                </div>
            </div>
            <MainContainer data={data}/>
        </div>
    )
}

export default Home

