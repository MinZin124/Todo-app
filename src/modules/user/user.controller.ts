import {
  Get,
  Param,
  Controller,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:username')
  getUser(@Param('username') username: string) {
    return {
      username,
      email: `${username}@example.com`,
      password: '123',
    };
  }

  @Post('/users')
  createUser(
    @Body() body: { username: string; email: string; password: string },
  ) {
    return {
      username: body.username,
      email: body.email,
      password: body.password,
    };
  }

  @Patch('/users/:username')
  updateUser(
    @Body() body: { username: string; email: string; password: string },
  ) {
    return {
      username: body.username,
      email: body.email,
      password: body.password,
    };
  }

  @Delete('/users/:username')
  deleteUser(@Param('username') username: string) {
    return {
      message: `User ${username} deleted successfully`,
    };
  }
}
