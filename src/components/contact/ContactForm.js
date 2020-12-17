import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, Col, Row, Form, FormControl, InputGroup } from "react-bootstrap";
import { IconContext } from "react-icons";
import { MdEmail, MdCall, MdPlace } from "react-icons/md";
import ContactError from "./ContactError";

const schema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required.")
        .min(2, "Name must be at least 2 characters."),
    email: yup
        .string()
        .required("Email is required.")
        .email("Email must be entered."),
    website: yup
        .string()
        .required("URL is required.")
        .url("URL must be entered."),
    message: yup
        .string()
        .required("Message is required.")
        .min(10, "Message must be at least 10 characters."),
    checkbox: yup
        .bool()
        .oneOf([true], "Checkbox must be checked.")
});

const ContactForm = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const [validate, setValidate] = useState(false);

    const onSubmit = (data, event) => {
        console.log("data", data);
        setValidate(true);
        event.target.reset();
    }
    return (
        <>
            <Row>

                <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} md={{ span: 8, order: 1 }} lg={{ span: 6, order: 1 }}>
                    <h2 className="contact-header my-3">Submit your details</h2>

                    <Form className="contact-form" onSubmit={handleSubmit(onSubmit)}>

                        {validate &&
                            <Alert variant="success" onClose={() => setValidate(false)} dismissible className="my-3">
                                <Alert.Heading>Thank you!</Alert.Heading>
                                <p>Your message has been successfully sent. We will contact you very soon!</p>
                            </Alert>
                        }

                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Enter your name" ref={register} />
                            {errors.name && <ContactError>{errors.name.message}</ContactError>}
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="text" placeholder="Enter your email" ref={register} />
                            {errors.email && <ContactError>{errors.email.message}</ContactError>}
                        </Form.Group>

                        <Form.Group controlId="formWebsite">
                            <Form.Label>Website</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon" className="contact-form__input">https://</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name="website" placeholder="Enter your website url" ref={register} aria-label="" aria-describedby="basic-addon" />
                            </InputGroup>
                            {errors.website && <ContactError>{errors.website.message}</ContactError>}
                        </Form.Group>

                        <Form.Group controlId="FormMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control name="message" as="textarea" placeholder="Enter your message" ref={register} />
                            {errors.message && <ContactError>{errors.message.message}</ContactError>}
                        </Form.Group>

                        <Form.Group controlId="formCheckbox">
                            <Form.Check name="checkbox" type="checkbox" label="Allow us to sell your personal details to whomever we want" ref={register} />
                            {errors.checkbox && <ContactError>{errors.checkbox.message}</ContactError>}
                        </Form.Group>
                        <Button type="submit" size="lg" block className="contact-form__button"> Submit </Button>
                    </Form>
                </Col>

                <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 4, order: 2 }} lg={{ span: 6, order: 2 }}>
                    <div className="contact-list my-5">

                        <IconContext.Provider value={{ size: "2em", color: "#767676", className: "contact-list__item" }}>
                            <div>
                                <MdEmail className="mr-3" />hello@yay.com
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ size: "2em", color: "#767676", className: "contact-list__item" }}>
                            <div>
                                <MdCall className="mr-3" />123 456 789
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ size: "2em", color: "#767676", className: "contact-list__item" }}>
                            <div>
                                <MdPlace className="mr-3" />
                            123 Some Street Somewhere Some City 10000
                            </div>
                        </IconContext.Provider>
                    </div>
                </Col>

            </Row>
        </>
    );
}

export default ContactForm;
