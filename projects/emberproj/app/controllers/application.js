import Ember from 'ember';

export default Ember.Controller.extend({
  data: `i'm test data`,

  actions: {
    updateData($event) {
      debugger
      this.set('data', 'omg')
    }
  }
});
