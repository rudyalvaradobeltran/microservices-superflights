export enum RabbitMQ {
  UserQueue = 'users',
  PassengerQueue = 'passengers'
}

export enum UserMessage {
  Create='CREATE_USER',
  FindAll='FIND_USERS',
  FindOne='FIND_USER',
  Update='UPDATE_USER',
  Delete='DELETE_USER',
  ValidUser='VALID_USER'
}

export enum PassengerMessage {
  Create='CREATE_PASSENGER',
  FindAll='FIND_PASSENGERS',
  FindOne='FIND_PASSENGER',
  Update='UPDATE_PASSENGER',
  Delete='DELETE_PASSENGER'
}