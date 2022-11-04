<template>
    <div class="contact-manager">
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <div class="h3 fw-bold">
                        Contact Manager
                        <router-link to="/contact/add" class="btn btn-dark">Add Contact</router-link>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos labore porro quia quod facilis ipsa ducimus veniam, nostrum, assumenda veritatis quos esse incidunt? Cumque temporibus sapiente dolorem nostrum architecto praesentium.</p>
                    <form>
                        <div class="row">
                            <div class="col-md-6">
                                <input type="email" class="form-control" placeholder="Search Name">
                            </div>
                            <div class="col">
                                <input type="submit" class="btn btn-dark">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div v-if="loading">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <spin-ner />
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

        <div class="container mt-7" v-if="contacts.length > 0">
            <div class="row">
                <div class="col-md-6" v-for="contact of contacts" :key="contact">
                    <div class="card mt-3 list-group-item-secondary" >
                        <div class="card-body shadow-lg">
                            <div class="row align-item-center">
                                <div class="col-sm-4">
                                    <img :src="contact.photo" alt="" class="contact-img">
                                </div>
                                <div class="col-sm-7">
                                    <ul class="list-group">
                                        <li class="list-group-item"> Name : <span class="fw-bold">{{ contact.name }}</span></li>
                                        <li class="list-group-item"> Mobile : <span class="fw-bold">{{ contact.mobile }}</span></li>
                                        <li class="list-group-item"> Email : <span class="fw-bold">{{ contact.email }}</span></li>
                                        <li class="list-group-item"> Address : <span class="fw-bold">{{ contact.address }}</span></li>
                                    </ul>
                                </div>
                                <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                                    <router-link :to="'contact/view/' + contact.id" class="btn btn-warning my-1">
                                        <i class="fa fa-eye"></i>
                                    </router-link>
                                    <router-link :to="'contact/edit/' + contact.id" class="btn btn-primary my-1">
                                        <i class="fa fa-pen"></i>
                                    </router-link>
                                    <button class="btn btn-danger my-1" @click="clickDeleteContact(contact.id)">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ContactService } from '@/services/ContactService';
export default {
    name: 'contact-manager',
    data: function () {
        return {
            loading: false,
            contacts: [],
            errorMessage: null
        }
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ContactService.GetAllContacts();
            this.contacts = response.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    methods: {
        clickDeleteContact: async function (contactId) {
            try {
                this.loading = true;
                let response = await ContactService.DeleteContact(contactId);
                if (response) {
                    let response = await ContactService.GetAllContacts();
                    this.contacts = response.data;
                    this.loading = false;
                }
            } catch (error) {
                this.errorMessage = error;
                this.loading = false;
            }
        }
    }
}
</script>

<style>

</style>
