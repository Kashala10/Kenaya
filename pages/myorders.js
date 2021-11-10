import { Container, Row, Col,Table,Button } from 'react-bootstrap'
import Layout from '../components/Layout'
import { UserNavbar } from '../components'
import Styles from '../styles/Myorders.module.css'


export default function Myorders() {
	return (
		<Layout>
			<section className={Styles.MyordersSection}>
				<Container>
					<Row>
                        <Col md={5}>
        
                            <UserNavbar/>
                          
                        </Col>
                        <Col md={7}> 
                            <Button className={Styles.Back} >Back</Button>
                            <div className={Styles.Title}>
                                <h2>My Orders</h2>
                            </div>
                        <Container className={Styles.Details}>
                            <div className={Styles.OrderDetails}>
                                <h3>Order No: xxxxxx</h3>
                                <p>Shipped Date: xxxxxx</p>
                            </div>
                            <div className={Styles.DeliveryDetails}>
                                <h3>Delivery Address:</h3>
                                <p>Client Name : xxxxxx</p>
                                <p>Client Number: xxxxxxxxxxx</p>
                                <p>Adress : xxxxxxx</p>
                            </div>
                            <div className={Styles.PaymentDetails}>
                                <h3>Payment Details</h3>
                                <p>Card Derails: xxxxxxxxxxx</p>
                            </div>
                            
                            <div className={Styles.Total}>
                                <h3>Order Total:</h3>
                                <h4>RS 11,992</h4>
                            </div>

                        </Container>


                            <Table className={Styles.Product} responsive = "md" >
                                <thead className={Styles.TableHead}>
                                    <tr>
                                    <th >Items</th>
                                    <th >Descritpion</th>
                                    <th >Size</th>
                                    <th >Quantity</th>
                                    <th >Unit Price</th>
                                    <th >Final Price</th>
                                    </tr>
                                </thead>
                        
                                <tbody>
                                    <tr>
                                    <td > 
                                        <img className={Styles.ProductImage} src="./img/ZinniaDress.jpg" alt="Zinnia Dress" />
                                    
                                    </td>
                                    <td>Zinnia Dress </td>
                                    <td>S</td>
                                    <td>
                                        <div>
                                            <input className={Styles.Input} type="number" value="1" min="0" max="8"></input>
                                        </div>
                                    </td>
                                    <td>Price</td>
                                    <td>Total </td>
                                    </tr>
                                    <tr>
                                    <td>
                                    <img className={Styles.ProductImage} src="./img/JasminePlaysuit2.jpg" alt="Jasmine Playsuit" />
                                    </td>
                                    <td>Jasmine Playsuit </td>
                                    <td>M </td>
                                    <td> 
                                        <div>
                                            <input className={Styles.Input} type="number" value="1" min="0" max="8"></input>
                                        </div>
                                    </td>
                                    <td>Price</td>
                                    <td>Total </td>
                                    </tr>
                                    <tr>
                                    <td>
                                    <img className={Styles.ProductImage} src="./img/AtagaPants3.jpg" alt="Ataga Pants" />
                                    </td>
                                    <td>Ataga Pant </td>
                                    <td>L </td>
                                    <td>
                                        <div>
                                            <input className={Styles.Input} type="number" value="1" min="0" max="8"></input>
                                        </div>
                                    </td>
                                    <td>Price</td>
                                    <td>Total </td>
                                    </tr>
                                </tbody>
                            </Table>
                         <Button className={Styles.Track} >Track Order </Button>
                        </Col>
                    </Row>

                    </Container>
            </section>
		</Layout>
	)
}