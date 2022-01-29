import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { PassengerInterface } from 'src/common/interfaces/passenger.interface';
import { PassengerDTO } from './dto/passenger.dto';
import { PassengerMessage } from 'src/common/consts';

@ApiTags('passengers')
@Controller('api/passenger')
export class PassengerController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}

  private clientProxyPassenger = this.clientProxy.clientProxyPassengers();

  @Post()
  @ApiOperation({ summary: 'Create passenger' })
  create(@Body() passengerDto: PassengerDTO): Observable<PassengerInterface> {
    return this.clientProxyPassenger.send(
      PassengerMessage.Create,
      passengerDto,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Find all passengers' })
  findAll(): Observable<PassengerInterface[]> {
    return this.clientProxyPassenger.send(PassengerMessage.FindAll, '');
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find all passengers' })
  findById(@Param('id') id: string): Observable<PassengerInterface> {
    return this.clientProxyPassenger.send(PassengerMessage.FindOne, id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update passenger by id' })
  update(
    @Param('id') id: string,
    @Body() passengerDTO: PassengerDTO,
  ): Observable<PassengerInterface> {
    return this.clientProxyPassenger.send(PassengerMessage.Update, {
      id,
      passengerDTO,
    });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete passenger by id' })
  delete(@Param('id') id: string): Observable<any> {
    return this.clientProxyPassenger.send(PassengerMessage.Delete, id);
  }
}
