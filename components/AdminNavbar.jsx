import Link from 'next/link'
import { Navbar, Container, Nav, } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import Styles from '../styles/Adminnavbar.module.css'

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'

const AdminNavigation = () => {
    const dispatch = useDispatch()
    const { query } = useRouter();
    const [admin, setAdmin] = useState({
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
                serUser(res.data)
            })
            .catch(err => {
                toast.error("Failed to load Admin");
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
            avatar: user.image,
            zip: user.zip
        }))
        toast.success("User Info Save")
    }


    return (
        <Navbar className={Styles.Nav} collapseOnSelect expand="lg" variant="light" >
            <Container>
                <Navbar.Brand href="/">
                    <div className={Styles.ImageContainer}>
                        <img src={user.avatar} alt={user.name} />
                    </div>
                    <div className={Styles.UserName}>
                    <h3 className={Styles.Name}>{user.name}</h3>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <ul>
                                <li>
                                    <Link href="/dashboard">
                                        <a onClick={() => toast.info('dasboard Feature coming soon')} className={Styles.NavLink}>Dashboard</a>
                                    </Link >
                                </li>

                                <li>
                                    <Link href="/orders">
                                        <a onClick={() => toast.info('orders Feature coming soon')} className={Styles.NavLink}>Orders</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/products">
                                      <a className={Styles.NavLink}>Products</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/categories">
                                         <a className={Styles.NavLink} onClick={() => toast.info('Categories Feature coming soon')}>Categories</a>
                                     </Link>
                                
                                </li>

                                <li>
                                <Link href="/collections">
                                    <a onClick={() => toast.info('collection Feature coming soon')} className={Styles.NavLink}>Cards</a>
                                </Link>
                                </li>

                                <li>
                                    <Link href="/users">
                                        <a onClick={() => toast.info('users Feature coming soon')}  className={Styles.NavLink}>Whishlit </a>
                                    </Link>
                                
                                </li>
                                <li>
                                <button  className={Styles.Logout}>Logout </button>
                    
                                </li>
                        </ul>
                        
                        
                       
                        </Nav>
                       
                        
                            
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default  AdminNavigation 
