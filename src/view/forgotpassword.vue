<script setup>
import { ref } from 'vue';
import { AuthStore } from '../stores/authstore';



const authstore = AuthStore();

const email = ref('');

</script>

<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
                Flowbite
            </a>
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        forgotten password
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="authstore.forgotpass(email)">
                        <div v-if="authstore.status" class="text-green-900 font-semibold bg-green-300 rounded-md p-2">
                            {{ authstore.status }}
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                type Your email
                            </label>
                            <input type="email" name="email" id="email" v-model="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com">
                            <div v-if="authstore.errors.email" class="flex">
                                <span class="text-red-400 text-sm m-1 p-1">{{ authstore.errors.email[0] }}</span>
                            </div>
                        </div>
                        <button type="submit" v-if="!authstore.loading"
                            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            send
                        </button>
                        <button type="submit" v-else disabled
                            class="w-full text-gray-300 bg-primary-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:focus:ring-primary-800">
                            <font-awesome-icon icon="fa-solid fa-spinner" spin /> {{ authstore.loading }}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>