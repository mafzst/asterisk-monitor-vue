export default {
  install (Vue, options) {
    const init = ({host, port, username, password}) => {
      console.log(host, port, username, password)
    }

    init(options)

    Vue.prototype.$asterisk = {
      test () {
        return 'Seems to be ok ' + Math.floor((Math.random() * 100) + 1)
      }
    }
  }
}
