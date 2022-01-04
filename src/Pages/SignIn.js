import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import {SocialMediaIconsReact} from 'social-media-icons-react';

function Home() {
    let navigate = useNavigate();
    return (
        <div className='d-flex h-100'>
            <div className='col-12 align-items-center col-md-6 d-flex justify-content-center'>
                <div className="d-flex justify-content-center">
                    <div>
                        <div className="h4 text-start mb-2">
                            Sign In
                        </div>
                        <div className='mb-4'>
                            <span>New User? </span>
                            <span style={{color: 'blue'}}>Create an account</span>
                        </div>
                        <div className="text-start mb-2">
                            <Form onSubmit={() => {
                                navigate("/home");
                            }}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control placeholder='Username or email' style={{bordeRadius: '8px',boxShadow: 'rgb(0 0 0 / 7%) 0px 4px 8px'}} type="email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control placeholder='Password' style={{bordeRadius: '8px',boxShadow: 'rgb(0 0 0 / 7%) 0px 4px 8px'}} type="password"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check style={{fontWeight: '400'}} type="checkbox" label="Keep me Signed In" />
                                </Form.Group>
                                <Button style={{fontWeight: '500'}} className="w-100 btn-grad mb-4" variant="primary" type="submit">
                                    Sign In
                                </Button>
                                <div className='d-flex m-4'>
                                    <div style={{width: '30px', borderBottom: '1px solid'}}></div>
                                    <div>Or Sign in with</div>
                                    <div style={{width: '30px', borderBottom: '1px solid'}}></div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <SocialMediaIconsReact borderColor="rgba(17,17,17,1)" borderWidth="1" borderStyle="solid" icon="googleplus" iconColor="rgba(23,22,22,1)" backgroundColor="rgba(255,255,255,1)" iconSize="2" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />
                                    <SocialMediaIconsReact borderColor="rgba(17,17,17,1)" borderWidth="1" borderStyle="solid" icon="facebook" iconColor="rgba(23,22,22,1)" backgroundColor="rgba(255,255,255,1)" iconSize="2" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />
                                    <SocialMediaIconsReact borderColor="rgba(17,17,17,1)" borderWidth="1" borderStyle="solid" icon="linkedin" iconColor="rgba(23,22,22,1)" backgroundColor="rgba(255,255,255,1)" iconSize="2" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />
                                    <SocialMediaIconsReact borderColor="rgba(17,17,17,1)" borderWidth="1" borderStyle="solid" icon="twitter" iconColor="rgba(23,22,22,1)" backgroundColor="rgba(255,255,255,1)" iconSize="2" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-none d-md-flex align-items-center col-6 justify-content-center'>
                <img alt="signImg" src='/images/image.png'/>
            </div>
        </div>
    )
}

export default Home

