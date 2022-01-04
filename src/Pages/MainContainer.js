import React, { useEffect, useState } from 'react'
import axios from "axios";
import Countries from './Countries';
import { Tabs, Tab } from 'react-bootstrap';
import _ from 'lodash'
import {SocialMediaIconsReact} from 'social-media-icons-react';

function MainContainer() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://restcountries.com/v2/all?fields=name,region,flag',
        }).then((response)=>{
            setData(response.data)
            setLoading(false)
        })
    },[]);
    console.log(data,'rrrr')
    return (
        <div className='h-100 mainPage'>
            <div>
                <div className='h5 text-start'>
                    Countries
                </div>
            </div>
            <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className=" custom-tab mb-3 justify-content-end">
                <Tab eventKey="all" title="All">
                    <Countries loading={loading} data={data} />
                </Tab>
                <Tab eventKey="asia" title="Asia">
                    <Countries loading={loading}  data={_.filter(data, function(o) { return o.region === "Asia" })}/>
                </Tab>
                <Tab eventKey="europe" title="Europe">
                    <Countries loading={loading}  data={_.filter(data, function(o) { return o.region === "Europe" })}/>
                </Tab>
            </Tabs>  
            <footer>
                <div className='mt-3'>
                    <div className='col-12 d-flex justify-content-center'>
                        <SocialMediaIconsReact borderColor="rgba(17,17,17,1)" borderWidth="1" borderStyle="solid" icon="googleplus" iconColor="rgba(23,22,22,1)" backgroundColor="rgba(255,255,255,1)" iconSize="2" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />
                        <SocialMediaIconsReact borderColor="rgba(17,17,17,1)" borderWidth="1" borderStyle="solid" icon="facebook" iconColor="rgba(23,22,22,1)" backgroundColor="rgba(255,255,255,1)" iconSize="2" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />
                        <SocialMediaIconsReact borderColor="rgba(17,17,17,1)" borderWidth="1" borderStyle="solid" icon="linkedin" iconColor="rgba(23,22,22,1)" backgroundColor="rgba(255,255,255,1)" iconSize="2" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />
                        <SocialMediaIconsReact borderColor="rgba(17,17,17,1)" borderWidth="1" borderStyle="solid" icon="twitter" iconColor="rgba(23,22,22,1)" backgroundColor="rgba(255,255,255,1)" iconSize="2" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />
                    </div>
                    <div>
                        <div className='h6 m-4'>example@email.com</div>
                        <div className='h6 m-4'>Copyright © 2020 Name. All rights reserved.</div>
                    </div>
                </div>
            </footer>          
        </div>
    )
}

export default MainContainer

