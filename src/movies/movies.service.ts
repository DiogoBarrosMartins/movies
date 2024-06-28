import { Injectable, NotFoundException } from "@nestjs/common";

import { Movies } from "./movies.model";

@Injectable()
export class MoviesService {
    updateMovie(movieTitle: string, movieDescription: string, movieReleaseDate: Date, movieGenre: string[]) {
        throw new Error("Method not implemented.");
    }
    
    addGenre(genreName: string): any {
        throw new Error("Method not implemented.");
    }

    private movies : Movies[] = [];

    addMovie(
        title:string, 
        description: string, 
        releaseDate: Date, 
        genre: string[]
    ) {
        let newMovie = new Movies(title, description, releaseDate,genre)
        this.movies.push(newMovie);
        return newMovie;
    }


    getAllMovies(){
        return [...this.movies];
    }

    getSearch(search: string){

        let movie = this.movies.find((mov) => mov.title == search)
        
        for (let i = 0; i < movie.genre.length; i++) {
            const element = movie.genre[i];
           if( this.movies.find((mov) => mov.genre[i] == search))
            {
                  return movie; 
            }
         
        }
        
        if (!movie){
            throw new NotFoundException('No movies with that Title or Genre were found.');
        }
        return {...movie};
    }
}