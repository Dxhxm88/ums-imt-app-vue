<template>
  <h1 class="text-center">User Maintenance System</h1>
  <div id="app">
    <router-view></router-view>  <!-- This is where routed components will be injected -->
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "App",
  components: {
  },
  setup() {
    const users = ref([]);
    const filterText = ref("");

    const addUser = (user) => {
      users.value.push(user);
    };

    const filterUsers = (text) => {
      filterText.value = text;
    };

    const filteredUsers = computed(() => {
      return users.value.filter((user) =>
        user.name.toLowerCase().includes(filterText.value.toLowerCase())
      );
    });

    return {
      users,
      addUser,
      filterUsers,
      filteredUsers,
    };
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
}
h1 {
  color: #333;
}
</style>
