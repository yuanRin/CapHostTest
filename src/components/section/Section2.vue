<template #header>
  <div class="item">
    <h1 class="font h1">Calibration</h1>
    <div id = "app">
      <button @click="handleButtonClick" class="button">Open Calibration</button>
      <button class="button">Short Calibration</button>
    </div>
    <label class="font">NOTE: Warm up for 30 minutes before do calibration.</label>
  </div>
</template>


<script>
export default {
  methods: {
    handleButtonClick() {
      console.log('Button 1 clicked!');
    },
  },
};
</script>

<style scoped>
.font{
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-heading);
}

.h1 {
  font-size: 1.8rem;
}

.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 4px 5px;
  cursor: pointer;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>