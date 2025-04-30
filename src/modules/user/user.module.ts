import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [],
  exports: [],
  // Add any other necessary configurations or modules
})
export class UserModule {}
