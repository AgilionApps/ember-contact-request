import Ember from 'ember';
import layout from './template';

const { computed, run: { debounce } } = Ember;

export default Ember.Component.extend({
  layout: layout,

  closable: true,
  mini: false,
  phoneNumber: null,
  submitted: null,
  contactMessage: null,
  contactNumber: '1 (xxx) xxx-xxxx',

  submittedText: "Great! We'll be in touch shortly.",
  buttonText: 'Submit request',

  href: computed(function() {
    return window.location.href;
  }),

  closed: computed(function() {
    const itemName = `${this.get('href')}-contact-request-closed`;
    return window.localStorage.getItem(itemName) === 'true';
  }),

  actions: {
    close() {
      const itemName = `${this.get('href')}-contact-request-closed`;
      window.localStorage.setItem(itemName, 'true');
      this.set('closed', true);
    },

    submit() {
      const phoneNumber = this.get('phoneNumber');
      const URI = window.location.href;

      debounce(this, () => this.sendAction('action', phoneNumber, URI), 300);
    }
  }
});
