<script setup>
import { AuthStore } from '../stores/authstore';


const authstore = AuthStore();

</script>

<template>
    <header class="sticky top-0 shadow-lg bg-slate-100 z-10">
        <nav class="container flex flex-col sm:flex-row  justify-between  text-gray-500 py-5 mx-auto">

            <RouterLink :to="{ name: 'Home' }">
                <div class="flex flex-row items-center gap-3 flex-1">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo">
                    <span class="self-center font-semibold whitespace-nowrap text-gray-500 text-2xl">HoBA</span>
                </div>
            </RouterLink>

            <div class="flex flex-col sm:flex-row font-semibold gap-5 items-center justify-center w-full md:flex md:w-auto">
                <RouterLink :to="{ name: 'Home' }"
                    class="text-gray-500 text-l py-1 hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500 duration-700">
                    Home
                </RouterLink>
                <RouterLink :to="{ name: 'SkillIndex' }" v-if="authstore.user"
                    class="text-gray-500 text-l py-1 hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500 duration-700">
                    Skills
                </RouterLink>
                <RouterLink :to="{ name: 'login' }" v-if="!authstore.user"
                    class="text-gray-500 text-l py-1 hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500 duration-300">
                    login
                </RouterLink>
                <RouterLink :to="{ name: 'register' }" v-if="!authstore.user"
                    class="text-gray-500 text-l py-1 hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500 duration-300">
                    Register
                </RouterLink>
            </div>
            <div
                class="flex flex-col py-4 sm:py-0 sm:flex-row font-semibold gap-5 items-center justify-center w-full md:flex md:w-auto">
                <RouterLink to="#" v-if="authstore.user">
                    <button type="button" @click="authstore.logout"
                        class="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                        logout
                    </button>
                </RouterLink>
            </div>
            <button data-collapse-toggle="navbar-sticky" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>

        </nav>
    </header>
</template>

<style scoped>
.router-link-active {
    color: rgb(99 102 241);
    /* border-bottom: 1px solid orange; */
}
</style>