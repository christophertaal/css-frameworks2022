import carousel_img_1 from '../images/carousel/carousel-1.jpg';
import carousel_img_2 from '../images/carousel/carousel-2.jpg';
import carousel_img_3 from '../images/carousel/carousel-3.jpg';
import tab_img_1 from '../images/tab/tab-1.jpg';
import tab_img_2 from '../images/tab/tab-2.jpg';
import tab_img_3 from '../images/tab/tab-3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const Home = () => {
    return (
    <div>
        <section id="main">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-img"
                    src={carousel_img_1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-img"
                    src={carousel_img_2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-img"
                    src={carousel_img_3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <h1 id="main-header" className="pt-5">We do YAY things</h1>
            <p id="main-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                    <div id="flex-tab" className='d-flex flex-row'>
                            <div className="pe-5">
                                <img src={tab_img_1} className="tab-img img-fluid"/>
                            </div>
                            <div>
                                <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error porro voluptatum aperiam nam, sapiente officiis ut consequatur laudantium nulla dolor eaque obcaecati ipsa itaque possimus beatae rem natus voluptates debitis.
                                </p>
                                <div className="tab-icons">
                                    <a href="" className="pe-2">SHARE</a>
                                    <a><i className="fab fa-facebook-f pe-2"></i></a>
                                    <a><i className="fab fa-twitter pe-2"></i></a>
                                </div> 
                            </div>             
                    </div>  
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                    <div id="flex-tab1" className='d-flex flex-row'>
                        <div className="pe-5">
                            <img src={tab_img_2} className="tab-img img-fluid"/>
                        </div>
                        <div>
                            <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error porro voluptatum aperiam nam, sapiente officiis ut consequatur laudantium nulla dolor eaque obcaecati ipsa itaque possimus beatae rem natus voluptates debitis.
                            </p>
                            <div className="tab-icons">
                                <a href="" className='pe-2'>SHARE</a>
                                <a><i className="fab fa-facebook-f pe-2"></i></a>
                                <a><i className="fab fa-twitter pe-2"></i></a>
                            </div> 
                        </div>             
                    </div>  
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                    <div id="flex-tab2" className='d-flex flex-row'>
                        <div className="pe-5">
                            <img src={tab_img_3} className="tab-img img-fluid"/>
                        </div>
                        <div>
                            <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error porro voluptatum aperiam nam, sapiente officiis ut consequatur laudantium nulla dolor eaque obcaecati ipsa itaque possimus beatae rem natus voluptates debitis.
                            </p>
                            <div className="tab-icons">
                                <a href="" className='pe-2'>SHARE</a>
                                <a><i className="fab fa-facebook-f pe-2"></i></a>
                                <a><i className="fab fa-twitter pe-2"></i></a>
                            </div> 
                        </div>             
                    </div>  
                    </Tab>
                </Tabs>
        </section>


    </div>
    );
}

export default Home;