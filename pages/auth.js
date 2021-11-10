import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import Layout from '../components/Layout'
import { SignInForm, SignUpForm } from '../components'
import Styles from '../styles/Auth.module.css'

export default function Auth() {
	return (
		<Layout>
			<section className={Styles.UserSection}>
                <div className={Styles.AuthSections}>
                    <Tab.Container  defaultActiveKey="sign-in">
                        <div className="auth-nav">
                            <Nav fill variant="tabs">
                                <Nav.Item>
                                    <Nav.Link 
                                        className={Styles.NavItem} 
                                        eventKey="sign-in">Sign in
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link 
                                        className={Styles.NavItem} 
                                        eventKey="sign-up">Sign up
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>

                        <Tab.Content>
                            <Tab.Pane eventKey="sign-in" title="Sign In">
                                <Container>
                                    <div className={Styles.AuthSection}>
                                       <SignInForm />
                                    </div>
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="sign-up" title="Sign Up">
                                <Container>
                                    <div className={Styles.AuthSection}>
                                        <SignUpForm />
                                    </div>
                                </Container>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
			</section>
		</Layout>
	)
}
