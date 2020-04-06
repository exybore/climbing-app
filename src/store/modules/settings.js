import { loadFromStorage, saveToStorage } from '../../utils/storage.js'

const state = {
  data: loadFromStorage('settings')
}

const getters = {
  getSettings: state => state.data,
  darkTheme: state => state.data.darkTheme,
  autoDarkTheme: state => state.data.autoDarkTheme,
  locale: state => state.data.locale === undefined ? 'en' : state.data.locale
}

const mutations = {
  UPDATE_SETTINGS (state, data) {
    state.data = data
  },
  INVERT_COLORS (state) {
    state.data.autoDarkTheme = false
    state.data.darkTheme = !state.data.darkTheme
  }
}

const actions = {
  updateSettings ({ commit, state }, data) {
    commit('UPDATE_SETTINGS', data)
    saveToStorage('settings', state.data)
  },
  invertColors ({ commit, state}) {
    commit('INVERT_COLORS')
    saveToStorage('settings', state.data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
