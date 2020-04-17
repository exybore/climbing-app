import flake from '@/utils/flake'
import { loadFromStorage, saveToStorage } from '@/utils/storage'

const state = loadFromStorage('routes')

const getters = {
  getFinishedRoutes: state => {
    return state.filter(route => route.finished)
  },
  getRoutesByLocation: state => id => {
    return state.filter(route => route.location === id)
  },
  getRoutesByTag: state => tag => {
    return state.filter(route => route.tags.includes(tag))
  },
  searchRoutes: (state) => query => {
    query = query.toLowerCase()
    return state.filter(route => {
      let name = route.name === undefined ? '' : route.name.toLowerCase()
      let notes = route.notes === undefined ? '' : route.notes.toLowerCase()

      return name.match(query) !== null || notes.match(query) !== null
    })
  },
  getRoute: state => (location, route) => {
    return state.find(i => i.location === location && i.id === route)
  },
}

const mutations = {
  ADD_ROUTE(state, { data, id }) {
    state.push({
      name: data.name,
      id,
      location: data.location,
      grade: data.grade,
      length: data.length,
      color: data.color,
      notes: data.notes,
      photos: [],
      tags: data.tags,
      goal: data.goal,
      finished: false,
      progressions: []
    })
  },
  SWITCH_FINISHED(state, id) {
    let route = state.find(route => route.id === id)
    route.finished = !route.finished
  },
  ADD_PROGRESSION(state, data) {
    let route = state.data.find(route => route.id === data.id)
    route.progressions.push({
      date: data.date,
      notes: data.notes
    })
  },
  REMOVE_PROGRESSION(state, data) {
    let route = state.find(route => route.id === data.route)
    let progressionIndex = route.progressions.findIndex(progression => progression.notes === data.notes)
    route.progressions.splice(progressionIndex, 1)
  },
  REMOVE_ROUTE(state, id) {
    let indexToRemove = state.findIndex(route => route.id === id)
    state.splice(indexToRemove, 1)
  },
  PURGE_ROUTES(state, id) {
    state = state.filter(route => route.location !== id)
    saveToStorage('routes', state)
  }
}

const actions = {
  addRoute({ commit, state }, data) {
    let id = flake.gen()

    commit('ADD_ROUTE', { data, id })
    saveToStorage('routes', state)

    return id
  },
  switchFinishedRoute({ commit, state }, route) {
    commit('SWITCH_FINISHED', route)
    saveToStorage('routes', state)
  },
  addProgression({ commit, state }, entryData) {
    commit('ADD_PROGRESSION', entryData)
    saveToStorage('routes', state)
  },
  removeProgression({ commit, state }, entryData) {
    commit('REMOVE_PROGRESSION', entryData)
    saveToStorage('routes', state)
  },
  deleteRoute({ commit, state }, id) {
    commit('REMOVE_ROUTE', id)
    saveToStorage('routes', state)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
