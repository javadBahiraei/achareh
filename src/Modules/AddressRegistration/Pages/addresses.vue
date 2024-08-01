<template>
  <headerRegister />
  <div class="row justify-content-center ">
    <div class="col-12 col-lg-5">
      <div class="row mt-4 px-4">
        <div class="col-12 font-15 d-flex justify-content-end mb-3 px-0">
          آدرس ها و مشحصات
        </div>
        <div class="col-12 rounded bg-white px-0">
          <div class="row px-4 py-3">
            <div class="col-12 mb-2">
              <div class="row justify-content-between">
                <div class="col-auto">{{addressRegistrationState.getAddressess.first_name}}{{ addressRegistrationState.getAddressess.last_name }}</div>
                <div class="col-auto text-secondary-2">نام و نام خانوادگی</div>
              </div>
            </div>
            <div class="col-12">
              <div class="row justify-content-between">
                <div class="col-auto">{{addressRegistrationState.getAddressess.gender}}</div>
                <div class="col-auto text-secondary-2">جنسیت</div>
              </div>
            </div>
            <div class="col-12 my-2">
              <div class="row justify-content-between">
                <div class="col-auto">{{addressRegistrationState.getAddressess.coordinate_mobile}}</div>
                <div class="col-auto text-secondary-2">شماره تلفن همراه</div>
              </div>
            </div>
            <div class="col-12 border-bottom pb-2">
              <div class="row justify-content-between">
                <div class="col-auto">{{addressRegistrationState.getAddressess.coordinate_phone_number}}</div>
                <div class="col-auto text-secondary-2">شماره تلفن ثابت</div>
              </div>
            </div>
            <div class="col-12 mt-2">
              <div class="row">
                <div class="col-12 d-flex justify-content-end text-secondary-2">
                  آدرس
                </div>
                <div class="col-12 d-flex justify-content-end mt-2">{{addressRegistrationState.getAddressess.address}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import AddressRegistrationService from "@/Modules/AddressRegistration/address-registeration-servise";
import headerRegister from "@/Modules/AddressRegistration/Components/header-register.vue";
import { addressRegistrationState } from "@/Modules/AddressRegistration/address-registration-state";

import { onMounted } from "vue";
async function getaddress() {
  const res = await AddressRegistrationService.getaddress();
  addressRegistrationState.getAddressess=res.data.data;
}
onMounted(() => {
  getaddress();
});
</script>