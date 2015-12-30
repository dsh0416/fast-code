Vue.config.debug = true;
window.onload = function () {
  new Vue({
    el: '#app',
    data: {
      toolMode: 'Morse'
    }
  });
};
