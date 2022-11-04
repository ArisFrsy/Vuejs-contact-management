<template>
    <div class="edit-contact">
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <p class="h3 fw-bold">Edit Contact</p>
                    <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo blanditiis adipisci non. Laboriosam molestiae placeat qui voluptatibus tempora eius, ex mollitia sed! Sit, illum harum! Culpa nostrum ab accusantium incidunt.</p>
                </div>
            </div>
        </div>
        <div class="container mt-3">
            <div class="row">
                <div class="col-md-5">
                    <form @submit.prevent="updateSubmit()">
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
                            <textarea v-model="contact.address" type="text" class="form-control" placeholder="Address"></textarea>
                        </div>
                        <div class="mb-2">
                            <input type="submit" class="btn btn-dark" value="update">
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
    name: 'edit-contact',
    data: function () {
        return {
            contactId: this.$route.params.contactId,
            loading: false,
            contact: {
                name: '',
                email: '',
                mobile: '',
                address: '',
                photo: ''
            },
            errorMessage: null,
        }
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ContactService.GetContact(this.contactId);
            this.contact = response.data;
            this.loading = false;
        } catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    methods: {
        updateSubmit: async function () {
            try {
                let response = await ContactService.UpdateContact(this.contact, this.contactId);
                if (response) {
                    return this.$router.push('/');
                } else {
                    return this.$router.push('contact/edit/' + this.contactId)
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
