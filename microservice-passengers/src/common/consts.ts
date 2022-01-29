export enum RabbitMQ {
  PassengerQueue = 'passengers'
}

export enum PassengerMessage {
  Create='CREATE_PASSENGER',
  FindAll='FIND_PASSENGERS',
  FindOne='FIND_PASSENGER',
  Update='UPDATE_PASSENGER',
  Delete='DELETE_PASSENGER'
}