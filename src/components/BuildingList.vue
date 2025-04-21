<template>
  <div class="building-list">
    <ul class="building-items">
      <li
          v-for="(image, index) in images"
          :key="index"
          :class="['building-item', { 'selected': selectedItem === index }]"
          @click="selectItem(index)"
      >
        <img :src="image.src" :alt="image.alt" class="building-image">
      </li>
    </ul>
    <div class="button-container">
      <button
          class="submitButton"
          @click="buildBuilding"
          :disabled="selectedItem === null || timer > 0"
      >
        Build a Building
      </button>
      <div class="timer" :class="{ hidden: timer === 0 }">{{ timer }}s</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {useStore} from 'vuex';
import {State} from "@/store";

const images = [
  {src: require('@/assets/tiles/lumberyard.png'), alt: 'Lumberyard image'},
  {src: require('@/assets/tiles/hop_farm.png'), alt: 'Hop Farm image'},
];
const underConstructionImage = 'under_construction.png';

const selectedItem = ref<number | null>(null);
const timer = ref<number>(0);
const store = useStore<State>();

const buildingSpotIndex = 4;

function selectItem(index: number) : void {
  if (timer.value > 0) return;
  selectedItem.value = selectedItem.value === index ? null : index;
}

function buildBuilding() : void {
  store.commit('setTile', {index: buildingSpotIndex, value: underConstructionImage});


  timer.value = 10;

  const countdown = setInterval(() => {
    if (timer.value > 0) {
      timer.value--;
    } else {
      clearInterval(countdown);
      if (selectedItem.value !== null) {
        const buildingImage = images[selectedItem.value].src;
        const imageName = buildingImage.split('/').pop()?.replace(/\.[a-f0-9]+\./, '.');
        store.commit('setTile', {index: buildingSpotIndex, value: imageName});
      }
    }
  }, 1000);
}

</script>

<style scoped>
.building-list {
  width: 300px;
  padding: 20px;
  background-image: url('@/assets/ui/building_screen_background.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
}

.building-items {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.building-item {
  cursor: pointer;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 8px;
}

.building-item.selected {
  background-color: rgba(255, 0, 0, 0.2);
  transform: scale(0.8);
}

.building-image {
  width: 200px;
  height: 200px;
  border-radius: 4px;
  transform: rotateX(65deg) rotateZ(45deg);
}

.submitButton {
  color: white;
  background-color: #15636c;
  border-radius: 3px;
  height: 35px;
  font-size: 14px;
  width: 150px;
  border: 3px solid black;
  margin-bottom: 40px;
}

.submitButton:disabled {
  background-color: #888;
  cursor: not-allowed;
  opacity: 0.6;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timer {
  margin-bottom: 40px;
  font-size: 16px;
  color: white;
}

.timer.hidden {
  visibility: hidden;
}
</style>
