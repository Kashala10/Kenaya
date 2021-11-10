import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../components/Layout'

import Styles from '../styles/Home.module.css'

export default function Client() {
	return (
		<Layout>
			<section className={Styles.FeaturesContainer}>
				<Container>
                    <Row>
                        <div className={Styles.FeaturesTitle}>
                            
                        </div>
                    </Row>
				</Container>
			</section>
		</Layout>
	)
}
