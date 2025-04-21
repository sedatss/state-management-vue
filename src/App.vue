<template>
  <GameBoard ></GameBoard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GameBoard from "@/components/GameBoard.vue";

export default defineComponent({
  name: 'App',
  components: {
    GameBoard,
  }
});
</script>

<style>

body {
  margin: 0;
}

</style>


