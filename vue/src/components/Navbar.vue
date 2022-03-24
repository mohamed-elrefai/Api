<template>

<nav class=" p-6 bg-white flex justify-between mb-6">
        <ul class=" flex items-center">
            <div class="w-8 ml-10 mr-10">
                <router-link to="/"><img src="icon.jpg" alt=""></router-link> 
            </div>
            <li>
                <router-link to="/" class="p-3">Home</router-link>
            </li>
            <li>
                <router-link to="/" class="p-3">Post</router-link>
            </li>
            <li>
                <router-link to="/" class="p-3">Notifications</router-link>
            </li>
            <li>
                <router-link to="/" class="p-3">Profile</router-link>
            </li>
        </ul>
        <ul class=" flex items-center">
            <li>
                <router-link to="/" class="p-3">Username</router-link>
            </li>
            <li>
                <router-link to="/" class="p-3 text-red-700">Logout</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
}
</script>