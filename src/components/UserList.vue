<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">User List</h1>
    <hr>
    
    <!-- Search Bar -->
    <div class="mb-4">
      <div class="row">
        <div class="col">
          <RouterLink to="/add" class="btn btn-primary">Add New</RouterLink>
        </div>
        <div class="col">
          <input type="text" id="search" class="form-control" placeholder="Search users by name" @input="filterUsers">
        </div>
      </div>
    </div>

    <!-- Table displaying the users -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody id="user-list">
        <tr v-for="user in filteredUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{  user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>
            <button @click="editUser(user)" class="btn btn-warning btn-sm me-1">Edit</button>
            <button @click="deleteUser(user.id)" class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { userService } from "../services/UserService";
import { useRouter } from 'vue-router';
import { selectedUser } from "../store/SelectedUser";

export default {
  name: "UserList",
  setup() {
    const users = ref([]);
    const filteredUsers = ref([]);
    const router = useRouter();

    // Fetch users on component mount
    onMounted(async () => {
      fetchUser()
    });

    const fetchUser = async () => {
      const data = await userService.getUsers();
      users.value = data
      filteredUsers.value = [...users.value]
    }

    const filterUsers = (event) => {
      const query = event.target.value.toLowerCase();
      filteredUsers.value = users.value.filter((user) =>
        user.name.toLowerCase().includes(query)
      );
    };

    const deleteUser = async (id) => {
      if (confirm("Confirm to delete?")) {
        await userService.deleteUser(id);
        alert("User deleted");
        users.value = users.value.filter(user => user.id !== id);
        router.push('/');
      }
    };

    const editUser = (user) => {
      selectedUser.setUser(user)
      router.push('/edit');
    };

    return {
      filteredUsers,
      filterUsers,
      deleteUser,
      editUser
    };
  },
};
</script>

