import { Controller, Post } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { ApiTags } from "@nestjs/swagger";
import { events } from "src/common/constants/event.constants";
import { ResponseAddEvent } from "../events/response-add.event";

@Controller('/response')
@ApiTags('Response')
export class ResponseController {
    constructor( private eventEmitter: EventEmitter2){}

    @Post('')
    async handleQuestionResponse(){

        console.log ('ghjhgjkh');
        const payload = new ResponseAddEvent()
        payload.userId = 1;
        payload.optionId = 12;

        this.eventEmitter.emit(events.RESPONSE_SUBMITTED,payload)

        return { message: 'fgdfhd'}
    }
}