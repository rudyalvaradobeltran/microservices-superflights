export enum RabbitMQ {
  UserQueue = 'users'
}

export enum UserMessage {
  Create='CREATE_USER',
  FindAll='FIND_USERS',
  FindOne='FIND_USER',
  Update='UPDATE_USER',
  Delete='DELETE_USER',
  ValidUser='VALID_USER'
}