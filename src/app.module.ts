
import { Module } from '@nestjs/common'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import appConfig from './common/configs/app.config';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './ormconfig';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dbConfig,
    }),
    UserModule,
    ConfigModule.forRoot({
      load: [appConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
