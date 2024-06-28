import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule} from '@nestjs/typeorm';
import { MoviesModule } from './movies/movies.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host:'localhost',
    port:5432,
    username:'your_db_username',
    password:'your_db_username',
    database:'your_db_username',
    entities:[MoviesModule],
    synchronize:true,

  }),
  TypeOrmModule.forFeature([MoviesModule]),
],
  controllers: [AppController],
})
export class AppModule {}
