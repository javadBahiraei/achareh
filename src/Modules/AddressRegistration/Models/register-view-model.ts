export class registerViewModel {
    rigesterParameters: rigesterParameters = new rigesterParameters();
    registerWarning: registerWarningModel = new registerWarningModel()

}
export class rigesterParameters {
    first_name: string = '';
    last_name: string = '';
    coordinate_mobile: string = '';
    coordinate_phone_number: string = '';
    address: string = '';
    region: number = 1;
    lat: number = null;
    lng: number = null;
    gender: string = '';
}
export class registerWarningModel {
    firstNameWarning = false;
    lastNameWarning = false;
    coordinateMobileWarning = false;
    addressWarning = false;
    genderWarning = false;

}