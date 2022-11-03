<template>
    <table class="table">
        <thead class="thead-light">
            <tr>
                <th scope="col">Nama</th>
                <th scope="col">Email</th>
                <th scope="col">Alamat</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="customer in customers" :key="customer.id">
                <td>{{ customer.name }}</td>
                <td>{{ customer.email }}</td>
                <td>{{ customer.address }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'customer-table',
    props: {
        customers: Array,
    },
}
</script>

<style scoped>

</style>