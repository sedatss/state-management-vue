<template>
  <div class="board-container">
    <div class="building-list">
      <BuildingList></BuildingList>
    </div>
    <div class="gridContainer">
      <div class="grid">
        <div
            v-for="(tile, i) in board"
            :key="i"
            class="tile"
        >
          <img :src="getTilePath(tile)" alt="tile"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { State } from "@/store";
import BuildingList from '@/components/BuildingList.vue'

const store = useStore<State>()
const board = computed(() => store.getters.getBoard)

function getTilePath(tile: string): string {
  return require(`@/assets/tiles/${tile}`);
}

</script>

<style scoped>

.board-container {
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #507f7d;
}

.building-list {
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.gridContainer {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.grid {
  transform: rotateX(65deg) rotateZ(45deg);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
}

.tile {
  position: relative;
  max-width: 250px;
  max-height: 250px;
}
</style>
