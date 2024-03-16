import { defineStore } from "pinia";
import axios from "axios";

export const AuthStore = defineStore('auth', {
    state: () => ({
        authUser: null,
        authErrors: [],
        authStatus: null,
        loadingStatus: null,
    }),

    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors,
        status: (state) => state.authStatus,
        loading: (state) => state.loadingStatus,
    },

    actions: {
        async getToken() {
            await axios.get('/sanctum/csrf-cookie')
        },//CSRF Token-----------

        async getUser() {
            this.getToken();
            const data = await axios.get("/api/user");
            this.authUser = data.data;
        },//getUser------------

        async handlelogin(data) {
            this.authErrors = [];
            await this.getToken();
            try {
                await axios.post('/login', {
                    email: data.email,
                    password: data.password
                })
                this.router.push("/");
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },//handleLogin---------

        async submitform(data) {
            this.authErrors = [];
            await this.getToken();
            try {
                await axios.post('/register', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation
                })
                this.router.push("/");
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },//handleRegister--------

        async logout() {
            await axios.post('/logout');
            this.authUser = null;
        },//logout

        async forgotpass(email) {
            this.loadingStatus = 'loadding.. waite it may take a while';
            this.authErrors = []
            await this.getToken();
            try {
                const reponse = await axios.post('/forgot-password', {
                    email: email
                })
                this.authStatus = reponse.data.status;
                this.loadingStatus = null;
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },//forgot-password---------

        async resetpass(resetData) {
            this.authErrors = []
            await this.getToken();
            try {
                await axios.post('/reset-password', resetData);
                this.router.push("/login");
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        }
    }
});

