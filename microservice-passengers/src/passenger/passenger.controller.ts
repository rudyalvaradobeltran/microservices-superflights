import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PassengerMessage } from 'src/common/consts';
import { PassengerDTO } from './dto/passenger.dto';
import { PassengerService } from './passenger.service';

@Controller()
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @MessagePattern(PassengerMessage.Create)
  create(@Payload() passengerDTO: PassengerDTO) {
    return this.passengerService.create(passengerDTO);
  }

  @MessagePattern(PassengerMessage.FindAll)
  findAll() {
    return this.passengerService.findAll();
  }

  @MessagePattern(PassengerMessage.FindOne)
  findOne(@Payload() id: string) {
    return this.passengerService.findOne(id);
  }

  @MessagePattern(PassengerMessage.Update)
  update(@Payload() payload: any) {
    return this.passengerService.update(payload.id, payload.passengerDTO);
  }

  @MessagePattern(PassengerMessage.Delete)
  delete(@Payload() id: string) {
    return this.passengerService.delete(id);
  }
}
