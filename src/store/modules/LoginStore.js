const loginStore = {
    state() {
        return{
            accessed : false,
        }
    },
    getters: {
    },
    mutations: {
        logedIn(state, payload){
            console.log(payload.access)
            state.accessed = payload.access
        }
    },
    actions: {
        logedIn(state,payload){
            state.commit("logedIn",payload)
        }
    }
}

export default loginStore ;