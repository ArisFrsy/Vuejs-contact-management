<template>
  <div id="home">
    <div class="container">
      <h1 class="mb4 mt5 h5" style="margin-top:10px">Daftar Pelanggan</h1>
      <hr>
      <p>
        <router-link to="/ContactForm">
          <a class="btn btn-primary">Home</a>
        </router-link>
      </p>
      <customer-table v-bind:customers='customers' />
      <div class="collapse" id="collapseExample">
        <customer-form />
    </div>
  </div>
  </div>
</template>

<script>
import CustomerTable from '@/components/ContactManagement.vue'
export default {
  name: 'App',
  components: {
    CustomerTable,
  },
  data() {
    return {
      customers: [
        {
          id: 1,
          name: 'Bambang',
          email: 'bambang@mail.com',
          address: 'Jl.Kenanga',
        },
        {
          id: 2,
          name: 'Dika',
          email: 'dika@mail.com',
          address: 'Jl.Mangga',
        },
        {
          id: 3,
          name: 'Agus',
          email: 'agus@mail.com',
          address: 'Jl.Mataram',
        },
      ],
    }
  },
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