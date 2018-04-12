import Component from '@ember/component'

export default Component.extend({
  newExample: {
    text: ''
  },
  actions: {
    createExample () {
      this.sendAction('create', this.get('newExample'))
    }
  }
})
