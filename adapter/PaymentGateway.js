// Common interface for payment gateways
class PaymentGateway {
    pay(amount) {
        throw new Error("This method should be implemented by subclasses");
    }
}
// PayPal payment gateway
class PayPal {
    makePayment(user, amount) {
        console.log(`User ${user} paid ${amount} via PayPal`);
    }
}

// Stripe payment gateway
class Stripe {
    processPayment(user, amount) {
        console.log(`User ${user} paid ${amount} using Stripe`);
    }
}
// Adapter for PayPal to the common PaymentGateway interface
class PayPalAdapter extends PaymentGateway {
    constructor(user) {
        super();
        this.payPal = new PayPal();
        this.user = user;
    }

    pay(amount) {
        this.payPal.makePayment(this.user, amount);
    }
}

// Adapter for Stripe to the common PaymentGateway interface
class StripeAdapter extends PaymentGateway {
    constructor(user) {
        super();
        this.stripe = new Stripe();
        this.user = user;
    }

    pay(amount) {
        this.stripe.processPayment(this.user, amount);
    }
}
// Simulating payment with PayPal
const paypalAdapter = new PayPalAdapter('Alice');
paypalAdapter.pay(100);  // Output: User Alice paid 100 via PayPal

// Simulating payment with Stripe
const stripeAdapter = new StripeAdapter('Bob');
stripeAdapter.pay(150);  // Output: User Bob paid 150 using Stripe
