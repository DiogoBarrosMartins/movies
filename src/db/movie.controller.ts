import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository} from 'typeorm'
import { Movie } from "src/entities/movie.entity";

@Controller('movies')
export class MoviesController{
    constructor(
        @InjectRepository(Movie)
        private readonly movieRepository: Repository<Movie>,
    ){}


    @Get()
    async listMovies(): Promise<Movie[]>{
        return await this.movieRepository.find();
    }

    @Get(':search')
    async movieSearch(@Param('seach') search: any): Promise<Movie> {
        return await this.movieRepository.findOne(search);
    }

    @Post()
    AddMovie(
        @Body('title') movieTitle:string, 
        @Body('description') movieDescription:string, 
        //creating and implementing a specific Date format is advised. 
        @Body('releaseDate') movieReleaseDate:Date, 
        @Body('genre') movieGenre:string[], 
    ): any {
      return this.movieRepository.save(movieTitle,movieDescription,movieReleaseDate,movieGenre );  
    };


}