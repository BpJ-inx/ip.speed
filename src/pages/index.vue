<template>
  <div class="body_page">
    <div class="info flex flex-col">
      <p class="header_info">INFO</p>
      <p class="flex border-b-2 border-black mt-2">IP: {{ ipAdress }}</p>
      <p class="flex border-b-2 border-black">Region: {{ countryName }}</p>
      <p>City: {{ city }}</p>
    </div>
    <div class="speed flex flex-col">
      <div class="flex flex-col justify-center m-auto" v-if="loading">
        <div class="w-12 h-12 border-4 border-black rounded-full loader"></div>
      </div>
      <div class="flex flex-col" v-else>
        <div class="flex justify-center">
          <div class="speed_point">
            <p>Download</p>
            {{ speedInfoDownload }} Mb/s
          </div>
          <div class="speed_point border-r-2 border-l-2 border-black">
            <p>Upload</p>
            {{ speedInfoUpload }} Mb/s
          </div>
          <div class="speed_point">
           <p>Latency</p>
            {{ speedInfoLatency }}ms
          </div>
        </div>
        <UiButtonsStartTestButton></UiButtonsStartTestButton>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ipAdress,
  countryName,
  city,
  speedInfoDownload,
  speedInfoUpload,
  speedInfoLatency,
  loading,
} from "../hooks/fetchInfo.ts";

export default {
  setup() {
    return {
      countryName,
      city,
      speedInfoDownload,
      speedInfoUpload,
      speedInfoLatency,
      ipAdress,
      loading,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/pages/indexStyles.scss";
@import "../assets/components/buttons/startTestButtonStyle.scss";
</style>
