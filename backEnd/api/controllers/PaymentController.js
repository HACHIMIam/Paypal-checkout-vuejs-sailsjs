/**
 * PayementController
 *
 * @description :: Server-side logic for managing payements
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
   checkoutPaypal(req,res){
     console.log(req.body)
      var execute_payment_json = {
        "payer_id": req.body.data.payerID,  
      };
      const payment ={}
      payment.amount=req.body.data.amount
      const paymentID=req.body.data.paymentID
        PaypalService.paymentPaypal(paymentID,execute_payment_json,payment,(err,result)=>{
              if(err) res.negotiate(err)
              res.ok(result)              
         });

    },
	
};

