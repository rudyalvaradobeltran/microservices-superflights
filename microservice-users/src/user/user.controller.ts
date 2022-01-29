import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserMessage } from 'src/common/consts';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern(UserMessage.Create)
  create(@Payload() userDto: UserDTO) {
    return this.userService.create(userDto);
  }

  @MessagePattern(UserMessage.FindAll)
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern(UserMessage.FindOne)
  findById(@Payload() id: string) {
    return this.userService.findById(id);
  }

  @MessagePattern(UserMessage.Update)
  update(@Payload() payload: any) {
    return this.userService.update(payload.id, payload.userDto);
  }

  @MessagePattern(UserMessage.Delete)
  delete(@Payload() payload: any) {
    return this.userService.delete(payload.id);
  }
}
