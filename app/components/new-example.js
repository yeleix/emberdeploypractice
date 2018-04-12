import Component from '@ember/component'

export default Component.extend({
  newExample: {
    text: ''
  },
  actions: {
    createExample () {
      this.sendAction('create', this.get('newExample'))
      this.set('newExample.text', '') // get rid of text field
    }
  }
})
