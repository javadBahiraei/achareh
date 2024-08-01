export class getAddressessViewModel {
    id: number = null;
    address_id: string = '';
    region: Region=new Region;
    address: string = '';
    last_name: string = '';
    first_name: string = '';
    gender: string = '';
    lat: number = null;
    lng: number = null;
    coordinate_mobile: number = null;
    coordinate_phone_number: number = null
}

class Region{
    id: 1;
    name: string = '';
    city_object: City=new City;
    state_object:Object=new Object;
};
class City{
    city_id: number = null;
    city_name: string = '';
};
 class Object {
    state_id: number = null;
    state_name: string = null
}