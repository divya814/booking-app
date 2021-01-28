import React from 'react'
import {
  Container,
  Form,
  Button,
  FormGroup,
  Label,
  Col,
  Input,
  Row,
  Card,
  CardBody,
  CardFooter,
  CardHeader
} from "reactstrap";
import {FaSearch} from "react-icons/fa"

const FormCard = () =>{
  return(
        
    <Container className="text-center mt-3">
        <Row>
            <Col lg={6} className="offset-lg-3">
                <Card>
                    <Form>
                        <CardHeader style={{background: "linear-gradient(to right, #FD297A, #5737D6)"}} className="text-light m-3">
                            <h5>Vacation Rentals in INDIA</h5>
                        </CardHeader>
                        <h5 className="p-1">Find and book best accommodation at Airbnb</h5>
                        <CardBody>            
                            <FormGroup row>
                                <Label for="checkIn" sm={4}>
                                    Check In
                                </Label>
                                <Col sm={8}>
                                    <Input
                                    type="date"
                                    name="checkIn"
                                    id="checkIn"
                                    placeholder="Add Date"
                                
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="checkOut" sm={4}>
                                    Check Out
                                </Label>
                                <Col sm={8}>
                                    <Input
                                    type="date"
                                    name="checkOut"
                                    id="checkOut"
                                    placeholder="Add Date"
                                    
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="adult" sm={4}>
                                    Adults
                                </Label>
                                <Col sm={8}>
                                    <Input
                                    type="number"
                                    name="adult"
                                    id="adult"
                                    placeholder="Number of Adults"
                                    min="0"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="child" sm={4}>
                                    Children
                                </Label>
                                <Col sm={8}>
                                    <Input
                                    type="number"
                                    name="child"
                                    id="child"
                                    placeholder="Number of children"
                                    min="0"
                                
                                    />
                                </Col>
                            </FormGroup>
                            <Button style={{background: "linear-gradient(to right,  #FD297A, #5737D6)"}} type="submit" block className="mt-2">
                                <h5><FaSearch className="mr-2"></FaSearch>Search</h5>
                            </Button>
                        </CardBody>
                    </Form>
                </Card>
            </Col>
        </Row>
    </Container>
 
    );
  }

export default FormCard
