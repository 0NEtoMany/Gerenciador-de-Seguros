import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Apolice } from '../entities/apolice.entities';
import { DeleteResult, ILike, Repository } from 'typeorm';

@Injectable()
export class ApoliceService {
    constructor(
        @InjectRepository(Apolice)
        private ApoliceRepository: Repository<Apolice>,
    ) {}

    async findAll(): Promise<Apolice[]> {
        // SELECT * FROM tb_postagens;
        return this.ApoliceRepository.find();
    }

    async findById(id: number): Promise<Apolice> {
        // SELECT * FROM tb_postagens WHERE id = ?;
        const Apolice = await this.ApoliceRepository.findOne({
            where: {
                id
            }
        });

        if (!Apolice) throw new HttpException('Apolice não encontrada!', HttpStatus.NOT_FOUND);

        return Apolice;
    }

    async findAllByTipo(tipo_seguro: string): Promise<Apolice[]> {
        // SELECT * FROM tb_postagens WHERE titulo LIKE '%?%';
        return this.ApoliceRepository.find({
            where: {
                tipo_seguro: ILike(`%${tipo_seguro}%`)
            }
        });
    }

    async create(Apolice: Apolice): Promise<Apolice> {
        // INSERT INTO tb_postagens (titulo, texto) VALUES (?, ?);
        return this.ApoliceRepository.save(Apolice);
    }

    async update(Apolice: Apolice): Promise<Apolice> {
        if (!Apolice.id || Apolice.id <= 0)
            throw new HttpException('O ID da Apolice é inválido!', HttpStatus.BAD_REQUEST);

        // Checa se a Apolice existe
        await this.findById(Apolice.id);
        
        return this.ApoliceRepository.save(Apolice);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);

        // DELETE tb_postagens FROM id = ?;
        return this.ApoliceRepository.delete(id);
    }
}