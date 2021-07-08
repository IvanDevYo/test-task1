export default {
    data() {
      return {
          validation: {
              name: {
                  error: false,
                  message: '',
              },
              email: {
                  error: false,
                  message: '',
              }
          },
      }
    },
    methods: {
        validateName() {
            this.validation.name.error = !this.name
        },
        validateEmail() {
            this.validation.email.error = !this.emailItems.length
        },
        isEmailValid(email) {
            const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
            return reg.test(email)
        }
    }
}