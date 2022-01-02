import { Button } from 'antd'
import React from 'react'
import axios from "axios"
import './style.css'

/**
 *
 * @param {String} src
 * @returns {Promise}
 */
const loadScript = src => {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

const __DEV__ = document.domain === 'localhost'
/**
 * 
 * @param {Number} amount 
 * @param {String} applicationId 
 * @param {String} email 
 */
function getOrderId(amount, applicationId, email) {
    var data = JSON.stringify({
        "amount": amount * 100,
        "id": applicationId + "_" + email
    });

    var config = {
        method: 'post',
        url: 'https://0icg981cjj.execute-api.us-east-1.amazonaws.com/d1/payment',
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('id_token')} `,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            return response.id
            // console.log(response.id)
        })
        .catch(function (error) {
            console.log(error);
        });

}

/**
 * Integrating Razorpay payment gateway via this Button. onClick=> will give a ready made UI pop-up.
 * @param {props} object --will have amount and application_id in it
 * @returns {Node} -- UI DIV
 */
export default function PaymentButton(props) {
    const UserMetaData = JSON.parse(sessionStorage.getItem('u_decoded'))

    async function displayRazorpay() {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        const order_id = getOrderId(props.amount, props.applicationId, UserMetaData.email)
        const options = {
            key: __DEV__ ? 'rzp_test_NRrhuDEU5IeRQx' : 'PRODUCTION_KEY',
            currency: 'INR',
            amount: props.amount * 100,
            order_id,
            description: 'Thank you for paying the Fees.You will hear from us soon !',
            handler: function (response) {
                // !DIsCUSS THIS
                console.log(order_id)
                console.log(response.razorpay_payment_id)
            },
            prefill: {
                email: UserMetaData !== null ? UserMetaData.email : '',
                contact: UserMetaData !== null ? parseInt(UserMetaData['phone_number'].substring(3, 13)) : '',
            },
            readonly: {
                email: true,
                contact: true
            }
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }
    return (
        <div>
            <Button type="primary" onClick={displayRazorpay}>
                Pay {props.amount}
            </Button>

        </div>
    )
}
