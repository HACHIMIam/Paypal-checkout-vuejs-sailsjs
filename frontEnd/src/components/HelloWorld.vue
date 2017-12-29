<template>
 <div class="container">
    <div class="jumbotron">
      <h1>Hello, There </h1>
      <p>Welcome to Paypal checkout Demo </p>
      <div class="input-group">
        <span class="input-group-addon">$</span>
        <input type="number" class="form-control" v-model="amount" aria-label="Amount (to the nearest dollar)">
        <span class="input-group-addon">.00</span>
      </div>
      <br><br><br>
     <paypal :amount="amount"></paypal>
    </div>
 </div>
</template>
<script>
 import Paypal from './Paypal'
export default {
  name: 'HelloWorld',
  data () {
    return {
      amount:10
    }
  },
   components: {
            'paypal': Paypal
        }, 
}
</script>

