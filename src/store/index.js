import { createStore } from 'vuex'
import LoginStore from '../store/modules/LoginStore'

export default createStore({
  modules: {
    login : LoginStore,
  }
})
