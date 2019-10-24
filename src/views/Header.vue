<template>
    <div v-if="isLoggedIn" class="navbar has-dropdown is-hoverable">
        <a class="navbar-link">Welcome {{ getName }}</a>
        <router-link to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
</template>

<script>
export default {
    name: 'header-component',
    computed: {
        isLoggedIn() {
            return this.$store.getters.getLoggedIn;
        },
        getName () {
			let name = this.$store.getters.getName;
			
			if (name === '') {
				return 'User';
			} else {
				return name;
			}
		}
    },
    methods: {
        logout () {
            this.$router.push({ name: 'login-component' });
			this.$store.commit('setLoggedIn', false);
		}
    }
}
</script>