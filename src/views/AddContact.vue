<template>
    <div class="add-contact">
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <p class="h3 fw-bold">Add Contact</p>
                    <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, ab neque tempora maxime accusantium voluptatibus eaque quod doloribus natus eligendi similique accusamus blanditiis adipisci hic earum mollitia totam nemo soluta?</p>
                </div>
            </div>
        </div>
            <div class="container mt-3">
                <div class="row">
                    <div class="col-md-5">
                        <form @submit.prevent="submitCreate()">
                            <div class="mb-2">
                                <input v-model="contact.name" type="text" class="form-control" placeholder="Name">
                            </div>
                            <div class="mb-2">
                                <input v-model="contact.photo" type="text" class="form-control" placeholder="Photo Url">
                            </div>
                            <div class="mb-2">
                                <input v-model="contact.email" type="email" class="form-control" placeholder="Email">
                            </div>
                            <div class="mb-2">
                                <input v-model="contact.mobile" type="number" class="form-control" placeholder="Mobile">
                            </div>
                            <div class="mb-2">
                                <textarea v-model="contact.address" type="text" class="form-control"
                                    placeholder="Address"></textarea>
                            </div>
                            <div class="mb-2">
                                <button class="btn btn-dark">Create</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-4">
                        <img :src="contact.photo" class="contact-img" alt="">
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import { ContactService } from '@/services/ContactService'
export default {
    name: 'add-contact',
    data: function () {
        return {
            contact: {
                name: '',
                email: '',
                mobile: '',
                address: '',
                photo:''
            }
        }
    },
    methods: {
        submitCreate: async function () {
            try {
                let response = await ContactService.CreateContact(this.contact);
                if (response) {
                    return this.$router.push('/'); 
                } else {
                    return this.$router.push('/contact/add')
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style>

</style>
