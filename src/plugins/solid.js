const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    //let sockets = []
    console.log(store)



    Vue.prototype.$login = async function(issuer){
      console.log("login", issuer)
    }

  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
