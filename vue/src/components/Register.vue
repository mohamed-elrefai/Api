<template>
    <div class="flex justify-center">
        <div class="w-4/12 m-28 bg-white p-6 rounded-lg">
            <form @submit="handelSubmit">
                <div v-if="error" class=" bg-red-400 ">
                    {{error}}
                </div>
                <div class="mb-4">
                    <label for="username" class="sr-only">Username</label>
                    <input type="text" class="bg-gray-100 border-2 w-full p-4 rounded-lg" id="username" placeholder="Username" v-model="username">
                </div>
                <div class="mb-4">
                    <label for="Email" class="sr-only">Email</label>
                    <input type="email" class="bg-gray-100 border-2 w-full p-4 rounded-lg" id="email" placeholder="Email" v-model="email">
                </div>
                <div class="mb-4">
                    <label for="Password" class="sr-only">Password</label>
                    <input type="password" class="bg-gray-100 border-2 w-full p-4 rounded-lg" id="password" placeholder="Password" v-model="password">
                </div>
                <div class="mb-4">
                    <label for="Password2" class="sr-only">Password2</label>
                    <input type="password" class="bg-gray-100 border-2 w-full p-4 rounded-lg" id="password2" placeholder="Password 2" v-model="password2">
                </div>
                    <router-link to="/signin" class=" text-blue-500">Have Account</router-link>
                <div>
                    <button type="submit" class=" bg-blue-500 text-white px-4 py-3 rounded font-medium w-full">Register</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'signUp',
    data(){
        return{
            username: '',
            email: '',
            password: '',
            password2: '',
            error: ""
        }
    },
    methods: {
        
        async handelSubmit(e){
            e.preventDefault();
            const data = {
                username: this.username,
                email: this.email,
                password: this.password
            }
            const res = await axios.post('Api/signUp', data)
            this.$router.push('/signin')
        }
    },
}
</script>