import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'


import { BsFacebook, BsLinkedin, BsTwitter, BsGoogle, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <>
                <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className=''>
                            <h3 className='head_3'>Follow us :- </h3>
                            <ul className='socialIconsList'>
                                <li>
                                    <a rel="noreferrer" href="#" target="_blank">
                                        <BsFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="#" target="_blank">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="#" target="_blank">
                                        <BsTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="#" target="_blank">
                                        <BsGoogle />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="#" target="_blank">
                                        <BsGithub />
                                    </a>
                                </li>
                            </ul>
                            
                        </Col>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small>© Copyright 2023. Developed and Designed  by <a href="" target="_blank" rel="noreferrer">DS-Design</a>.</small>
                            </div>
                        </Col>
                   </Row>
                </Container>
            </footer>
    </>
  )
}

export default Footer