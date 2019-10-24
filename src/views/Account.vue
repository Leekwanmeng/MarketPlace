<template>
<div class="account">
    <h1>{{ getName }}</h1>
    <ul class="list-group">
        <li class="list-group-item">Birthday: {{ getBirthday }}</li>
        <li class="list-group-item">Age: {{ getAge }}</li>
        <li class="list-group-item">Education: {{ getEducation }}</li>
        <li class="list-group-item">About me: {{ getAboutMe }}</li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'account-component',
    computed: {
        getName() {
			return this.$store.getters.getName;
        },
        getBirthday() {
            return this.$store.getters.getBirthday;
        },
        getAge() {
            return this.$store.getters.getAge;
        },
        getEducation() {
            return this.$store.getters.getEducation;
        },
        getAboutMe() {
            return this.$store.getters.getAboutMe;
        }
    }
}
</script>

<style>
.account {
    padding: 30px;
    background-color: white;
}
</style>