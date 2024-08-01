<template>
  <headerRegister />
  <div class="row justify-content-center pt-4">
    <div class="col-12 col-lg-5">
      <div class="row px-3">
        <div class="col-12 d-flex justify-content-end px-0 font-15 mb-2">
          ثبت آدرس
        </div>
        <div class="col-12 bg-white rounded border py-2">
          <div class="col-12 d-flex justify-content-end mb-3">
            لطفا مشحصات خود را وارد کنید
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-12 d-flex justify-content-end pb-2">نام</div>
              <div class="col-12">
                <input
                  v-model="
                    addressRegistrationState.register.rigesterParameters
                      .first_name
                  "
                  @keypress="onlyPersianText"
                  class="form-control"
                  placeholder="مثال: محمد"
                />
                <div
                  v-if="
                    addressRegistrationState.register.registerWarning
                      .firstNameWarning
                  "
                  class="row text-danger font-11 justify-content-end px-3 text-danger mt-2"
                >
                  لطفا نام را وارد کنید
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-3">
            <div class="row">
              <div class="col-12 d-flex justify-content-end pb-2">
                نام خانوادگی
              </div>
              <div class="col-12">
                <input
                  v-model="
                    addressRegistrationState.register.rigesterParameters
                      .last_name
                  "
                  @keypress="onlyPersianText"
                  class="form-control"
                  placeholder="مثال: رضایی"
                />
                <div
                  v-if="
                    addressRegistrationState.register.registerWarning
                      .lastNameWarning
                  "
                  class="row text-danger font-11 justify-content-end px-3 text-danger mt-2"
                >
                  لطفا نام خانوادگی را وارد کنید
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-12 d-flex justify-content-end pb-2">
                شماره تلفن همراه
              </div>
              <div class="col-12">
                <input
                  v-model="
                    addressRegistrationState.register.rigesterParameters
                      .coordinate_mobile
                  "
                  @keypress="charIsNumber"
                  class="form-control"
                  placeholder="مثال: 09121234567"
                  maxlength="11"
                />
                <div
                  v-if="
                    addressRegistrationState.register.registerWarning
                      .coordinateMobileWarning
                  "
                  class="row text-danger font-11 justify-content-end px-3 text-danger mt-2"
                >
                  لطفا شماره تلفن همراه را وارد کنید
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-3">
            <div class="row">
              <div class="col-12 d-flex justify-content-end pb-2 ps-0">
                <div class="row w-100 justify-content-between">
                  <div class="col-auto text-secondary-2 px-0">
                    با پیش شماره
                    <span>*</span>
                  </div>
                  <div class="col-auto">شماره تلفن ثابت(اختیاری)</div>
                </div>
              </div>
              <div class="col-12">
                <form>
                  <input
                    v-model="
                      addressRegistrationState.register.rigesterParameters
                        .coordinate_phone_number
                    "
                    @keypress="charIsNumber"
                    class="form-control"
                    type="text"
                    id="phone"
                    name="phone"
                    maxlength="11"
                    placeholder="مثال: 02156565474"
                  />
                </form>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-12 d-flex justify-content-end pb-2">آدرس</div>
              <div class="col-12">
                <textarea
                  v-model="
                    addressRegistrationState.register.rigesterParameters.address
                  "
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  minlength="10"
                ></textarea>
                <div
                  v-if="
                    addressRegistrationState.register.registerWarning
                      .addressWarning
                  "
                  class="row text-danger font-11 justify-content-end px-3 text-danger mt-2"
                >
                  لطفا آدرس را وارد کنید
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 mt-3">
            <div class="row">
              <div class="col-12 d-flex justify-content-end pb-2">جنسیت</div>
              <div class="col-12">
                <div class="row justify-content-end">
                  <div class="col-auto">
                    <input
                      v-model="
                        addressRegistrationState.register.rigesterParameters
                          .gender
                      "
                      value="male"
                      type="radio"
                      class="form-check-input"
                      id="male"
                    />
                    <label for="male" class="ms-2"> مرد </label>
                  </div>
                  <div class="col-auto">
                    <input
                      v-model="
                        addressRegistrationState.register.rigesterParameters
                          .gender
                      "
                      value="fmale"
                      type="radio"
                      class="form-check-input"
                      id="fmale"
                    />
                    <label for="fmale" class="ms-2"> زن </label>
                  </div>
                  <div
                    v-if="
                      addressRegistrationState.register.registerWarning
                        .genderWarning
                    "
                    class="col-12 d-flex text-danger font-11 justify-content-end px-3 text-danger mt-2"
                  >
                    لطفا جنسیت زا انتخاب نمایید
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12 footer-register align-content-center">
    <button class="btn btn-primary text-white w-100" @click="register">
      ثبت و ادامه
    </button>
  </div>
</template>
<script lang="ts" setup>
import headerRegister from "@/Modules/AddressRegistration/Components/header-register.vue";
import { addressRegistrationState } from "@/Modules/AddressRegistration/address-registration-state";
import clearPhoneNumber from "@/Modules/AddressRegistration/Composable/clear-phone-number";
import "@/Modules/AddressRegistration/Styles/address-registration.scss";
import { onlyPersianText } from "@/Modules/AddressRegistration/Composable/general-utils";
import { charIsNumber } from "@/Modules/AddressRegistration/Composable/general-utils";
import { registerViewModel } from "./../Models/register-view-model";

import router from "@/router";
import { onMounted } from "vue";
async function register() {
  checkWarning();
  console.log(
    addressRegistrationState.register.rigesterParameters.coordinate_mobile
  );

  if (validParameters()) {
    router.push(`/AddressRegistration/SelectedAddress`);
  }
}
function checkWarning() {
  if (!addressRegistrationState.register.rigesterParameters.first_name) {
    addressRegistrationState.register.registerWarning.firstNameWarning = true;
  }
  if (!addressRegistrationState.register.rigesterParameters.last_name) {
    addressRegistrationState.register.registerWarning.lastNameWarning = true;
  }
  if (!addressRegistrationState.register.rigesterParameters.coordinate_mobile) {
    addressRegistrationState.register.registerWarning.coordinateMobileWarning =
      true;
  }
  if (!addressRegistrationState.register.rigesterParameters.address) {
    addressRegistrationState.register.registerWarning.addressWarning = true;
  }
  if (!addressRegistrationState.register.rigesterParameters.gender) {
    addressRegistrationState.register.registerWarning.genderWarning = true;
  }
}
function validParameters() {
  return (
    addressRegistrationState.register.rigesterParameters.gender &&
    addressRegistrationState.register.rigesterParameters.first_name.length >=
      3 &&
    addressRegistrationState.register.rigesterParameters.last_name.length >=
      3 &&
    clearPhoneNumber(
      addressRegistrationState.register.rigesterParameters.coordinate_mobile
    ) &&
    addressRegistrationState.register.rigesterParameters.address.length >= 10
  );
}
onMounted(() => {
  addressRegistrationState.register = new registerViewModel();
});
</script>