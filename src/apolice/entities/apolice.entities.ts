import { Transform, TransformFnParams } from 'class-transformer';
import { IsDateString, IsNotEmpty, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';


@Entity({ name: 'tb_apolice' }) // CREATE TABLE tb_postagens
export class Apolice {
    @PrimaryGeneratedColumn() // PRIMARY KEY(id) AUTO INCREMENT
    id: number;

    //tipo de seguro
    @Transform(({ value }: TransformFnParams) => value?.trim()) // Remover espaços em branco I/F
    @IsNotEmpty({ message: 'O tipo de seguro é obrigatório' }) // Forçar digitação
    @Length(5, 100, { message: 'O tipo de seguro deve ter entre 5 e 100 caracteres' })
    @Column({ length: 100, nullable: false }) // VARCHAR(100) NOT NULL
    tipo_seguro: string;

    //valor do seguro
    @IsNotEmpty({ message: 'O Texto é Obrigatório' }) // Forçar digitação
    @Column({type: 'decimal', precision: 7, scale: 2}) // DECIMAL(7,2) NOT NULL
    valor_plano: number;


    //Data de início do seguro
    
    @Column({type: 'date'})
    data_inicio: Date; // DATE

    //Data de fim do seguro
    @Column({type: 'date'})
    data_fim: Date; // DATE
    

    //tipo de seguro
    @Transform(({ value }: TransformFnParams) => value?.trim()) // Remover espaços em branco I/F
    @IsNotEmpty({ message: 'O status do seguro é Obrigatório' }) // Forçar digitação
    @Length(5, 100, { message: 'O status do seguro deve ter entre 5 e 100 caracteres' })
    @Column({ length: 100, nullable: false }) // VARCHAR(100) NOT NULL
    status_plano: string;
}