let app = new Vue({
    el: '#vue',
    data: {
        message: 'Hello Vue.js <b> I tet you</b>',
        view: false,
        message1: '',
        checked: false
    },
    methods: {
        countUp: function () {
            this.count += 1
        }
    }
})