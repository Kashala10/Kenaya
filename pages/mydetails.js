import { Col, Container, Row, Button, Table, Form } from 'react-bootstrap'
import { UserNavbar } from '../components'
import Layout from '../components/Layout'
import Styles from '../styles/Mydetails.module.css'

import Link from 'next/link'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { toast } from 'react-toastify'

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'

export default function Mydetails() {
<<<<<<< HEAD
       
=======


        const dispatch = useDispatch()
        const { query } = useRouter();
        const [user, setUser] = useState({
            id: '',
            name: '',
            phone: '',
            birthday: '',
            email: '',
            city: '',
            state: '',      
            adress: '',
            adress2: '',
            avatar: '',
            zip: ''
        })
        
        useEffect(() => {
    
            if (query.id && user) {
    
                usersService.get(query.id)
                .then(res => {
                    // console.log(res.data)
                    setUser(res.data)
                })
                .catch(err => {
                    toast.error("Failed to load user");
                    console.log(err)
                })
            } 
    
        },[query.id])

        const onSaveChangesClick  = async() => {
            await dispatch(saveUser({
                id: uuidv4(),
                name: user.name,
                mobile: user.mobile,
                birthday: user.birthday,
                email: user.email,
                adress: user.adress,
                adress2: user.adress2,
                avatar: user.avatar,
                zip: user.zip
            }))
            toast.success("User Info Save")
        }

>>>>>>> 3aa099a66293d361ced62b674ae8701173594f1d
	return (
        <Layout>
            <section className={Styles.MydetailsSection}>
                <Container>
                    <Row>
                        <Col md={5}>
                        <UserNavbar/> 
                        </Col>

                        <Col  md={7}>
                            <div className={Styles.Title}>
                                <h3> My Details</h3>
                            </div>
                            <div className={Styles.Form}>
                            <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="" />
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label>Birtday</Form.Label>
                            <Form.Control type="name" placeholder="dd/mm/yyyy" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>

                            <Form.Group as={Col} >
<<<<<<< HEAD
                            <Form.Label>Mobile</Form.Label>
=======
                            <Form.Label>mMbile</Form.Label>
>>>>>>> 3aa099a66293d361ced62b674ae8701173594f1d
                            <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" >
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} >
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Select...</option>
                                <option value="B">Belgium</option>
                                <option value="C">Congo</option>
                                <option value="CA">Canada</option>
                                <option value="I">Italia</option>   
                               <option value="M">Mauritius</option>
                                <option value="S">Spain</option>
                                <option value="U">USA</option>
                            </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Row>

                    </Form>
                                
                            </div>

                                {/* ... */}
<<<<<<< HEAD
                                <Button  variant="primary" type="submitg">
=======
                                <Button onClick={() => onSaveChangesClick()} variant="primary" type="submitg">
>>>>>>> 3aa099a66293d361ced62b674ae8701173594f1d
                                    Save Changes
                                </Button>     
                        </Col>
                    </Row>



                </Container>
            </section>
        </Layout>

        )
    }
    