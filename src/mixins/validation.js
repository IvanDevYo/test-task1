export default {
    data() {
      return {
          errorName: false,
          errorEmail: false,
      }
    },
    methods: {
        validateName() {
            this.errorName = !this.name
        },
        validateEmail() {
            this.errorEmail = !this.emailItems.length
        },
    }
}