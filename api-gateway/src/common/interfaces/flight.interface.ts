import { PassengerInterface } from './passenger.interface';
import { WeatherInterface } from './wheater.location';

export interface FlightInterface {
  _id?: string;
  pilot: string;
  airplane: string;
  destinationCity: string;
  flightDate: Date;
  passengers: PassengerInterface[];
  weather: WeatherInterface[];
}
