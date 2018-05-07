import translations from '@/assets/translations.json'

const state = {
  selectedLanguage: 'English'
}

const getters = {
  selectedLanguage (state) {
    return state.selectedLanguage
  },
  text (state) {
    console.log(translations)
    return translations[state.selectedLanguage]
  },
  languages () {
    var keys = []
    for (var k in translations) {
      keys.push(k)
    }
    console.log(keys)
    return keys
  }
}

const actions = {
}

const mutations = {
  setSelectedLanguage (state, payload) {
    state.selectedLanguage = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
