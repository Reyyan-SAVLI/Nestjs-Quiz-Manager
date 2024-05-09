import { Controller, Get, Search } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { SearchService } from "../search/search.service";

@ApiTags('Search')
@Controller('search')
export class SearchController {
    constructor( private searchService: SearchService){}

    @Get('/')
    public async getSearch(): Promise<void>{
        const resp = await this.searchService.addDocuments([
            { id: 1, title: 'Carol', genres: ['Romance', 'Drama'] },
            { id: 2, title: 'Wonder Woman', genres: ['Action', 'Adventure'] },
            { id: 3, title: 'Life of Pi', genres: ['Adventure', 'Drama'] },
            { id: 4, title: 'Mad Max: Fury Road', genres: ['Adventure', 'Science Fiction'],},
            { id: 5, title: 'Moana', genres: ['Fantasy', 'Action'] },
            { id: 6, title: 'Philadelphia', genres: ['Drama'] },
            { id: 7, title: 'Kung Fu Panda', genres: ['Cartoon', 'Drama'] },
        ]);
    
     console.log(resp);
    }

}