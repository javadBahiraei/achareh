<template>
  <header class="head-container bg-white px-4">
    <div class="row h-100 align-items-center">
      <div class="col-auto px-0 cursor-pointer">
        <router-link
          to="Addresses"
          class="text-decoration-none"
          :class="
            useRoute().name != 'AddressRegistrationAddresses'
              ? 'text-primary'
              : 'text-black'
          "
        >
          مشاهده آدرس ها
        </router-link>
      </div>
      <div class="col">
        <div class="row justify-content-center">
          <div class="col-auto px-0">
            <router-link
              to="Create"
              class="text-decoration-none"
              :class="
                useRoute().name == 'AddressRegistrationAddresses'
                  ? 'text-primary'
                  : 'text-black'
              "
            >
              ثبت آدرس
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-auto">
        <img src="@/assets/logo.png" alt="logo" width="40px" height="20px" />
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import "@/Modules/AddressRegistration/Styles/address-registration.scss";
import { useRoute } from "vue-router";
</script>