const stripe = require('stripe')('sk_test_51PH5jXBtceYPOTuZZOBEuwU7FQqaWpL385T5ZjdJkeqcjXGoKKhcRikdul8dT5TncdeBP14F5rhT1l8txvxn7i570034gY84iW');

exports.processPayment = async (req, res) => {
  const { token, amount, carId } = req.body;

  try {
    const charge = await stripe.charges.create({
      amount: amount, // Amount in cents
      currency: 'usd',
      source: token, // Token from the client-side
      description: `Payment for car rental: ${carId}`
    });

    res.status(200).json({ message: 'Payment successful', charge });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ error: 'Payment failed' });
  }
};

module.exports
