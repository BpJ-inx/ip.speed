import axios from "axios";
import { ref } from "vue";
import SpeedTest from '@cloudflare/speedtest';


const ipAdress: any = ref(``);
const countryName: any = ref(``);
const city: any = ref(``);
const speedInfo: any = ref('') //:object
const speedInfoDownload: any = ref(`-`)  //(.download / 1000000).toFixed(2)
const speedInfoUpload: any = ref(`-`)
const speedInfoLatency: any = ref(`-`)
const loading: any = ref(false)


const getIpInfo = () => {
    getIP()
    getInfo()
}
async function getIP() {
    let response = await axios.get(
        `
    https://api-bdc.net/data/client-ip`
    );
    ipAdress.value = response.data.ipString;
}

async function getInfo() {
    let response = await axios.get(
        `https://api.bigdatacloud.net/data/reverse-geocode-client`
    );
    countryName.value = response.data.countryName;
    city.value = response.data.city;

}

async function getSpeed() {
    loading.value = true
    new SpeedTest().onFinish = results => { speedInfo.value = results.getSummary(); updateSpeedInfo(speedInfo) };

    function updateSpeedInfo(speedInfo: any) {
        speedInfoDownload.value = (speedInfo.value.download / 1000000).toFixed(2)
        speedInfoUpload.value = (speedInfo.value.upload / 1000000).toFixed(2)
        speedInfoLatency.value = (speedInfo.value.latency).toFixed(2);
        loading.value = false
    }

}

export {
    getIpInfo,
    ipAdress,
    countryName,
    city,
    getSpeed,
    speedInfoDownload,
    speedInfoUpload,
    speedInfoLatency,
    loading
}