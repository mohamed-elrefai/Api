<template>
    <div class="flex justify-center">
        <div class="w-4/12 m-28 bg-white p-6 rounded-lg">
            <form @submit="handelSubmit">
                <div class="mb-4">
                    <label for="Email" class="sr-only">Email</label>
                    <input type="email" class="bg-gray-100 border-2 w-full p-4 rounded-lg" id="email" placeholder="Email" v-model="email">
                </div>
                <div class="mb-4">
                    <label for="Password" class="sr-only">Password</label>
                    <input type="password" class="bg-gray-100 border-2 w-full p-4 rounded-lg" id="password" placeholder="Password" v-model="password">
                </div>
                    <router-link to="/signup" class=" text-blue-500">Create new account</router-link>
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
    name: 'signIn',
    data(){
        return{
            email: '',
            password: '',
        }
    },
    methods: {
        
        async handelSubmit(e){
            e.preventDefault();
            const data = {
                email: this.email,
                password : this.password
            }
            const res = await axios.post('Api/signIn', data)
            localStorage.setItem('token', res.data.token)
        }
    },
}
</script>