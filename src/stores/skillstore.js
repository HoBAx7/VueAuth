import { defineStore } from "pinia";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/v1/";

export const SkillStore = defineStore('skill', {
    state: () => ({
        skillsIndex: [],
        skillget: [],
        errors: {},
        loadingStatus: null,
    }),

    getters: {
        skills: (state) => state.skillsIndex,
        skill: (state) => state.skillget,
        error: (state) => state.errors,
        loading: (state) => state.loadingStatus,
    },

    actions: {
        async index() {
            this.loadingStatus = 'Loading';
            const response = await axios.get("skills");
            this.skillsIndex = response.data.data;
            this.loadingStatus = null;
        },

        async show(id) {
            this.loadingStatus = 'Loading';
            this.errors = {};
            const response = await axios.get("skills/" + id);
            this.skillget = response.data.data;
            this.loadingStatus = null;
        },

        async store(data) {
            this.loadingStatus = 'Loading';
            try {
                await axios.post("skills", data);
                await this.router.push({ name: 'SkillIndex' });
            } catch (error) {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            }

        },

        async update(id) {
            this.errors = {};
            try {
                await axios.put("skills/" + id, this.skill);
                await this.router.push({ name: 'SkillIndex' });
            } catch (error) {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            }
        },

        async delete(id) {
            if (!window.confirm("Are you Sure ?")) {
                return;
            }
            this.loadingStatus = 'loadding';
            await axios.delete("skills/" + id);
            await this.index();
            this.loadingStatus = null;
        }
    }
});
