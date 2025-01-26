import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Headers,
  Ip,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  // * @Get() decorator is used to define a GET request handler.
  @Get('/:id')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit') limit: number ,
    @Query('page') page: number,
  ) {
    console.log(typeof id);
    console.log(id);
    return 'You sent a Get request to users endpoint';
  }
  // * @Post() decorator is used to define a POST request handler.
  @Post()
  public createUsers(
    @Body('email') request: any,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(request);
    console.log(headers);
    console.log(ip);
    return 'You sent a Post request to users endpoint';
  }
}
