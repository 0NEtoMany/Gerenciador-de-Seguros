-- database do projeto integrador de seguradora de e-bikes
CREATE DATABASE db_seguradora_ion_guard;

USE db_seguradora_ion_guard;

-- tipo_seguro, valor_plano, data_inicio, data_fim, status_plano
INSERT INTO tb_apolice (tipo_seguro, valor_plano, data_inicio, data_fim, status_plano) 
VALUES ('Seguro básico', 15000.00, '2026-03-02','2026-10-02' , 'Adimplente');


INSERT INTO tb_apolice (tipo_seguro, valor_plano, data_inicio, data_fim, status_plano) 
VALUES ('Seguro básico', 15000.00, '2026-03-06', '2028-03-06', 'Adimplente');

INSERT INTO tb_apolice (tipo_seguro, valor_plano, data_inicio, data_fim, status_plano) 
VALUES ('Seguro completo', 30000.00, '2026-03-06', '2030-03-06', 'Adimplente');

SELECT * FROM tb_apolice;
delete from tb_apolice where id = 4;
SHOW CREATE TABLE tb_apolice;