import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';
import { ApoliceService } from '../services/apolice.services';
import { Apolice } from '../entities/apolice.entities';

@Controller('/apolices')
export class ApoliceController {
    constructor(private readonly apoliceService: ApoliceService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Apolice[]> {
        return this.apoliceService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Apolice> {
        return this.apoliceService.findById(id);
    }

    @Get('/tipo/:tipo')
    @HttpCode(HttpStatus.OK)
    findAllByTitulo(@Param('tipo_seguro') tipo_seguro: string): Promise<Apolice[]> {
        return this.apoliceService.findAllByTipo(tipo_seguro);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Apolice: Apolice): Promise<Apolice> {
        return this.apoliceService.create(Apolice);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() Apolice: Apolice): Promise<Apolice> {
        return this.apoliceService.update(Apolice);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.apoliceService.delete(id);
    }
}