import { firebaseAuth } from 'boot/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

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
      console.log('error message', error.message)
    })
  },
  loginUser ({}, payload) {
    signInWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log('error message', error.message)
    })
  },
  logoutUser () {
    signOut(firebaseAuth)
  },
  handleAuthStateChanged ({ commit }) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        commit('setLoggedIn', true)
        this.$router.push('/').catch(err => {})
      } else {
        commit('setLoggedIn', false)
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
