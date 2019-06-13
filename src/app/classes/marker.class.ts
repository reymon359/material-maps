// Marker class for maps

export class Marker {

    public lat: number;
    public lng: number;

    // Default values
    public title = 'No Title';
    public desc = 'No Description'; 

    constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }
}