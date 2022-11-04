<template>
    <div class="view-contact">
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <p class="h3 fw-bold">View Contact</p>
                    <p class="fst-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim tenetur, voluptatibus excepturi quasi iste optio maxime accusantium sapiente magni alias iusto incidunt mollitia in sunt. Exercitationem fugit dolores tempora ipsa?</p>
                </div>
            </div>
        </div>

        <div v-if="loading">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <spin-ner/>
                    </div>
                </div>
            </div>
        </div>
        
        <div v-if="!!loading && errorMessage">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <p class="text-danger fw-bold">{{ errorMessage }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container" v-if="!loading && isDone()">
            <div class="row">
                <div class="col-md-4">
                    <img :src="contact.photo" class="contact-img-big" alt="">
                </div>
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item"> Name : <span class="fw-bold">{{ contact.name }}</span></li>
                        <li class="list-group-item"> Mobile : <span class="fw-bold">{{ contact.mobile }}</span></li>
                        <li class="list-group-item"> Email : <span class="fw-bold">{{ contact.email }}</span></li>
                        <li class="list-group-item"> Address : <span class="fw-bold">{{ contact.address }}</span></li>
                    </ul>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-4">
                    <router-link to="/" class="btn btn-dark">Back</router-link>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import { ContactService } from '@/services/ContactService'
export default {
    name: 'view-contact',
    components: {
    },
    data: function () {
        return {
            contactId: this.$route.params.contactId,
            loading: false,
            contact: {},
            errorMessage:null,
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
        isDone: function () {
            return Object.keys(this.contact).length > 0;
        }
    }
}
</script>

<style>

</style>
