import { Col, Container, Row, Table, Button } from 'react-bootstrap'
import Layout from '../components/Layout'
import Styles from '../styles/Wishlist.module.css'
import { Bag, Bin } from '../components/icons'
import { UserNavbar } from '../components'


export default function Whishlist(){

return(
    <Layout>
        <section className={Styles.WhishlistSection}>
            <Container>
                <Row>
                    <Col md={5}>
                    <UserNavbar/>
                    </Col>
                    
                    <Col md={7} >
                        <div className={Styles.Title}>
                            <h3> My Whishlist </h3>
                        </div>
                                <Table className={Styles.Product} responsive = "md" >
                                    <thead className={Styles.TableHead}>
                                        <tr>
                                        <th >Items</th>
                                        <th >Descritpion</th>
                                        <th >Size</th>
                                        <th >Quantity</th>
                                        <th >Stock Status</th>
                                        <th >Unit Price</th>
                                        
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
                                        <td>In Stock</td>
                                        <td>Price </td>
                                        <td> 
                                            <Button variant="">  <Bin/></Button>{' '}
                                            <Button variant=""> + <Bag/></Button>{' '}
                                        
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                        <img className={Styles.ProductImage} src="./img/JasminePlaysuit2.jpg" alt="Zinnia Dress" />
                                        </td>
                                        <td>Jasmine Playsuit </td>
                                        <td>M </td>
                                        <td> 
                                            <div>
                                                <input className={Styles.Input} type="number" value="1" min="0" max="8"></input>
                                            </div>
                                        </td>
                                        <td>In Stock</td>
                                        <td>Price </td>
                                        <td>
                                            <Button variant="">  <Bin/></Button>{' '}
                                            <Button variant=""> + <Bag/></Button>{' '}
                                        </td>
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
                                        <td>In Stock</td>
                                        <td>Price</td>
                                        <td>
                                            <Button variant="">  <Bin/></Button>{' '}
                                            <Button variant=""> + <Bag/></Button>{' '}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            
                            
                            <Row className={Styles.Payment}>
                                <Table >
                                    <tr>
                                        <td>Subtotal:</td>
                                        <td>Rs .... </td>
                                    </tr>
                                    <tr>
                                        <td>Shipping:</td>
                                        <td>Rs O.OO</td>
                                    </tr>
                                    <tr>
                                        <td>Total:</td>
                                        <td>Rs ....</td>
                                    </tr>
                                </Table>
                            </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    </Layout>
)
}