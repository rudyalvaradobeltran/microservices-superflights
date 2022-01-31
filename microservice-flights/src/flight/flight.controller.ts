import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FlightMessage } from 'src/common/consts';
import { FlightDTO } from './dto/flight.dto';
import { FlightService } from './flight.service';

@Controller()
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @MessagePattern(FlightMessage.Create)
  create(@Payload() flightDTO: FlightDTO) {
    return this.flightService.create(flightDTO);
  }

  @MessagePattern(FlightMessage.FindAll)
  findAll() {
    return this.flightService.findAll();
  }

  @MessagePattern(FlightMessage.FindOne)
  findOne(@Payload() id: string) {
    return this.flightService.findOne(id);
  }

  @MessagePattern(FlightMessage.Update)
  update(@Payload() payload) {
    return this.flightService.update(payload.id, payload.flightDto);
  }

  @MessagePattern(FlightMessage.Delete)
  delete(@Payload() id: string) {
    return this.flightService.delete(id);
  }

  @MessagePattern(FlightMessage.AddPassenger)
  addPassenger(@Payload() payload) {
    return this.flightService.addPassenger(payload.flightId, payload.passengerId);
  }
}
