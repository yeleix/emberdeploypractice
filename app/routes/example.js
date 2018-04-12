import Route from '@ember/routing/route'

export default Route.extend({
  model (params) {
    console.log(params)
    return this.get('store').findRecord('example', params.example_id)
  },

  actions: {
    deleteExample (example) {
      console.log(example)
      example.destroyRecord()
        .then(() => this.transitionTo('examples'))
    },
    saveExample (example) {
      example.save()
    }
  }
})
