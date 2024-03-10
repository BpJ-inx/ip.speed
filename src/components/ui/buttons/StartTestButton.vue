<template>
  <button class="button" @click="getSpeed()">Start speed test</button>
</template>

<script>
import { getSpeed, getIpInfo } from "~/src/hooks/fetchInfo";
import { onBeforeMount } from "vue";
export default {
  setup() {
    onBeforeMount(() => {
      getIpInfo();
    });
    return {
      getSpeed,
      getIpInfo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
