import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apolice } from './entities/apolice.entities';
import { ApoliceService } from './services/apolice.services';
import { ApoliceController } from './controllers/apolice.controllers';

@Module({
    imports: [TypeOrmModule.forFeature([Apolice])],
    controllers: [ApoliceController],
    providers: [ApoliceService],
    exports: [],
})
export class ApoliceModule {}