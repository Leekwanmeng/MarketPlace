<template>
<div class="pass">
    <h1>Change Password</h1>
    <form>
        <div class="form-group">
            <label for="pwd">Old Password:</label>
            <input type="password" class="form-control" id="oldPwd">
        </div>
        <div class="form-group">
            <label for="pwd">New Password:</label>
            <input type="password" class="form-control" id="newPwd">
        </div>
        <div class="form-group">
            <label for="pwd">Re-enter New Password:</label>
            <input type="password" class="form-control" id="checkPwd">
        </div>
        <button type="submit" class="btn btn-primary" v-on:click="change()">Submit</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'changepassword-component',
    methods: {

    }
}
</script>

<style>
.pass {
    padding: 30px;
    background-color: white;
}
</style>