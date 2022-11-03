<template>
    <div class="container">
        <customer-form @add-customer="addCustomer" />
    </div>
</template>

<script>
import CustomerForm from '@/components/AddContact.vue'

export default {
    name: 'customer-form',
    components: {
        CustomerForm,
    },
    submit() {
        this.$emit('add-customer', this.customer)
        this.customer = {
            name: '',
            email: '',
            address: '',
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
}
</style>