<template>
<div>
<div id="paypal-button-container"></div>
<div v-if="success" class="alert alert-success">
  <strong>Success!</strong> Payment successfuly done 
</div>
<div v-if="error" class="alert alert-danger">
  <strong>Ooops!</strong>  something went wrong 
</div>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name:'paypal',
    props:['amount'],
    data (){
        return {
            error:false ,
            success:false
        }
    },
    methods:{
        sendDataPaypal ( creds) {
            return new Promise((resolve, reject) => {
            axios.post('http://localhost:1337/checkoutpaypal', creds).then(res => {  
                return resolve()
            }).catch((err) => {
                return reject(err)
            })
            })
        }
    },
    mounted(){
         let  client = {
                sandbox:'paypal sandbox application  client id ',
            }
           let  payment = (data, actions) => {

                // Make a call to the REST api to create the payment
                return actions.payment.create({
                    payment: {
                        transactions: [
                            {
                                amount: { total:this.amount, currency: 'USD' }
                            }
                        ]
                    }
                });
            }
            let  onAuthorize = (data) => {
                var data = {
                    paymentID: data.paymentID,
                    payerID: data.payerID,
                    amount:this.amount
                };
                this.sendDataPaypal({data:data}).then(() => {
                    this.success=true 
                }).catch(err=>{
                    this.error=true    
                });
            }
            paypal.Button.render({

            env: 'sandbox', // sandbox | production

            commit: true,
            
            client,

            payment,
            onAuthorize
           

        }, '#paypal-button-container');
    }
}
    
</script>