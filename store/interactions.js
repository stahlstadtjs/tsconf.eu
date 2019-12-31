export const state = () => ({
  isMainNavigationVisible: false
})

export const mutations = {
  setMainNavigationVisibility (state, isMainNavigationVisible) {
    state.isMainNavigationVisible = isMainNavigationVisible
  }
}