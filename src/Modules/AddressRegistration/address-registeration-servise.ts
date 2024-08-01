import httpClient from "@/Plugins/http-client";
import {rigesterParameters} from "./Models/register-view-model";
class AddressRegistrationService {
  public getaddress() {
    
    return httpClient.AcharehApi.get("karfarmas/address");
  }
 
  public register(params:rigesterParameters) {
    return httpClient.AcharehApi.post(`karfarmas/address`,params);
  }
}

export default new AddressRegistrationService();
