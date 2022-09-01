import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
    async findOne(id: string){
        const contents= await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);

        return messages[id];
    }
    async findAll(){
        const contents= await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);

        return messages;
    }
    async create(content: string){
        const contents= await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);

        //generate id
        const id = Math.floor(Math.random() * 999);

        //adding new message
        messages[id] = { id, content };

        //writing file back to message.json
        await writeFile('messages.json', JSON.stringify(messages));
    }
}