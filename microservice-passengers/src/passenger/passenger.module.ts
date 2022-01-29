import { Module } from '@nestjs/common';
import { Passenger } from '../common/models/models';
import { PassengerService } from './passenger.service';
import { PassengerController } from './passenger.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PassengerSchema } from './schema/passenger.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Passenger.name,
        useFactory: () => {
          return PassengerSchema;
        },
      },
    ]),
  ],
  providers: [PassengerService],
  controllers: [PassengerController],
})
export class PassengerModule {}
