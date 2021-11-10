import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import StripeCheckout from 'react-stripe-checkout'
import { clearCart } from '../../redux/slices/cart'


const STRIPE_PUBLISHABLE_KEY = `pk_test_51JtqhpIcqjp9zaLavrvXYFONKjKdQ4CT3fL5ELfX6wxjhVWaCmGldA22oWH8dtvh8N9aMz9KjGyv2Fx4iHNlSnsW00KRkUdXeB`;

const CURRENCY = 'USD';

const fromDollarToCent = amount => parseInt(amount * 100);





const Checkout = ({ name, description, amount, label }) => {
    const dispatch = useDispatch()

    const onToken = (amount, description) => token => {
        toast.success('Payment Successful')
        dispatch(clearCart())
        // console.log(token)
    }

    return(
        <StripeCheckout
            label={label}
            name={name}
            description={description}
            amount={fromDollarToCent(amount)}
            token={onToken(amount, description)}
            currency={CURRENCY}
            stripeKey={STRIPE_PUBLISHABLE_KEY}
            zipCode
            email
            allowRememberMe
        />
    )
}

export default Checkout;