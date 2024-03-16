<script setup>
import { onMounted } from 'vue';
import { AuthStore } from '../stores/authstore';

const authstore = AuthStore();

onMounted(async () => {
    await authstore.getUser();
});
</script>

<template>
    <div class="flex flex-col items-center justify-start px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div v-if="authstore.user" class="flex flex-row min-w-full">
            <div class="w-4/12">{{ authstore.user.name }}</div>
            <div class="w-4/12">welcom Back</div>
            <div class="w-4/12">status</div>
        </div>
        <div v-else>
            no match found
        </div>
        <div class="flex flex-row min-w-full">hi</div>

    </div>
</template>

<style scoped></style>