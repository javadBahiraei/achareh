<template>
    <headerRegister />

  <div class="row pt-3">
    <Map
      :latitude="addressRegistrationState.register.rigesterParameters.lat"
      :longitude="addressRegistrationState.register.rigesterParameters.lng"
      @selectLocation="selectLocation"
      :remove-marker="false"
      :editable="true"
    />
    <div class="col-12 footer-register align-content-center">
      <button class="btn btn-primary text-white w-100" @click="register">
        ثبت و ادامه
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Map from "@/Modules/AddressRegistration/Components/map.vue";
import { addressRegistrationState } from "@/Modules/AddressRegistration/address-registration-state";
import "@/Modules/AddressRegistration/Styles/address-registration.scss";
import AddressRegistrationService from "@/Modules/AddressRegistration/address-registeration-servise";
import { onMounted } from "vue";
import router from "@/router";
import headerRegister from "@/Modules/AddressRegistration/Components/header-register.vue";

function selectLocation(latitude: number, longitude: number) {
  addressRegistrationState.register.rigesterParameters.lat = latitude;
  addressRegistrationState.register.rigesterParameters.lng = longitude;
}
async function register() {
  if(addressRegistrationState.register.rigesterParameters.lat)
  await AddressRegistrationService.register(addressRegistrationState.register.rigesterParameters);
}
onMounted(() => {
  if (!addressRegistrationState.register.rigesterParameters.first_name)
    router.push(`/AddressRegistration/Create`);
});
</script>