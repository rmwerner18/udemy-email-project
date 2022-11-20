import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import * as actions from '../actions'
import { useDispatch } from 'react-redux'

const Payments = props => {
 const dispatch = useDispatch()
 return (
  <StripeCheckout 
   name='emaily'
   description='$5 for 5 email credits'
   amount={500}
   token={token => dispatch(actions.handleToken(token))}
   stripeKey={process.env.REACT_APP_STRIPE_KEY}
  >
   <button className='btn'>Add Credits</button>
  </StripeCheckout>
 )
}

export default Payments