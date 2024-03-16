<script setup>
import { onMounted, ref } from 'vue';
import { SkillStore } from '../../stores/skillstore';

const skillstore = SkillStore();

onMounted(() => skillstore.index());
</script>

<template>
    <div v-if="skillstore.loading" class="fixed top-1/2 left-1/2 w-12 h-12 opacity-40  text-indigo-500 z-30 text-5xl flex">
        <font-awesome-icon :icon="['fas', 'circle-notch']" spin />
    </div>
    <div class="flex flex-col items-center justify-start px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="flex justify-end py-2 w-full">
            <div class=" flex justify-center w-1/12">
                <RouterLink :to="{ name: 'SkillCreate' }" class="w-10/12">
                    <button class="w-full rounded-md py-2 bg-green-800 text-white shadow-slate-400 shadow-lg">
                        <font-awesome-icon icon="fa-solid fa-plus" /> Add
                    </button>
                </RouterLink>
            </div>
        </div>
        <div class="flex flex-row min-w-full py-2">
            <div class="w-full">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3 w-5/12">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3 w-5/12">
                                    Slug
                                </th>
                                <th scope="col" class="px-2 py-3 w-2/12">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="skill in skillstore.skills" :key="skill.id"
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ skill.name }}
                                </th>
                                <td class="px-6 py-4">
                                    {{ skill.slug }}
                                </td>
                                <td class="px-6 py-1 text-center">
                                    <RouterLink :to="{ name: 'SkillEdit', params: { id: skill.id } }">
                                        <button class="px-3 m-1 bg-indigo-500 py-2 text-slate-100 rounded-md">
                                            <font-awesome-icon :icon="['fas', 'file-pen']" />
                                        </button>
                                    </RouterLink>
                                    <button @click="skillstore.delete(skill.id)"
                                        class="px-3 m-1 bg-red-400 py-2 text-slate-100 rounded-md">
                                        <font-awesome-icon icon="fa-regular fa-trash-can" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>