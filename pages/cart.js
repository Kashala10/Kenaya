import Link from 'next/link'
import { Col, Container, Row, Table, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import Layout from '../components/Layout'
import Styles from '../styles/Cart.module.css'
import { Bin } from '../components/icons'

import Checkout from '../components/stripe/Checkout'
import { removeItem } from '../redux/slices/cart'
import { Fragment } from 'react'


export default function Cart() {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    // console.log(cart)

    const amountFormatter = (amount) => {
        return parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(product => {
            total += parseFloat(product.price)
        })
        console.log(total)
        return total
    }

    const removeProductHandler = (id) => {
        dispatch(removeItem(id))
        toast.success('Product removed from cart')
    }

    return (
        <Layout>
            <section className={Styles.CartSection}>
                <Container>
                    <Row>
                        <div className={Styles.Title}>
                            <h6> My Cart </h6>
                        </div>
                        <Table className={Styles.Product} responsive="md" >
                            <thead className={Styles.TableHead}>
                                <tr>
                                    <th >Items</th>
                                    <th >Descritpion</th>
                                    <th >Size</th>
                                    <th >Quantity</th>
                                    <th >Unit Price</th>
                                    <th >Final Price</th>
                                    <th >Remove</th>
                                </tr>
                            </thead>

                            <tbody>
    
                                {cart.slice(0).reverse().map(item => (
                                    <tr key={item.id}>
                                        <td colSpan="1">
                                            <img className={Styles.ProductImage} src={item.imageUrl} alt={item.name} />    
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.size}</td>
                                        <td>
                                            <div>
                                                <input className={Styles.Input} type="text" style={{textAlign: 'center'}} value={1} min="0" max="8" readOnly />
                                            </div>
                                        </td>
                                        <td>{item.price}</td>
                                        <td>{item.price}</td>
                                        <td> 
                                            <Button onClick={() => removeProductHandler(item.id)} variant=""><Bin /></Button>{' '} 
                                        </td>
                                    </tr>
                                ))}

                                {cart.length === 0 &&(
                                    <tr>
                                        <td colSpan="7" className={Styles.Empty} style={{textAlign:'center', paddingTop:80, paddingBottom: 80}}>
                                            <h6>Your cart is empty</h6>
                                            <Link href="/shop">
                                                <a>
                                                    <Button className={Styles.ContinueEmpty} variant="outline-primary"  >
                                                        <span> Continue Shopping</span>
                                                    </Button>
                                                </a>
                                            </Link>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Row>

                    {
                        cart.length > 0 && (
                            <Fragment>
                                <Row className={Styles.Payment}>
                                    <Table >
                                        <tr>
                                            <td>Subtotal:</td>
                                            <td>Rs {amountFormatter(getTotal())} </td>
                                        </tr>
                                        <tr>
                                            <td>Shipping:</td>
                                            <td>Rs O.OO</td>
                                        </tr>
                                        <tr>
                                            <td>Total:</td>
                                            <td>Rs {amountFormatter(getTotal())}</td>
                                        </tr>

                                        <Checkout
                                            label="Pay"
                                            className={Styles.Pay}
                                            name={'Kenaya E-market'}
                                            description={'Shopping cart checkout'}
                                            amount={getTotal() * 0.023}
                                        />
                                    </Table>
                                </Row>

                                <Row>
                                    <Col>
                                        <Link href="/shop">
                                            <Button 
                                                variant="" 
                                                className={Styles.ContinueShop}> 
                                                Continue To Shop
                                            </Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </Fragment>
                        )
                    }
                </Container>
            </section>
        </Layout>
    )
}