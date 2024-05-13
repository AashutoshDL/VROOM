const crypto = require('crypto');

// Generate HMAC signature
function generateSignature(data, secretKey) {
    const hmac = crypto.createHmac('sha256', secretKey);
    hmac.update(data);
    return hmac.digest('base64');
}

// Process payment request
exports.processPayment = (req, res) => {
    const { total_amount, transaction_uuid, product_code } = req.body;

    // Generate signature
    const data = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;
    const secretKey = '8gBm/:&EnhH.1/q(';
    const signature = generateSignature(data, secretKey);

    // Redirect to eSewa ePay login page with necessary parameters
    res.redirect(`https://rc-epay.esewa.com.np/api/epay/main/v2/form?${data}&signature=${signature}`);
};
