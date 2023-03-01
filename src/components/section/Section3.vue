<template #header>
  <div class="item">
    <h1 class="font h1">Result</h1>
    <div class="grid-container">
      <div v-for="(item, index) in column" :key="index" class="grid-item">{{ item }}</div>
      <div class = "grid-header font">Cp-D</div>
      <div class="grid-item font">2</div>
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


<style scoped>
.font{
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-heading);
}

.h1 {
  font-size: 1.8rem;
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