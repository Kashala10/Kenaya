import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../components/Layout'
import { Delivery, Payment, Cactus, Needle, Play } from '../components/icons'
import Styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<Layout>
			<header className={Styles.Header}>
				<Container>
				<video src="video/homepage.mp4" className={Styles.Video} autoPlay loop muted ></video>
					<div className={Styles.TextContainer}>
						<h3>Best Collection</h3>
						<h1>The Concious Micro Collection</h1>
						{/* <Link href="/">
							<div className={Styles.PlayerIcon}>
								<Play />
							</div>
						</Link> */}
					</div>
					
				</Container>
			</header>
			<section className={Styles.FeaturesContainer}>
				<Container>
					<Row>
						<Col md={3} sm={6}>
							<div className={Styles.Feature}>
								<Delivery />
								<h6>Delivery</h6>
								<p>Delivery Over Island</p>
							</div>
						</Col>
						<Col md={3} sm={6}>
							<div className={Styles.Feature}>
								<Payment />
								<h6>Payment Secure</h6>
								<p>Secure payment insurance</p>
							</div>
						</Col>
						<Col md={3} sm={6}>
							<div className={Styles.Feature}>
								<Cactus />
								<h6>Unique Creation</h6>
								<p>No more than 5/8 pieces per product</p>
							</div>
						</Col>
						<Col md={3} sm={6}>
							<div className={Styles.Feature}>
								<Needle />
								<h6>Locally Made</h6>
								<p>Made by local retailers</p>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	)
}
