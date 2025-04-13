<template>
  <PaPBoard ></PaPBoard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import PaPBoard from "@/components/GameBoard.vue";

export default defineComponent({
  name: 'App',
  components: {
    PaPBoard,
  }
});
</script>

<style>

body {
  margin: 0;
}

</style>


