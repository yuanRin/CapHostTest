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
  </div>
</template>

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

  