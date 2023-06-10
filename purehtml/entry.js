
function render() {
  document.getElementById('purehtml-container').innerHTML = "Hello, render with jQuery"
  return Promise.resolve();
};

(function (global) {
  global['purehtml'] = {
    bootstrap: function() {
      console.log('purehtml bootstrap');
      return Promise.resolve();
    },
    mount:  function() {
      console.log('purehtml mount');
      return render();
    },
    unmount: function() {
      console.log('purehtml unmount');
      return Promise.resolve();
    },
  };
})(window);
// window.purehtml.mount()
