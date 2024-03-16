<script setup>
import { ref } from 'vue';
import { AuthStore } from '../stores/authstore';


const authstore = AuthStore();

const form = ref({
    email: '',
    password: '',
});

// const handlelogin = async () => {
//     await authstore.getToken();
//     await axios.post('/login', {
//         email: form.value.email,
//         password: form.value.password
//     }).then(response => {
//         console.log(response);
//         if (response.status === 204) {
//             router.push("/");
//         } else {
//             alert(response.data.message);
//         }

//     }).catch(error => {
//         alert(error.message);
//         console.log(error.message);
//     })
// };
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
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="authstore.handlelogin(form)">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Your email
                            </label>
                            <input type="email" name="email" id="email" v-model="form.email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com">
                            <div v-if="authstore.errors.email" class="flex">
                                <span class="text-red-400 text-sm m-1 p-1">{{ authstore.errors.email[0] }}</span>
                            </div>

                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Password
                            </label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                v-model="form.password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <div v-if="authstore.errors.password" class="flex">
                                <span class="text-red-400 text-sm m-1 p-1">{{ authstore.errors.password[0] }}</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <RouterLink :to="{ name: 'forget-pass' }"
                                class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Forgot password?
                            </RouterLink>
                        </div>
                        <button type="submit"
                            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Sign in
                        </button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet?
                            <RouterLink :to="{ name: 'register' }"
                                class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Sign up
                            </RouterLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>