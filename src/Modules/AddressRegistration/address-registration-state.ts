import { reactive } from "vue";
import { registerViewModel } from './Models/register-view-model';
import { getAddressessViewModel } from "./Models/get-addressess-view-model";
export const addressRegistrationState = reactive({
    register:<registerViewModel>new registerViewModel(),
    getAddressess:<getAddressessViewModel>new getAddressessViewModel()
  });
  