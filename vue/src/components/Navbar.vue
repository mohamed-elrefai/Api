<template>

<nav class=" p-3 bg-white flex justify-between mb-6">
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
            <div class="relative lg:ml-auto hidden lg:block justify-center">
                <span class="absolute left-3 top-2 text-sm text-gray-500">
                    <i class="fas fa-search"></i>
                </span>
                <input type="text"
                    class="block w-full shadow-sm border-none rounded-3xl  pl-11 pr-2 py-2 focus:outline-none bg-gray-50 text-sm text-gray-700 placeholder-gray-500"
                    placeholder="Search">
            </div>
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