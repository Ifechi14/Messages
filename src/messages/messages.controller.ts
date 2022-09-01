import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dtos';
import { MessagesServices } from './message.services';

//class decorator
@Controller('messages')
export class MessagesController {
    constructor(public messagesServices: MessagesServices){
        
    }
    //method decorator
    @Get()
    listMessages(){
         return this.messagesServices.findAll();
    }

    @Post()
    createMessage(
        //argument decorator
        @Body() body: CreateMessageDto
    ){
        return this.messagesServices.create(body.content);
    }

    @Get('/:id')
    async getMessage(
        //argument decorator 
        @Param('id') id: string
    ){
        const message = await this.messagesServices.findOne(id);

        if(!message){
            throw new NotFoundException('message not found');
        }

        return message;
    }

}
 