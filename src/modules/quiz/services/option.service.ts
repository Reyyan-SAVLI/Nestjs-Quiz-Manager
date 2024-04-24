import { Repository } from "typeorm";
import { Option } from "../entities/option.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class OptionService{
    constructor(
        @InjectRepository(Option) 
        private optionRepository: Repository<Option>,
    ){}


}