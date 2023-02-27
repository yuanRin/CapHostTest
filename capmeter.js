<!DOCTYPE html>
<html>
  <head>
    <title>Vue.js ComboBox Example</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  </head>
  <body>
    <div id="app">
      <div>
        <label for="combo1">Select item:</label>
        <select id="combo1" v-model="selectedItem1">
          <option v-for="item in items1" :value="item">{{ item }}</option>
        </select>
      </div>
      <div>
        <label for="combo2">Select item:</label>
        <select id="combo2" v-model="selectedItem2">
          <option v-for="item in items2" :value="item">{{ item }}</option>
        </select>
      </div>
      <div>
        <button @click="onButtonClick">Button 1</button>
        <button @click="onButtonClick">Button 2</button>
      </div>
      <div>
        <label>Status:</label>
        <span>{{ status }}</span>
      </div>
    </div>

    <script>
      var app = new Vue({
        el: '#app',
        data: {
          items1: ['Item 1', 'Item 2', 'Item 3'],
          items2: ['Item A', 'Item B', 'Item C'],
          selectedItem1: '',
          selectedItem2: '',
          status: 'Ready',
        },
        methods: {
          onButtonClick: function() {
            this.status = 'Button clicked';
          }
        }
      });
    </script>
  </body>
</html>