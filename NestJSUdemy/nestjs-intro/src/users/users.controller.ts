import { Controller,Get,Post,Param,Query, Body,Headers,Ip} from '@nestjs/common';
import { request } from 'http';

@Controller('users')
export class UsersController {
    // * @Get() decorator is used to define a GET request handler.
    @Get('/:id/:optional?')
    public getUsers(@Param('id') id: any ,@Query('limit') limit: any){
        console.log(id);
        console.log(limit);
        return 'You sent a Get request to users endpoint';
    }
    // * @Post() decorator is used to define a POST request handler.
    @Post()
    public createUsers(@Body('email') request: any,@Headers()headers: any ,@Ip() ip: any){
        console.log(request);
        console.log(headers);
        console.log(ip);
        return 'You sent a Post request to users endpoint';
    }

}
