var randomUser = new Vue({
    el: '#userDetails',
    data: {
        newUser: {}
    },
    methods: {
        fetchUser() {
            fetch('https://randomuser.me/api')
                .then(response => response.json())
                .then(json => { randomUser.newUser = json.results[0] });
        }
    },
    created: function () {
        this.fetchUser();
    }

})