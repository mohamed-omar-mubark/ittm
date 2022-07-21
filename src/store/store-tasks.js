import { uid } from 'quasar'

const state = {
  tasks: {
    'ID1': {
      name: 'Go to shop',
      completed: false,
      dueDate: '2022-08-01',
      dueTime: '02:30'
    },
    'ID2': {
      name: 'Get bananas',
      completed: false,
      dueDate: '2022-08-02',
      dueTime: '03:00'
    },
    'ID3': {
      name: 'Get apple',
      completed: false,
      dueDate: '2022-08-03',
      dueTime: '05:45'
    },
  }
}

const mutations = {
  addTask(state, payload) {
    // push new task to the end of the array
    state.tasks[payload.id] = payload.task
  },
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    delete state.tasks[id]
  }
}

const actions = {
  addTask({ commit }, task) {
    let taskId = uid();
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload);
  },
  updateTask({ commit }, payload) {
    commit('updateTask', payload);
  },
  deleteTask({ commit }, id) {
    commit('deleteTask', id);
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
