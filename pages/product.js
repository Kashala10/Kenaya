
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

import Layout from '../components/Layout'
import Styles from '../styles/Product.module.css'
import { Heart } from '../components/icons'
import  productsService from '../services/products.service'
import Checkout from '../components/stripe/Checkout'
import { addProduct } from '../redux/slices/cart'


export default function Product() {
    const dispatch = useDispatch()
    const { query } = useRouter();
    const [product, setProduct] = useState({
        id: '',
        name: '',
        description: '',
        price: '',
        imageUrl: '',
        availableSizes: [],
        wearing: ''
    })
    const [size, setSize] = useState('S')
    

    useEffect(() => {

        if (query.id && product) {

            productsService.get(query.id)
            .then(res => {
                // console.log(res.data)
                setProduct(res.data)
            })
            .catch(err => {
                toast.error("Failed to load product");
                console.log(err)
            })
        } 

    },[query.id])

    const onAddToCartClick  = async() => {
        await dispatch(addProduct({
            id: uuidv4(),
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
            size: size,
            description: product.description
        }))
        toast.success("Item added to cart")
    }

	return (
		<Layout>
			<section className={Styles.ProductSection}>
                <Container>
                    <div className={Styles.ProductContainer}>
                        <Row>
                            <Col md={6}>
                                <div className={Styles.ImageContainer}>
                                    <img src={product.imageUrl} alt={product.name} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className={Styles.Content}>
                                    <h3 className={Styles.Name}>{product.name}</h3>
                                    <p className={Styles.Collection}>Collection: {product.collection}</p>
                                    <p className={Styles.Price}>{product.currencyFormat} {product.price}</p>
                                    <p className={Styles.Description}>{product.description}</p>

                                    <div>
                                        <Form>
                                            <Row>
                                                <Col md={6}>
                                                    <Form.Label>Size:</Form.Label>
                                                    <Form.Select size="lg" onChange={(e) => setSize(e.target.value)}>
                                                        {product.availableSizes.map(size => ( <option value={size} key={size}>{size}</option> ))}
                                                    </Form.Select>
                                                </Col>

                                                <Col md={6}>
                                                <Button onClick={() => toast.info('Wishlists coming soon')} className={Styles.Wishlist}> <Heart />  Add to wishlist</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>

                                    <div className={Styles.ButtonGroup}>
                                        <Checkout
                                            label="Buy Now"
                                            className={Styles.Btn}
                                            name={'Kenaya E-market'}
                                            description={product.description}
                                            amount={product.price * 0.023}
                                        />
                                        <button onClick={() => onAddToCartClick()} className={Styles.Btn}>Add to Cart</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
			</section>
		</Layout>
	)
}


// Product.getInitialProps = async ({query}) => {
//     return {query}
// }

