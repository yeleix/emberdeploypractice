import Component from '@ember/component'

export default Component.extend({
  newExample: {
    text: ''
  },
  actions: {
    updateExample () {
      this.sendAction('update', this.get('example')) // example = data because {{#each model as |example|}} (??)
    }
  }
})
