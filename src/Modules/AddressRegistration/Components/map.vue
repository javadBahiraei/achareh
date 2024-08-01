<template>
 
    <div id="map" style="height: 100vh;"></div>
 
</template>

<script lang="ts" setup>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {onMounted, ref, watch} from "vue";

const marker = ref(null);
const map = ref(null);
const icon = L.icon({
  iconUrl: require("@/assets/marker-icon.png"),
  iconSize: [25, 41],
  iconAnchor: [12.5, 40],
  shadowUrl: require("@/assets/marker-shadow.png"),
  shadowSize: [41, 41],
  shadowAnchor: [12.5, 39]
});
const prop = defineProps<{
  latitude?: number;
  longitude?: number;
  removeMarker?: boolean;
  editable?: boolean;
}>();
const emit = defineEmits<{
  (e: "selectLocation", latitude: number, longitude: number): void;
}>();

function onMapClick(e) {
  if (!prop.editable) {
    return;
  }
  if (marker.value) {
    map.value.removeLayer(marker.value);console.log(marker.value);
    
  }
  emit("selectLocation", e.latlng.lat, e.latlng.lng);
  marker.value = L.marker([e.latlng.lat, e.latlng.lng], {icon: icon}).addTo(
      map.value
  );
}

watch(
    () => prop.removeMarker,
    (newVal: boolean) => {
      if (newVal) {
        map.value.removeLayer(marker.value);
      }
    }
);

watch(
    () => prop.latitude,
    () => {
      if (prop.latitude && prop.longitude) {
        map.value.setView([prop.latitude, prop.longitude], 9);
        marker.value = L.marker([prop.latitude, prop.longitude], {
          icon: icon
        }).addTo(map.value);
      }
    }
)

onMounted(() => {
  map.value = L.map("map").setView([35.7219, 51.3347], 9);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 20,
    attribution: "© OpenStreetMap"
  }).addTo(map.value);
  map.value.on("click", onMapClick);
});
</script>
