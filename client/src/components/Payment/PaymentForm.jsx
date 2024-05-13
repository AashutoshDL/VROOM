import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentForm = () => {
    const [amount, setAmount] = useState('100'); // Fixed amount
    const [transactionUUID, setTransactionUUID] = useState('12345-67890'); // Fixed transaction UUID
    const [productCode, setProductCode] = useState('');
    const [paymentResponse, setPaymentResponse] = useState(null);
    const [statusResponse, setStatusResponse] = useState(null);

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/esewa/payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    total_amount: amount,
                    transaction_uuid: transactionUUID,
                    product_code: productCode,
                })
            });
            const data = await response.json();
            setPaymentResponse(data);
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    const handleStatusCheck = async () => {
        try {
            const response = await fetch(`/api/esewa/status?product_code=${productCode}&total_amount=${amount}&transaction_uuid=${transactionUUID}`);
            const data = await response.json();
            setStatusResponse(data);
        } catch (error) {
            console.error('Error checking transaction status:', error);
        }
    };

    return (
        <div>
            <h2>Payment Form</h2>
            <form onSubmit={handlePaymentSubmit}>
                <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
                <input type="text" value={productCode} onChange={(e) => setProductCode(e.target.value)} placeholder="Product Code" required />
                <button type="submit">Pay with eSewa</button>
            </form>
            {paymentResponse && (
                <div>
                    <h3>Payment Response:</h3>
                    <pre>{JSON.stringify(paymentResponse, null, 2)}</pre>
                </div>
            )}
            <button onClick={handleStatusCheck}>Check Transaction Status</button>
            {statusResponse && (
                <div>
                    <h3>Transaction Status:</h3>
                    <pre>{JSON.stringify(statusResponse, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default PaymentForm;
