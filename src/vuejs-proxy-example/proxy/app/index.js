var real_link = 'http://jsonplaceholder.typicode.com/users';
var link = 'http:localhost:3000/space/';


new Vue({
    el: '#app',
    data() {
        return {
            message: 'hello Vue',
            list: "",
            explaination: ""
        }
    },
    methods: {
        getUsers: function () {
            this.$http.get(link).then(function (response) {
                this.list = response.data;
                console.log(response.data)
            }, function (error) {
                this.list = error;
                this.explaination = "Direct IP access not allowed. What happened? You've requested an IP address that is part of the Cloudflare network. A valid Host header must be supplied to reach the desired website."
            });
        }
    },
    mounted: function () {
        this.getUsers();
    }
});
