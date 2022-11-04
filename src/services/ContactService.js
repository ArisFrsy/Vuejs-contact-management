import axios from "axios";

export class ContactService{
    static serverURL = 'http://localhost:9000';
    
    static GetAllContacts() {
        let dataURL = this.serverURL + '/contacts/';
        return axios.get(dataURL);
    }

    static GetContact(contactID) {
        let dataURL = this.serverURL + '/contacts/' + contactID ;
        return axios.get(dataURL);
    }

    static CreateContact(contact) {
        let dataURL = this.serverURL + '/contacts/';
        return axios.post(dataURL, contact);
    }

    static UpdateContact(contact, contactID) {
        let dataURL = this.serverURL + '/contacts/' + contactID;
        return axios.put(dataURL, contact);
    }

    static DeleteContact(contactID) {
        let dataURL = this.serverURL + '/contacts/' + contactID;
        return axios.delete(dataURL);
    }
}