<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Add User</h1>
        <hr>

        <div class="mb-4">
            <div class="row">
                <div class="col">
                    <RouterLink to="/" class="btn btn-secondary">Back</RouterLink>
                </div>
            </div>
        </div>
        <form @submit.prevent="submitForm">
            <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input v-model="name" type="text" class="form-control" id="name" placeholder="Enter name" required />
            </div>
            <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="email" type="email" class="form-control" id="email" placeholder="Enter email" required />
            </div>
            <div class="mb-3">
            <label for="phone" class="form-label">Phone</label>
            <input v-model="phone" type="text" class="form-control" id="phone" placeholder="Enter phone" required />
            </div>
            <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="password" placeholder="Enter password" required />
            </div>
            <button type="submit" class="btn btn-primary">Add User</button>
        </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { userService } from '../services/UserService';
  import { useRouter } from 'vue-router';
  
  export default {
    
    setup() {
        const router = useRouter();
        const name = ref('');
        const email = ref('');
        const password = ref('');
        const phone = ref('');
  
      const submitForm = async () => {
        const user = { name: name.value, email: email.value, password: password.value, 'phone': phone.value };
        await userService.addUser(user);
        router.push('/');
      };
  
      return { name, email, password, phone, submitForm };
    },
  };
  </script>
  