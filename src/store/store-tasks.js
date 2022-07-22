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
  },
  search: '',
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
  },
  setSearch(state, value) {
    state.search = value
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
  },
  setSearch({ commit }, value) {
    commit('setSearch', value);
  }
}

const getters = {
  tasksFiltered: (state) => {
    let tasksFiltered = {}
    if(state.search) {
      Object.keys(state.tasks).forEach(key => {
        let task = state.tasks[key]
        if(task.name.toLowerCase().includes(state.search.toLowerCase())) {
          tasksFiltered[key] = task
        }
      })
      return tasksFiltered
    }
    return state.tasks
  },
  tasksTodo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key]
      if (!task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  },

  tasksCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key]
      if (task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
