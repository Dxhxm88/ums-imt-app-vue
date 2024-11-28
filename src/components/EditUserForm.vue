<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Edit User</h1>
        <hr>

        <div class="mb-4">
            <div class="row">
                <div class="col">
                    <RouterLink to="/" class="btn btn-secondary">Back</RouterLink>
                </div>
            </div>
        </div>
        <form @submit.prevent="submitForm">
            <input type="hidden" name="id" v-model="user.id">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input v-model="user.name" type="text" class="form-control" id="name" placeholder="Enter name" required />
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="user.email" type="email" class="form-control" id="email" placeholder="Enter email" required />
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input v-model="user.phone" type="text" class="form-control" id="phone" placeholder="Enter phone" required />
            </div>
            <button type="submit" class="btn btn-primary">Update</button>
        </form>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { userService } from '../services/UserService';
  import { selectedUser } from "../store/SelectedUser";
  import { useRouter } from 'vue-router';

  export default {
    name: 'EditUserForm',
    setup() {
      const user = ref({id: '', name: '', email: '', phone: '' });
      const router = useRouter();
      
      // Simulating fetching the user data based on the ID in the URL
      onMounted(() => {
        user.value = { ...selectedUser.user }   
      });
  
      const submitForm = async () => {
      try {
        await userService.updateUser(user.value);
        alert('User updated successfully!');
        router.push('/'); // Use Vue Router for navigation
      } catch (error) {
        console.error('Error updating user:', error);
      }
    };
  
      return { user, submitForm };
    }
  };
  </script>
  