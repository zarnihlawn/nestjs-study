import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './apps/main/roles/roles.module';
import { TitlesModule } from './apps/main/titles/titles.module';
import { UsersModule } from './apps/main/users/users.module';
import { BedsModule } from './apps/postgres/beds/beds.module';
import { DepartmentsModule } from './apps/postgres/departments/departments.module';
import { WardsModule } from './apps/postgres/wards/wards.module';
import { SnacksModule } from './apps/secondary/snacks/snacks.module';
import { DatabaseEnum } from './resources/enum/database.enum';
import { AjvModule } from './services/global/ajv/ajv.module';
import { mainDatabaseConfig } from './services/individual/databases/main-database/main-database.config';
import { MainDatabaseModule } from './services/individual/databases/main-database/main-database.module';
import { postgresDatabaseConfig } from './services/individual/databases/postgres-database/postgres-database.config';
import { PostgresDatabaseModule } from './services/individual/databases/postgres-database/postgres-database.module';
import { secondaryDatabaseConfig } from './services/individual/databases/secondary-database/secondary-database.config';
import { SecondaryDatabaseModule } from './services/individual/databases/secondary-database/secondary-database.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(mainDatabaseConfig),
    TypeOrmModule.forRootAsync({
      name: DatabaseEnum.SECONDARY,
      useFactory: () => secondaryDatabaseConfig,
    }),
    // TypeOrmModule.forRoot(postgresDatabaseConfig),

    // modules
    AjvModule,
    BedsModule,
    DepartmentsModule,
    MainDatabaseModule,
    PostgresDatabaseModule,
    RolesModule,
    SecondaryDatabaseModule,
    SnacksModule,
    TitlesModule,
    UsersModule,
    WardsModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
