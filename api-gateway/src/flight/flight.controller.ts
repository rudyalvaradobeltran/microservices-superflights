import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { ApiOperation } from '@nestjs/swagger';
import { lastValueFrom, Observable } from 'rxjs';
import { FlightInterface } from 'src/common/interfaces/flight.interface';
import { FlightDTO } from './dto/flight.dto';
import { FlightMessage, PassengerMessage } from 'src/common/consts';

@Controller('flight')
export class FlightController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}

  private clientProxyFlight = this.clientProxy.clientProxyFlights();
  private clientProxyPassenger = this.clientProxy.clientProxyPassengers();

  @Post()
  @ApiOperation({ summary: 'Create flight' })
  create(@Body() flightDto: FlightDTO): Observable<FlightInterface> {
    return this.clientProxyFlight.send(FlightMessage.Create, flightDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all flights' })
  findAll(): Observable<FlightInterface[]> {
    return this.clientProxyFlight.send(FlightMessage.FindAll, '');
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find all flights' })
  findById(@Param('id') id: string): Observable<FlightInterface> {
    return this.clientProxyFlight.send(FlightMessage.FindOne, id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update flight by id' })
  update(
    @Param('id') id: string,
    @Body() flightDto: FlightDTO,
  ): Observable<FlightInterface> {
    return this.clientProxyFlight.send(FlightMessage.Update, {
      id,
      flightDto,
    });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete flight by id' })
  delete(@Param('id') id: string): Observable<any> {
    return this.clientProxyFlight.send(FlightMessage.Delete, id);
  }

  @Post(':flightId/passenger/:passengerId')
  async addPassenger(
    @Param('flightId') flightId: string,
    @Param('passengerId') passengerId: string,
  ) {
      const passenger = await lastValueFrom(this.clientProxyFlight.send(PassengerMessage.FindOne, passengerId));
      if (!passenger) {
        throw new HttpException('Passenger Not Found', HttpStatus.NOT_FOUND);
      }
      return this.clientProxyFlight.send(FlightMessage.AddPassenger, { flightId, passengerId });
  }
}
