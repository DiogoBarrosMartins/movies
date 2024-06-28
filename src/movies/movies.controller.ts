import { Controller, Post, Body, Get, Put, Delete, Param } from "@nestjs/common";
import { MoviesService } from "./movies.service";



@Controller('movies')
// we declare both the feature plus the type of class here for the sake of clarity
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Post()
    AddMovie(
        @Body('title') movieTitle:string, 
        @Body('description') movieDescription:string, 
        //creating and implementing a specific Date format is advised. 
        @Body('releaseDate') movieReleaseDate:Date, 
        @Body('genre') movieGenre:string[], 
    ): any {
      return this.moviesService.addMovie(movieTitle,movieDescription,movieReleaseDate,movieGenre );  
    };

    @Get()
    ListMovies(){
        return this.moviesService.getAllMovies();
    }

    @Put()
    UpdateMovie(
        @Body('title') movieTitle:string, 
        @Body('description') movieDescription:string, 
        @Body('releaseDate') movieReleaseDate:Date, 
        @Body('genre') movieGenre:string[]
    ){
        return this.moviesService.updateMovie(movieTitle,movieDescription,movieReleaseDate,movieGenre );  
    };

    @Delete()
    DeleteMovie(){};

    @Get()
    ListGenres(){};


    @Post('/genre')
    AddGenre(
        @Body('name') genreName:string, 
        
    ): any {
      return this.moviesService.addGenre(genreName);  
    };

    @Delete('/genre')
    DeleteGenre(){};

    @Get(':search')
    SearchMovies(@Param('search') movieSearch:string,){
        return this.moviesService.getSearch(movieSearch);
    };

}