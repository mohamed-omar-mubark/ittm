import { LocalStorage, Loading } from 'quasar'
import { firebaseAuth } from 'boot/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { showErrorMessage } from 'src/functions/function-show-error-message'

const state = {
  loggedIn: false
}

const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value
  }
}

const actions = {
  registerUser ({}, payload) {
    createUserWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      showErrorMessage(error.message)
    })
  },
  loginUser ({}, payload) {
    Loading.show()
    signInWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      showErrorMessage(error.message)
    })
  },
  logoutUser () {
    signOut(firebaseAuth)
  },
  handleAuthStateChanged ({ commit }) {
    firebaseAuth.onAuthStateChanged(user => {
      Loading.hide()
      if (user) {
        commit('setLoggedIn', true)
        LocalStorage.set('loggedIn', true)
        this.$router.push('/').catch(err => {})
      } else {
        commit('setLoggedIn', false)
        LocalStorage.set('loggedIn', false)
        this.$router.replace('/auth').catch(err => {})
      }
    })
  }
}

const getters = {

}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}