export enum RabbitMQ {
  FlightsQueue = 'flights'
}

export enum FlightMessage {
  Create='CREATE_FLIGHT',
  FindAll='FIND_FLIGHTS',
  FindOne='FIND_FLIGHT',
  Update='UPDATE_FLIGHT',
  Delete='DELETE_FLIGHT',
  AddPassenger='ADD_PASSENGER'
}