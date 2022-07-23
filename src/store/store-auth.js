import { firebaseAuth } from 'boot/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth"

const state = {

}

const mutations = {

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
