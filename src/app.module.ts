import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainDatabaseModule } from './services/individual/databases/main-database/main-database.module';
import { UsersModule } from './apps/main/users/users.module';
import { TitlesModule } from './apps/main/titles/titles.module';
import { SnacksModule } from './apps/secondary/snacks/snacks.module';
import { SecondaryDatabaseModule } from './services/individual/databases/secondary-database/secondary-database.module';
import { RolesModule } from './apps/main/roles/roles.module';
import { PostgresDatabaseModule } from './services/individual/databases/postgres-database/postgres-database.module';
import { DepartmentsModule } from './apps/postgres/departments/departments.module';
import { postgresDatabaseConfig } from './services/individual/databases/postgres-database/postgres-database.config';
import { BedsModule } from './apps/postgres/beds/beds.module';
import { WardsModule } from './apps/postgres/wards/wards.module';
import { AjvModule } from './services/global/ajv/ajv.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot(mainDatabaseConfig),
    // TypeOrmModule.forRootAsync({
    //   name: DatabaseEnum.SECONDARY,
    //   useFactory: () => secondaryDatabaseConfig,
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
    AjvModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
