import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submitRequest(phoneNumber, URI) {
      console.log('phoneNumber', phoneNumber);
      console.log('URI', URI);
    }
  }
});
