import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserMessage } from 'src/common/consts';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { UserDTO } from 'src/user/dto/user.dto';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly clientProxy: ClientProxySuperFlights,
    private readonly jwtService: JwtService
  ) {}

  private clientProxyUser = this.clientProxy.clientProxyUsers();

  async validateUser(username: string, password: string): Promise<any> {
    const user = await lastValueFrom(this.clientProxyUser.send(UserMessage.ValidUser, { username, password }));
    if (user) return user;
    return null;
  }

  async signIn(user: any) {
    const payload = {
      username: user.username,
      sub: user._id
    };
    return { access_token: this.jwtService.sign(payload) };
  }

  async signUp(userDTO: UserDTO) {
    return await lastValueFrom(this.clientProxyUser.send(UserMessage.Create, userDTO));
  }
}
