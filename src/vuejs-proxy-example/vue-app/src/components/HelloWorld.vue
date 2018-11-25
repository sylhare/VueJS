<template>
<div id="app">
  <h1>{{ msg }}</h1>
    <p> Users </p>
    <ul>
      <li v-for="user in users">{{ user.name }}</li>
    </ul>
    <p> Users from proxy </p>
    <ul>
      <li v-for="user in proxy">{{ user.name }}</li>
    </ul>
</div>
</template>

<script>
    const api = "https://jsonplaceholder.typicode.com/users"
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() { return {
            users: [],
            proxy: []
        }},
        created() {
            this.$http
                .get(api)
                .then(function(response) {
                    this.users = response.data
                })
            this.$http .get('http://localhost:8080/' + api)
                .then(function(response) {
                    this.proxy = response.data
                })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

</style>
