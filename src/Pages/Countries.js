import React from 'react'
import { Card } from 'react-bootstrap';

function Countries(props) {
    return (
        <div style={{gap: '20px'}} className='row'>
            {props.loading && <div className='d-flex justify-content-center align-items-center'>
                <div className='h3'> Loading...</div>
                </div>}
            {props.data?.map((x)=>{
                return <Card style={{border: '3px solid #525252', borderRadius: 0}} className='card col-12 col-md-5'>
                    <div className='d-flex'>
                        <div style={{overflow: 'hidden'}} className='col-4 col-md-6'><img alt={x.name} style={{width: '150px'}} src={x.flag}/></div>
                        <div style={{paddingLeft: '15px'}} className='col-6 text-start'>
                            <div className='h5'>
                                {x.name}
                            </div>
                            <div>
                                {x.region}
                            </div>
                        </div>
                    </div>    
                </Card>
            })}
        </div>
    )
}

export default Countries
