import React, { useState } from 'react';

const Payment = () => {
    const [totalAmount, setTotalAmount] = useState('');
    const [transactionUUID, setTransactionUUID] = useState('');
    const [productCode, setProductCode] = useState('');
    const [signature, setSignature] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Generate signature using your secret key
        const secretKey = '8gBm/:&EnhH.1/q('; // Replace with your actual secret key
        const generatedSignature = generateSignature(totalAmount, transactionUUID, productCode, secretKey);
        setSignature(generatedSignature);

        // Submit form to eSewa
        // Here, you would typically send a POST request to the eSewa endpoint with form data including the generated signature
        // For demonstration purpose, let's just log the form data
        console.log({
            total_amount: totalAmount,
            transaction_uuid: transactionUUID,
            product_code: productCode,
            signature: generatedSignature
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Total Amount" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} />
            <input type="text" placeholder="Transaction UUID" value={transactionUUID} onChange={(e) => setTransactionUUID(e.target.value)} />
            <input type="text" placeholder="Product Code" value={productCode} onChange={(e) => setProductCode(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Payment;
