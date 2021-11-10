import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'
import Slider from 'react-slick'
import Layout from '../components/Layout'
import Styles from '../styles/Shop.module.css'

import { useEffect } from 'react'
import  productsService from '../services/products.service'

export default function Shop() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {

        productsService.getAll()
        .then(res => {
            console.log(res.data)
            setProducts(res)
            setLoading(false)
        })
        .catch(err => {
            toast.error("Failed to load products");
            console.log(err)
        })
    },[])

    const settings = {
        focusOnSelect: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500
    }

<<<<<<< HEAD
 
=======
    const location = userLocation();
    console.log(location.pathname.split("/")[2]); 

    const [filter,setFilters]= useState({})

    const handleFilters = (e) =>{
        const value = e.taget.value;
        setFilters({
            [e.target.name]: value,
        });
    };

    console.log(filter)

>>>>>>> 3aa099a66293d361ced62b674ae8701173594f1d

	return (
		<Layout>
            <Head>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>

			<section className={Styles.ShopSection}>
				<Container>
                    <div className={Styles.FormContainer}>
                        <Form>
                            <Row>
                                <Col md={3}>
                                    <Form.Group className={Styles.Mb}>
                                        <Form.Label>Shop</Form.Label>
<<<<<<< HEAD
                                        <Form.Select className={Styles.categories}  size="lg">
=======
                                        <Form.Select className={Styles.categories} onChange={handleFilters} size="lg">
>>>>>>> 3aa099a66293d361ced62b674ae8701173594f1d
                                            <option>All</option>
                                            <option>Dress</option>
                                            <option>Top</option>
                                            <option>Bottom</option>
                                            <option>Jumpsuit</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Label>Collection</Form.Label>
<<<<<<< HEAD
                                    <Form.Select className={Styles.Collections} size="lg">
=======
                                    <Form.Select className={Styles.Collections} onChange={handleFilters} size="lg">
>>>>>>> 3aa099a66293d361ced62b674ae8701173594f1d
                                        <option>All</option>
                                        <option>Oasis</option>
                                        <option>Blossom</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form>
                    </div>
				</Container>
                    {loading ? (
                        <Container>
                            <div className={Styles.Loading}>Loading...</div>
                        </Container>
                    ) : (
                        <Container fluid>
                            <div className={Styles.ProductContainer}>
                                <Slider {...settings}>
                                    {(products.data || []).map((product, index) => (
                                        <div key={index} className={Styles.Slide}>
                                            <img src={product.imageUrl} alt={product.name}/>
                                            <div className={Styles.TagContainer}>
                                                <div>
                                                    <h3>{product.name}</h3>
                                                    <p className={Styles.CollectionName}>{product.collection}</p>
                                                </div>
                                                <div>
                                                    <p className={Styles.Price}>{product.currencyFormat} {product.price}</p>
                                                    <Link href={{ pathname: 'product', query: {id: index} }}><a className="btn block-btn">Shop Now</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </Container>
                    )}
                
			</section>
		</Layout>
	)
}
