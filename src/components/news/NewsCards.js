import React from "react";
import { Button, Card, CardDeck, Col, Row } from "react-bootstrap";

const NewsCards = () => {
    return (
        <>
            <Row>
                <Col md={6} lg={3}>
                    <CardDeck>
                        <Card className="news-card mb-4">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "./images/news/news-1.jpg"} alt="Vintage TV" />
                            <Card.Body className="news-card__body">
                                <Card.Title className="news-card__title">Nunc porttitor vel</Card.Title>
                                <Card.Text className="news-card__text">
                                    Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                            </Card.Body>
                            <Button className="news-card__button">More</Button>
                        </Card>
                    </CardDeck>
                </Col>

                <Col md={6} lg={3}>
                    <CardDeck>
                        <Card className="news-card mb-4">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "./images/news/news-2.jpg"} alt="Vintage Camera" />
                            <Card.Body className="news-card__body">
                                <Card.Title className="news-card__title">Nunc porttitor vel</Card.Title>
                                <Card.Text className="news-card__text">
                                    Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                            </Card.Body>
                            <Button className="news-card__button">More</Button>
                        </Card>
                    </CardDeck>
                </Col>

                <Col md={6} lg={3}>
                    <CardDeck>
                        <Card className="news-card mb-4">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "./images/news/news-3.jpg"} alt="Vintage TV" />
                            <Card.Body className="news-card__body">
                                <Card.Title className="news-card__title">Nunc porttitor vel</Card.Title>
                                <Card.Text className="news-card__text">
                                    Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                            </Card.Body>
                            <Button className="news-card__button">More</Button>
                        </Card>
                    </CardDeck>
                </Col>

                <Col md={6} lg={3}>
                    <CardDeck>
                        <Card className="news-card mb-4">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "./images/news/news-4.jpg"} alt="Vintage Camera" />
                            <Card.Body className="news-card__body">
                                <Card.Title className="news-card__title">Nunc porttitor vel</Card.Title>
                                <Card.Text className="news-card__text">
                                    Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                            </Card.Body>
                            <Button className="news-card__button">More</Button>
                        </Card>
                    </CardDeck>
                </Col>

                <Col md={6} lg={3}>
                    <CardDeck>
                        <Card className="news-card mb-4">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "./images/news/news-5.jpg"} alt="Vintage TV" />
                            <Card.Body className="news-card__body">
                                <Card.Title className="news-card__title">Nunc porttitor vel</Card.Title>
                                <Card.Text className="news-card__text">
                                    Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                            </Card.Body>
                            <Button className="news-card__button">More</Button>
                        </Card>
                    </CardDeck>
                </Col>

                <Col md={6} lg={3}>
                    <CardDeck>
                        <Card className="news-card mb-4">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "./images/news/news-6.jpg"} alt="Vintage Camera" />
                            <Card.Body className="news-card__body">
                                <Card.Title className="news-card__title">Nunc porttitor vel</Card.Title>
                                <Card.Text className="news-card__text">
                                    Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                            </Card.Body>
                            <Button className="news-card__button">More</Button>
                        </Card>
                    </CardDeck>
                </Col>

                <Col md={6} lg={3}>
                    <CardDeck>
                        <Card className="news-card mb-4">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "./images/news/news-7.jpg"} alt="Vintage Video Camera" />
                            <Card.Body className="news-card__body">
                                <Card.Title className="news-card__title">Nunc porttitor vel</Card.Title>
                                <Card.Text className="news-card__text">
                                    Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                            </Card.Body>
                            <Button className="news-card__button">More</Button>
                        </Card>
                    </CardDeck>
                </Col>

                <Col md={6} lg={3}>
                    <CardDeck>
                        <Card className="news-card mb-4">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "./images/news/news-8.jpg"} alt="Vintage Sound Player" />
                            <Card.Body className="news-card__body">
                                <Card.Title className="news-card__title">Nunc porttitor vel</Card.Title>
                                <Card.Text className="news-card__text">
                                    Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                            </Card.Body>
                            <Button className="news-card__button">More</Button>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
        </>
    );
}

export default NewsCards;