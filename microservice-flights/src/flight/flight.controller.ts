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
    return this.flightService.update(payload.id, payload.flightDTO);
  }

  @MessagePattern(FlightMessage.Delete)
  delete(@Payload() id: string) {
    return this.flightService.delete(id);
  }

  @Post(':flightId/passenger/:passengerId')
  async addPassenger(
    @Param('flightId') flightId: string,
    @Param('passengerId') passengerId: string,
  ) {
    const passenger = await this.client.findOne(passengerId);
    if (!passenger) {
      throw new HttpException('Passenger not found', HttpStatus.NOT_FOUND);
    }
    return this.flightService.addPassenger(flightId, passengerId);
  }
}
