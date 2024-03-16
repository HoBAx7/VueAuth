<script setup>
import { ref, onMounted } from 'vue';
import { SkillStore } from '../../stores/skillstore';

const skillstore = SkillStore();

const props = defineProps({
    id: {
        required: true,
        type: String
    }
});

onMounted(() => {
    skillstore.show(props.id);
})
</script>

<template>
    <div v-if="skillstore.loading" class="fixed top-1/2 left-1/2 w-12 h-12 opacity-40  text-indigo-500 z-30 text-5xl flex">
        <font-awesome-icon :icon="['fas', 'circle-notch']" spin />
    </div>
    <div class="flex flex-row w-full px-6 py-8 justify-center">
        <div class="flex flex-col w-full sm:w-4/12 bg-slate-100 rounded-lg shadow-slate-300 shadow-lg p-4">
            <div class="flex w-full justify-center py-2 border-b-2 border-indigo-500">
                <div class="w-6/12 text-center text-lg text-indigo-500">Create Skill</div>
            </div>
            <form @submit.prevent="skillstore.update($route.params.id)">
                <div class="flex flex-col w-full relative border rounded mt-10 shadow appearance-none label-floating">
                    <input type="text" v-model="skillstore.skill.name"
                        class="w-full text-lg py-2 px-3 bg-slate-100 text-gray-600 leading-normal rounded focus:outline-1 focus:outline-indigo-300"
                        id="name" placeholder="skill name" />
                    <label class="absolute block pin-1 pin-l text-gray-500 text-lg w-full px-3 py-2 leading-normal"
                        for="name">
                        skill name
                    </label>
                </div>
                <div v-if="skillstore.error.name" class="flex px-2 text-red-300">
                    {{ skillstore.error.name[0] }}
                </div>
                <div class="flex flex-col w-full relative border rounded mt-10 shadow appearance-none label-floating">
                    <input type="text" v-model="skillstore.skill.slug"
                        class="w-full text-lg py-2 px-3 bg-slate-100 text-gray-600 leading-normal rounded focus:outline-1 focus:outline-indigo-300"
                        id="slug" placeholder="skill slug" />
                    <label class="absolute block pin-1 pin-l text-gray-500 text-lg w-full px-3 py-2 leading-normal"
                        for="slug">
                        skill slug
                    </label>
                </div>
                <div v-if="skillstore.error.slug" class="flex px-2 text-red-300">
                    {{ skillstore.error.slug[0] }}
                </div>
                <div class="flex px-3 justify-end py-4 mt-6 w-full">
                    <button type="submit"
                        class="w-3/12 py-2 px-1 bg-indigo-500 rounded font-serif text-slate-100 hover:bg-indigo-600 focus:ring-3 ring-indigo-300">
                        change <font-awesome-icon icon="fa-regular fa-paper-plane" />
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.label-floating input:placeholder-shown~label {
    transition: all 0.2s ease-in-out;
}

.label-floating input:not(:placeholder-shown)~label {
    font-size: 0.9rem;
    transition: all 0.2s ease-in-out;
    color: rgb(99, 104, 241);
    margin-top: -1rem;
    margin-left: 15px;
    background: rgb(241 245 249);
    display: block;
    padding: 2px 6px;
    width: fit-content;
}
</style>