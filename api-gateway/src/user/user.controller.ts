import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards
} from '@nestjs/common';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { UserInterface } from 'src/common/interfaces/user.interface';
import { UserDTO } from './dto/user.dto';
import { UserMessage } from 'src/common/consts';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('users')
@UseGuards(JwtAuthGuard)
@Controller('api/user')
export class UserController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}

  private clientProxyUser = this.clientProxy.clientProxyUsers();
  
  @Post()
  @ApiOperation({ summary: 'Create user' })
  create(@Body() userDto: UserDTO): Observable<UserInterface> {
    return this.clientProxyUser.send(UserMessage.Create, userDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all users' })
  findAll(): Observable<UserInterface[]> {
    return this.clientProxyUser.send(UserMessage.FindAll, '');
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find all users' })
  findById(@Param('id') id: string): Observable<UserInterface> {
    return this.clientProxyUser.send(UserMessage.FindOne, id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update user by id' })
  update(
    @Param('id') id: string,
    @Body() userDto: UserDTO,
  ): Observable<UserInterface> {
    return this.clientProxyUser.send(UserMessage.Update, { id, userDto });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by id' })
  delete(@Param('id') id: string): Observable<any> {
    return this.clientProxyUser.send(UserMessage.Delete, id);
  }
}
