const express = require('express');
const crypto = require('crypto');
const fetch = require('node-fetch');

// SecretKey provided by eSewa
const SecretKey = '8gBm/:&EnhH.1/q(';

// Endpoint for handling payment request
router.post('/payment', async (req, res) => {
    try {
        // Extract required parameters from request body
        const { total_amount, transaction_uuid, product_code } = req.body;

        // Generate HMAC SHA256 signature
        const signature = generateSignature(total_amount, transaction_uuid, product_code);

        // Construct payment request to eSewa API
        const paymentResponse = await fetch('https://epay.esewa.com.np/api/epay/main/v2/form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                total_amount,
                transaction_uuid,
                product_code,
                signature
            })
        });

        // Handle payment response from eSewa
        const paymentData = await paymentResponse.json();
        res.json(paymentData);
    } catch (error) {
        console.error('Error processing payment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint for checking transaction status
router.get('/status', async (req, res) => {
    try {
        // Extract required parameters from query
        const { product_code, total_amount, transaction_uuid } = req.query;

        // Construct status check request to eSewa API
        const statusResponse = await fetch(`https://epay.esewa.com.np/api/epay/transaction/status/?product_code=${product_code}&total_amount=${total_amount}&transaction_uuid=${transaction_uuid}`);

        // Handle status response from eSewa
        const statusData = await statusResponse.json();
        res.json(statusData);
    } catch (error) {
        console.error('Error checking transaction status:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Function to generate HMAC SHA256 signature
function generateSignature(total_amount, transaction_uuid, product_code) {
    const hmac = crypto.createHmac('sha256', SecretKey);
    hmac.update(`total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`);
    return hmac.digest('base64');
}

module.exports = router;
