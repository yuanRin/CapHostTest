<template>
  <div class = "item">
    <h1 class="font h1">Test Configuration</h1>
    <div>
    <label for="cbTestFrequency" class="font">Test Frequency : </label>
    <select id="cbTestFrequency" class="bigcombobox">
        <option value="option1" class="font">1 MHz</option>
        <option value="option2" class="font">1 KHz</option>
        <option value="option3" class="font">120 Hz</option>
    </select>
    </div>
    <div>
      <label for="cbTestVoltage" class="font">Voltage Level</label>
      <label for="cbTestVoltage" class="font lbl "> :</label>
      <select id="cbTestVoltage" class="bigcombobox">
        <option value="option1" class="font">0.25 Vrms</option>
        <option value="option2" class="font">0.5 Vrms</option>
        <option value="option3" class="font">1 Vrms</option>
        <option value="option3" class="font">2 Vrms</option>
      </select>
    </div>
    <h1 class="font h1">Calibration</h1>
    <div id = "app">
      <button @click="handleButtonClick" class="button">Open Calibration</button>
      <button class="button">Short Calibration</button>
    </div>
    <label class="font">NOTE: Warm up for 30 minutes before do calibration.</label>
    <h1 class="font h1">Result</h1>
    <div class="grid-container">
      <div class = "grid-header font">Cp-D</div>
      <div class="grid-item font">{{kekl}}</div>
      <div class="grid-item font">3</div>
      <div class = "grid-header font">Cs-D</div>
      <div class="grid-item font">5</div>
      <div class="grid-item font">6</div>
      <div class = "grid-header font">Cs-Rs</div>
      <div class="grid-item font">8</div>
      <div class="grid-item font">9</div>
      <div class = "grid-header font">Lp-Q</div>
      <div class="grid-item font">11</div>
      <div class="grid-item font ">12</div>
      <div class = "grid-header font">Ls-Q</div>
      <div class="font grid-item">14</div>
      <div class="font grid-item">15</div>
      <div class = "font grid-header">Ls-Rs</div>
      <div class="font grid-item">17</div>
      <div class="font grid-item">18</div>
    </div>
    <div class="grid-container grid-container2">
      <div class = "font grid-header">Impedance range</div>
      <div class="font grid-item">20</div>
      <div class = "font grid-header">Impedance</div>
      <div class="font grid-item">23</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kekl: "Before"
    }
  },
  methods: {
    handleButtonClick() {
      this.kekl = "a"
    }
  }
}
</script>

<style scoped>
.font {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-heading);
}

.h1 {
  font-size: 1.8rem;
}

.lbl {
  display: "inline-block";
  margin-left: .8rem;
  margin-right: .2rem;
}

.bigcombobox{
  width: 10rem;
  height: 1.8rem;
  margin-left: .5rem;
  margin-top: .3rem;
  cursor: pointer;
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

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6px;
  margin-top: 0.6rem;
}

.grid-container2 {
  grid-template-columns: repeat(2,1fr);
}

.grid-header {
  text-align: left;
} 

.grid-item {
  border: 1px solid black;
  height: 30px;
  text-align: center;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
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

  