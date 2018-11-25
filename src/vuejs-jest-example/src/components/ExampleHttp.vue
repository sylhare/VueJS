<template>
    <div class="hello">
        <h1>Your IP is {{ ip }}</h1>
        <input type="text" v-model="input.firstname" placeholder="First Name" />
        <input type="text" v-model="input.lastname" placeholder="Last Name" />
        <button v-on:click="sendData()">Send</button>

        <br />
        <p> Looking for "{{ fullname }}" from {{ httpurl }} </p>
        <textarea>{{ response }}</textarea>
    </div>
</template>

<style>
    textarea {
        width: 1000px;
        height: 1000px;
    }

</style>

<script>
export default {
  name: 'example',
  data() {
    return {
      ip: '',
      httpurl: this.$httpbin,
      input: {
        firstname: '',
        lastname: '',
      },
      response: '',
    };
  },
  created() {
    // console.log(this)
    //console.log(this.$httpbin);
    var auth = 'Basic ' + new Buffer('username' + ':' + 'password').toString('base64');
      
    this.$http.get('https://jsonplaceholder.typicode.com/users', {}, {
      headers: {
        'Authorization': auth
      }
    }).then((result) => {
      console.log(result);
      console.log(auth);
    });  
  },

  mounted() {
    this.$http.get('https://httpbin.org/ip').then((result) => {
      this.ip = result.body.origin;
    }, (error) => {
      console.error(error);
    });
  },

  computed: {
    fullname() {
      return `${this.input.firstname} ${this.input.lastname}`;
    },
  },

  methods: {
    sendData() {
      console.log('sending');
      this.$http.post('https://httpbin.org/post', this.input, {
        headers: {
          'content-type': 'application/json',
        },
      }).then((result) => {
        this.response = result.data;
      }, (error) => {
        console.error(error);
      });
    },
  },
};

</script>
