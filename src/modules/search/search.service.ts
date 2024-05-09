import { Injectable } from "@nestjs/common";
import MeiliSearch, { Index } from "meilisearch";


@Injectable()
export class SearchService{
    private _client: MeiliSearch;
    constructor(){
        this._client = new MeiliSearch({
            host: 'http://localhost:7700',
        })
    }

    private getMovieIndex(): Index{
       return this._client.index('movies'); 
    }

    public async addDocuments(documents){
        const index = this.getMovieIndex();
        return await index.addDocuments(documents);
    }
}