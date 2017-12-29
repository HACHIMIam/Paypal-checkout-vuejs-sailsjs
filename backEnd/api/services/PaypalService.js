const paypal = require('paypal-rest-sdk')  
paypal.configure({
      mode: 'sandbox', // Sandbox or live
      client_id: 'paypal-client-id',
      client_secret: 'paypal-secret'
    });
module.exports = {
    paymentPaypal(paymentID,execute_payment_json,payment,cb){
  
            paypal.payment.execute(paymentID,execute_payment_json,(error, paymentLog)=> {
              if (error) {
                    return cb(error)
              }
              else{
                    //the logic after  successful payment  here just save the payment in a databse 
                    payment.email=paymentLog.payer.payer_info.email
                    payment.first_name=paymentLog.payer.payer_info.first_name
                    payment.last_name=paymentLog.payer.payer_info.last_name
                    console.log(payment)
                    Payment.create(payment).exec((err, result) => {
                              cb(null,'done')     
                    })
               }
            })
    }
}