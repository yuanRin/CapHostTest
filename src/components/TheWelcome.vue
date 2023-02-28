<script setup>
import WelcomeItem from './SectionTestConfig.vue'
//import DocumentationIcon from './icons/IconDocumentation.vue'
//import ToolingIcon from './icons/IconTooling.vue'
//import EcosystemIcon from './icons/IconEcosystem.vue'
//import CommunityIcon from './icons/IconCommunity.vue'
//import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
  <template #header>
    <h1>Test Configuration</h1>
    <div>
    <label for="cbTestFrequency">Test Frequency : </label>
    <select id="cbTestFrequency" v-model="selectedOption1">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
    </select>
    </div>
    <div>
      <label for="cbTestVoltage">Voltage Level : </label>
      <select id="cbTestVoltage">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #header>
      <h1>Calibration</h1>
      <div>
        <button @click="handleButtonClick">Open Calibration</button>
        <button>Short Calibration</button>
      </div>
      <label>NOTE: Warm up for 30 minutes before do calibration.</label>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #header>
      <h1>Result</h1>
      <div>
        <label>Some label</label>
        <label>Another label</label>
        <label>Yet another label</label>
      </div>
    </template>
  </WelcomeItem>
  

</template>