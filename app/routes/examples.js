import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('example')
  },
  actions: {
    createExample (newExample) {
      // console.log('hi')
      // console.log(newExample.text)
      this.get('store').createRecord('example', newExample)
      .save()
    // },
    // saveExample (example) {
    //   this.sendAction('saveExample', example)
    }
  }
})
