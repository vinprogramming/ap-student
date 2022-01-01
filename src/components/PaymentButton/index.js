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

function getOrderId(amount) {
    var data = JSON.stringify({
        "amount": amount
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
 * @param {Number} amount --get from Backend via API call to lambda
 * @returns {Node} -- UI DIV
 */
export default function PaymentButton(props) {
    const UserMetaData = sessionStorage.getItem('u_decoded')
    async function displayRazorpay() {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        const options = {
            key: __DEV__ ? 'rzp_test_NRrhuDEU5IeRQx' : 'PRODUCTION_KEY',
            currency: 'INR',
            amount: props.amount * 100,
            order_id: getOrderId(props.amount),
            description: 'Thank you for paying the Fees.You will hear from us soon !',
            handler: function (response) {
                alert(response.razorpay_payment_id)
                alert(response.razorpay_order_id)
                alert(response.razorpay_signature)
            },
            prefill: {
                // !CHANGE THIS
                email: UserMetaData !== null ? UserMetaData.email : '',
                phone_number: UserMetaData !== null ? UserMetaData.phone_number : '',
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
