import { uid } from 'quasar'
import { firebaseDb, firebaseAuth } from 'boot/firebase'
import { ref, set, update, remove, onValue, onChildChanged, onChildRemoved } from 'firebase/database'

const state = {
  tasks: {
    // 'ID1': {
    //   name: 'Go to shop',
    //   completed: false,
    //   dueDate: '2022-08-01',
    //   dueTime: '02:30'
    // },
    // 'ID2': {
    //   name: 'Get bananas',
    //   completed: false,
    //   dueDate: '2022-08-02',
    //   dueTime: '03:00'
    // },
    // 'ID3': {
    //   name: 'Get apple',
    //   completed: false,
    //   dueDate: '2022-08-03',
    //   dueTime: '05:45'
    // }
  },
  search: '',
  sort: 'dueDate'
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
  },
  setSort(state, value) {
    state.sort = value
  }
}

const actions = {
  addTask({ dispatch }, task) {
    let taskId = uid();
    let payload = {
      id: taskId,
      task: task
    }
    dispatch('fbAddTask', payload);
  },
  updateTask({ dispatch }, payload) {
    dispatch('fbUpdateTask', payload);
  },
  deleteTask({ dispatch }, id) {
    dispatch('fbDeleteTask', id);
  },
  setSearch({ commit }, value) {
    commit('setSearch', value);
  },
  setSort({ commit }, value) {
    commit('setSort', value)
  },
  fbReadData({ commit }) {
    let userId = firebaseAuth.currentUser.uid
    let userTasks = ref(firebaseDb, 'tasks/' + userId)

    onValue(userTasks, snapshot => {
      let data = snapshot.val()
      for (let i = 0; i < Object.keys(data).length; i++) {
        let taskId = Object.keys(data)[i];
        let task = data[taskId];
        commit('addTask', {
          id: taskId,
          task: task
        })
      }
    })

    onChildChanged(userTasks, snapshot => {
      let task = snapshot.val()
      let payload = {
        id: snapshot.key,
        updates: task
      }
      commit('updateTask', payload)
    })

    onChildRemoved(userTasks, snapshot => {
      let taskId = snapshot.key;
      commit('deleteTask', taskId)
    })
  },

  fbAddTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid
    let taskRef = ref(firebaseDb, 'tasks/' + userId + '/' + payload.id)
    set(taskRef, payload.task)
  },

  fbUpdateTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid
    let taskRef = ref(firebaseDb, 'tasks/' + userId + '/' + payload.id)
    update(taskRef, payload.updates)
  },

  fbDeleteTask({}, taskId) {
    let userId = firebaseAuth.currentUser.uid
    let taskRef = ref(firebaseDb, 'tasks/' + userId + '/' + taskId)
    remove(taskRef)
  }
}

const getters = {
  tasksSorted: (state) => {
    let tasksSorted = {},
        keysOrdered = Object.keys(state.tasks)

    keysOrdered.sort((a, b) => {
      let taskAProp = state.tasks[a][state.sort],
          taskBProp = state.tasks[b][state.sort]

      if (taskAProp > taskBProp) return 1
      else if (taskAProp < taskBProp) return -1
      else return 0
    })

    keysOrdered.forEach((key) => {
      tasksSorted[key] = state.tasks[key]
    })

    return tasksSorted
  },
  tasksFiltered: (state, getters) => {
    let tasksSorted = getters.tasksSorted
    let tasksFiltered = {}
    if(state.search) {
      Object.keys(tasksSorted).forEach(key => {
        let task = tasksSorted[key]
        if(task.name.toLowerCase().includes(state.search.toLowerCase())) {
          tasksFiltered[key] = task
        }
      })
      return tasksFiltered
    }
    return tasksSorted
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
