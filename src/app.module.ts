import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mainDatabaseConfig } from './services/databases/main-database/main-database.config';
import { MainDatabaseModule } from './services/databases/main-database/main-database.module';
import { UsersModule } from './apps/main/users/users.module';
import { TitlesModule } from './apps/main/titles/titles.module';
import { SnacksModule } from './apps/secondary/snacks/snacks.module';
import { SecondaryDatabaseModule } from './services/databases/secondary-database/secondary-database.module';
import { DatabaseEnum } from './resources/enum/database.enum';
import { secondaryDatabaseConfig } from './services/databases/secondary-database/secondary-database.config';
import { RolesModule } from './apps/main/roles/roles.module';
import { PostgresDatabaseModule } from './services/databases/postgres-database/postgres-database.module';
import { DepartmentsModule } from './apps/postgres/departments/departments.module';
import { postgresDatabaseConfig } from './services/databases/postgres-database/postgres-database.config';
import { BedsModule } from './apps/postgres/beds/beds.module';
import { WardsModule } from './apps/postgres/wards/wards.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot(mainDatabaseConfig),
    // TypeOrmModule.forRootAsync({
    //   name: DatabaseEnum.SECONDARY,
    //   useFactory: () => secondaryDatabaseConfig,
    // }),
    // TypeOrmModule.forRootAsync({
    //   name: DatabaseEnum.POSTGRESQL,
    //   useFactory: () => postgresDatabaseConfig,
    // }),
    TypeOrmModule.forRoot(postgresDatabaseConfig),
    UsersModule,
    MainDatabaseModule,
    TitlesModule,
    SnacksModule,
    SecondaryDatabaseModule,
    RolesModule,
    PostgresDatabaseModule,
    DepartmentsModule,
    BedsModule,
    WardsModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
