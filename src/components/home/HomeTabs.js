import React from "react";
import { Accordion, Card, Tab, Tabs } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const HomeTabs = () => {
    return (
        <>
            <div className="d-md-none my-5">
                <Accordion className="home-accordion" defaultActiveKey="0" >
                    <Card>
                        <Accordion.Toggle as={Card.Header} className="home-accordion__header" eventKey="0">First</Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="home-accordion__body">
                                <p>
                                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.
                                    Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                                </p>

                                <img src={process.env.PUBLIC_URL + "./images/tab/tab-1.jpg"} alt="Vintage TV" />

                                <IconContext.Provider value={{ size: "1.5em", className: "home-accordion__social" }}>
                                    <div className="my-3">
                                        SHARE <FaFacebookF className="mx-3" /> <FaTwitter />
                                    </div>
                                </IconContext.Provider>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} className="home-accordion__header" eventKey="1">Second</Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="home-accordion__body">
                                <p>
                                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.
                                    Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                                </p>

                                <img src={process.env.PUBLIC_URL + "./images/tab/tab-2.jpg"} alt="Vintage TV" />

                                <IconContext.Provider value={{ size: "1.5em", className: "home-accordion__social" }}>
                                    <div className="my-3">
                                        SHARE <FaFacebookF className="mx-3" /> <FaTwitter />
                                    </div>
                                </IconContext.Provider>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} className="home-accordion__header" eventKey="2">Third</Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body className="home-accordion__body">
                                <p>
                                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.
                                    Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                                </p>

                                <img src={process.env.PUBLIC_URL + "./images/tab/tab-3.jpg"} alt="Vintage TV" />

                                <IconContext.Provider value={{ size: "1.5em", className: "home-accordion__social" }}>
                                    <div className="my-3">
                                        SHARE <FaFacebookF className="mx-3" /> <FaTwitter />
                                    </div>
                                </IconContext.Provider>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>


            <div className="d-none d-md-block my-5">
                <Tabs className="home-tab" defaultActiveKey="First" id="tabs">
                    <Tab eventKey="First" title="First">
                        <div className="home-tab__body">
                            <img src={process.env.PUBLIC_URL + "./images/tab/tab-1.jpg"} alt="Vintage TV" />
                            <div className="home-tab__content">
                                <p>
                                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.
                                    Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                                </p>

                                <IconContext.Provider value={{ size: "1.5em", className: "home-tab__social" }}>
                                    <div>
                                        SHARE <FaFacebookF className="mx-3" /> <FaTwitter />
                                    </div>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="Second" title="Second">
                        <div className="home-tab__body">
                            <img src={process.env.PUBLIC_URL + "./images/tab/tab-2.jpg"} alt="Vintage TV" />
                            <div className="home-tab__content">
                                <p>
                                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.
                                    Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                                </p>

                                <IconContext.Provider value={{ size: "1.5em", className: "home-tab__social" }}>
                                    <div>
                                        SHARE <FaFacebookF className="mx-3" /> <FaTwitter />
                                    </div>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="Third" title="Third">
                        <div className="home-tab__body">
                            <img src={process.env.PUBLIC_URL + "./images/tab/tab-3.jpg"} alt="Vintage TV" />
                            <div className="home-tab__content">
                                <p>
                                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.
                                    Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                                </p>

                                <IconContext.Provider value={{ size: "1.5em", className: "home-tab__social" }}>
                                    <div>
                                        SHARE <FaFacebookF className="mx-3" /> <FaTwitter />
                                    </div>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}
export default HomeTabs;