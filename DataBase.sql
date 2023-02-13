--------------------------------------------------------
-- Archivo creado  - domingo-febrero-12-2023   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Sequence SQ_TURNO
--------------------------------------------------------

   CREATE SEQUENCE  "ARNOLDO"."SQ_TURNO"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 99 NOCACHE  NOORDER  NOCYCLE ;
--------------------------------------------------------
--  DDL for Sequence USER_ID
--------------------------------------------------------

   CREATE SEQUENCE  "ARNOLDO"."USER_ID"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 40 NOCACHE  NOORDER  NOCYCLE ;
--------------------------------------------------------
--  DDL for Table INCIDENCIA
--------------------------------------------------------

  CREATE TABLE "ARNOLDO"."INCIDENCIA" 
   (	"CODI_INCI" NUMBER(*,0), 
	"NOMB_INCI" VARCHAR2(40 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TB_PROYECT" ;
--------------------------------------------------------
--  DDL for Table STATUS_TECNICO
--------------------------------------------------------

  CREATE TABLE "ARNOLDO"."STATUS_TECNICO" 
   (	"CODI_TECN" NUMBER(*,0), 
	"JOBS_TECN" NUMBER(*,0), 
	"DATE_TECN" DATE
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TB_PROYECT" ;
--------------------------------------------------------
--  DDL for Table TECNICO
--------------------------------------------------------

  CREATE TABLE "ARNOLDO"."TECNICO" 
   (	"CODI_TECN" NUMBER(*,0), 
	"NOMB_TECN" VARCHAR2(40 BYTE), 
	"APEL_TECN" VARCHAR2(40 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TB_PROYECT" ;
--------------------------------------------------------
--  DDL for Table TURNO
--------------------------------------------------------

  CREATE TABLE "ARNOLDO"."TURNO" 
   (	"CODI_TURN" NUMBER(*,0), 
	"GENE_TURN" DATE, 
	"FECH_TURN" DATE, 
	"STAT_TURN" VARCHAR2(20 BYTE), 
	"DETA_INCI" VARCHAR2(40 BYTE), 
	"COME_INCI" VARCHAR2(900 BYTE), 
	"FK_USER" NUMBER(*,0), 
	"FK_TECN" NUMBER(*,0), 
	"FK_INCI" NUMBER(*,0)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TB_PROYECT" ;
--------------------------------------------------------
--  DDL for Table USUARIO
--------------------------------------------------------

  CREATE TABLE "ARNOLDO"."USUARIO" 
   (	"CODI_USER" NUMBER(*,0), 
	"NAME_USER" VARCHAR2(40 BYTE), 
	"LAST_USER" VARCHAR2(40 BYTE), 
	"EMAI_USER" VARCHAR2(40 BYTE), 
	"PASS_USER" VARCHAR2(40 BYTE), 
	"ADDR_USER" VARCHAR2(40 BYTE), 
	"NUMB_USER" VARCHAR2(40 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TB_PROYECT" ;
REM INSERTING into ARNOLDO.INCIDENCIA
SET DEFINE OFF;
Insert into ARNOLDO.INCIDENCIA (CODI_INCI,NOMB_INCI) values ('1','Sin internet');
Insert into ARNOLDO.INCIDENCIA (CODI_INCI,NOMB_INCI) values ('2','Interferencias');
Insert into ARNOLDO.INCIDENCIA (CODI_INCI,NOMB_INCI) values ('3','Internet lento');
Insert into ARNOLDO.INCIDENCIA (CODI_INCI,NOMB_INCI) values ('4','Equipos dañados');
REM INSERTING into ARNOLDO.STATUS_TECNICO
SET DEFINE OFF;
Insert into ARNOLDO.STATUS_TECNICO (CODI_TECN,JOBS_TECN,DATE_TECN) values ('1','2',to_date('07/02/23','DD/MM/RR'));
Insert into ARNOLDO.STATUS_TECNICO (CODI_TECN,JOBS_TECN,DATE_TECN) values ('2','2',to_date('08/02/23','DD/MM/RR'));
Insert into ARNOLDO.STATUS_TECNICO (CODI_TECN,JOBS_TECN,DATE_TECN) values ('3','1',to_date('08/02/23','DD/MM/RR'));
REM INSERTING into ARNOLDO.TECNICO
SET DEFINE OFF;
Insert into ARNOLDO.TECNICO (CODI_TECN,NOMB_TECN,APEL_TECN) values ('1','Manuel','Zambrano');
Insert into ARNOLDO.TECNICO (CODI_TECN,NOMB_TECN,APEL_TECN) values ('2','Eduardo','Gómez');
Insert into ARNOLDO.TECNICO (CODI_TECN,NOMB_TECN,APEL_TECN) values ('3','Alberto','Fernández');
REM INSERTING into ARNOLDO.TURNO
SET DEFINE OFF;
Insert into ARNOLDO.TURNO (CODI_TURN,GENE_TURN,FECH_TURN,STAT_TURN,DETA_INCI,COME_INCI,FK_USER,FK_TECN,FK_INCI) values ('96',to_date('07/02/23','DD/MM/RR'),to_date('08/02/23','DD/MM/RR'),'active','De uno a dos días','ddddddd','37','3','1');
Insert into ARNOLDO.TURNO (CODI_TURN,GENE_TURN,FECH_TURN,STAT_TURN,DETA_INCI,COME_INCI,FK_USER,FK_TECN,FK_INCI) values ('93',to_date('06/02/23','DD/MM/RR'),to_date('07/02/23','DD/MM/RR'),'active','Desde hoy','No tengo ni 4 megas','35','1','3');
Insert into ARNOLDO.TURNO (CODI_TURN,GENE_TURN,FECH_TURN,STAT_TURN,DETA_INCI,COME_INCI,FK_USER,FK_TECN,FK_INCI) values ('94',to_date('07/02/23','DD/MM/RR'),to_date('08/02/23','DD/MM/RR'),'active','Solo en el día','mofhmocmfh','36','2','2');
Insert into ARNOLDO.TURNO (CODI_TURN,GENE_TURN,FECH_TURN,STAT_TURN,DETA_INCI,COME_INCI,FK_USER,FK_TECN,FK_INCI) values ('97',to_date('09/02/23','DD/MM/RR'),to_date('07/02/23','DD/MM/RR'),'active','De uno a dos días','blabla','38','1','1');
Insert into ARNOLDO.TURNO (CODI_TURN,GENE_TURN,FECH_TURN,STAT_TURN,DETA_INCI,COME_INCI,FK_USER,FK_TECN,FK_INCI) values ('98',to_date('12/02/23','DD/MM/RR'),to_date('08/02/23','DD/MM/RR'),'active','Todo el día y noche','fdbfdb','3','2','2');
REM INSERTING into ARNOLDO.USUARIO
SET DEFINE OFF;
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('35','Arnoldo','González','argonzaleza@pucesd.edu.ec','arnoldo050505@','Av. Quevedo Km2 (Urbanización Castello)','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('36','Luis','Ulloa','luisulloa98@gmail.com','luisulloa98@gmail.com','Av Chone km4','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('37','Alfredo Ramirez','ssssssss','4arnoglez059@gmail.com','4arnoglez059@gmail.com','Urbanización Castelo','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('2','Franco','undefined','manogom@gmail.com','123456','Av Chone','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('4','Pedro','Alcivar','manogom@gmail.com','123456','Av Chone','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('5','Marco','Aurelio','franciscofranco1950@gmail.com','arnoglez05@gmail.com','Urbanización Castelo','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('6','Marco','Aurelio','franciscofranco1951@gmail.com','arnoglez05@gmail.com','Urbanización Castelo','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('7','Marco','Aurelio','franciscofranco1952@gmail.com','arnoglez05@gmail.com','Urbanización Castelo','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('8','Marco','Aurelio','franciscofranco1953@gmail.com','arnoglez05@gmail.com','Urbanización Castelo','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('9','Marco','Aurelio','franciscofranco1959@gmail.com','arnoglez05@gmail.com','Urbanización Castelo','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('10','puce1724894249','González','arnoglez059@gmail.com','arnoglez059@gmail.com','Urbanización Castelo','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('12','puce1724894249','González','arnoglez0529@gmail.com','arnoglez059@gmail.com','Urbanización Castelo','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('13','puce1724894249','González','arnoglez0522@gmail.com','arnoglez059@gmail.com','Urbanización Castelo','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('14','puce1724894249','González','arnoglez0562@gmail.com','arnoglez059@gmail.com','Urbanización Castelo','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('15','puce1724894249','González','arnoglez0563@gmail.com','arnoglez059@gmail.com','Urbanización Castelo','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('16','puce1724894249','asdasd','arnoglez007@gmail.com','arnoglez007@gmail.com','Urbanización Castelo','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('17','puce1724894249','asdasd','arnoglez007@gmail.com','arnoglez007@gmail.com','Urbanización Castelo','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('18','puce1724894249','asdasd','arnoglez009@gmail.com','arnoglez007@gmail.com','Urbanización Castelo','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('19','puce1724894249','asdasd','arnoglez008@gmail.com','arnoglez007@gmail.com','Urbanización Castelo','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('20','puce1724894249','asdasd','arnoglez010@gmail.com','arnoglez007@gmail.com','Urbanización Castelo','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('21','Iosif','Stalin','iosifStal06@urss.rus.com','iosifStal06@urss.rus.com','Urbanización Castelo','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('22','Eduardo','Guevara','arnoglez15@gmail.com','arnoglez05@gmail.com','Urbanización Castelo','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('25','Alfredo Ramirez','asd','CosmeFulanito2001@gmail.com','CosmeFulanito2001@gmail.com','Urbanización Castelo','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('38','Daniel','Castillo','Danielcastillo45@gmail.com','Danielcastillo45@gmail.com','El Carmen km 36','0985236574');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('39','Marco','Aurelio','MarcoAurel@gmail.com','arnoldo.com01@','Av Chone Km 4','0958632141');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('1','Franco','undefined','manogom@gmail.com','123456','Av Chone','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('11','puce1724894249','González','arnoglez052@gmail.com','arnoglez059@gmail.com','Urbanización Castelo','0984702910');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('27','opsoolsggd','polanbaf','fbiafjao@gmail.com','123','Ecuador','0958741236');
Insert into ARNOLDO.USUARIO (CODI_USER,NAME_USER,LAST_USER,EMAI_USER,PASS_USER,ADDR_USER,NUMB_USER) values ('3','Arnoldo','González','arnoglez05@gmail.com','123','Av Quevedo','0984702950');
--------------------------------------------------------
--  DDL for Trigger ACTUALIZAR_STATUS_TECNICO
--------------------------------------------------------

  CREATE OR REPLACE TRIGGER "ARNOLDO"."ACTUALIZAR_STATUS_TECNICO" 
after INSERT 
on turno
for each row
begin
    update Status_tecnico set jobs_tecn=jobs_tecn+1
    where
    :new.fk_tecn = codi_tecn;

    update Status_tecnico set date_tecn=:new.fech_turn 
    where
    :new.fk_tecn = codi_tecn;
end;
/
ALTER TRIGGER "ARNOLDO"."ACTUALIZAR_STATUS_TECNICO" ENABLE;
--------------------------------------------------------
--  DDL for Trigger DISMINUIR_TRABAJOS
--------------------------------------------------------

  CREATE OR REPLACE TRIGGER "ARNOLDO"."DISMINUIR_TRABAJOS" 
after update of stat_turn
on turno
for each row
begin
    update status_tecnico set jobs_tecn=jobs_tecn-1
    where  codi_tecn = :old.fk_tecn;
end;
/
ALTER TRIGGER "ARNOLDO"."DISMINUIR_TRABAJOS" ENABLE;
--------------------------------------------------------
--  DDL for Procedure INSERTAR_TURNO
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "ARNOLDO"."INSERTAR_TURNO" (detalle_inci varchar2, comentario varchar2, usuario int, incidencia int)
is
    tecnico int;
    trabajos int;
    ultimo_turn_tecn date;
    fecha_turn date;
    trabajos_en_fecha int;
begin

    select tecnico_con_menos_turnos 
    into tecnico
    from DUAL;

    select jobs_tecn
    into trabajos
    from Status_tecnico 
    where codi_tecn = tecnico;

    select date_tecn
    into ultimo_turn_tecn
    from Status_tecnico
    where codi_tecn = tecnico;

    select trabajos_por_fecha(tecnico, ultimo_turn_tecn)
    into trabajos_en_fecha
    from dual;

    if trabajos = 0
    then 
        fecha_turn := sysdate + 1;
    elsif trabajos_en_fecha = 3
    then
        fecha_turn := ultimo_turn_tecn +1;
    else
        fecha_turn := ultimo_turn_tecn;
    end if;

    insert into turno values(sq_turno.NEXTVAL, sysdate, fecha_turn, 'active', detalle_inci, comentario, usuario, tecnico, incidencia);
    commit;
end;

/
--------------------------------------------------------
--  DDL for Procedure INSERTAR_USUARIO
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "ARNOLDO"."INSERTAR_USUARIO" (nombre varchar2, apellido varchar2, 
correo varchar2, contraseña varchar2, direccion varchar2, numero varchar2)
is 
begin
    insert into usuario values(user_id.nextval, nombre, apellido, correo, contraseña, direccion, numero);
    commit;
end;

/
--------------------------------------------------------
--  DDL for Function OBTENER_FECHA_ACTUAL
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION "ARNOLDO"."OBTENER_FECHA_ACTUAL" 
RETURN DATE
IS
BEGIN
   RETURN SYSDATE;
END obtener_fecha_actual;

/
--------------------------------------------------------
--  DDL for Function PRUEBA
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION "ARNOLDO"."PRUEBA" 
return int
as
    tecnico int;
    trabajos int;
begin
    select tecnico_con_menos_turnos
    into tecnico
    from DUAL;

    select jobs_tecn
    into trabajos
    from Status_tecnico 
    where codi_tecn = tecnico;

    return trabajos;
end;

/
--------------------------------------------------------
--  DDL for Function RESPUESTA
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION "ARNOLDO"."RESPUESTA" (email varchar2, pass varchar2)
return int
is
v_count int;
BEGIN
   SELECT COUNT(*) INTO v_count FROM usuario WHERE emai_user = email AND pass_user = pass;
   IF v_count = 1 
   THEN
       RETURN 1;
   ELSE
       RETURN 0;
   END IF;
END;

/
--------------------------------------------------------
--  DDL for Function TECNICO_CON_MENOS_TURNOS
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION "ARNOLDO"."TECNICO_CON_MENOS_TURNOS" 
return int
as
  v_user_id int;
BEGIN

SELECT codi_tecn
into v_user_id
FROM (
  SELECT codi_tecn, jobs_tecn,
         ROW_NUMBER() OVER (ORDER BY jobs_tecn) as row_num
  FROM Status_tecnico
)
WHERE row_num = 1;

RETURN v_user_id;

END tecnico_con_menos_turnos;

/
--------------------------------------------------------
--  DDL for Function TRABAJOS_POR_FECHA
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION "ARNOLDO"."TRABAJOS_POR_FECHA" (tecnico int, fecha date)
return int
as
    trabajos int;
begin

    select count(*)
    into trabajos 
    from turno
    where fk_tecn = tecnico and fech_turn = fecha;

    return trabajos;

end;

/
--------------------------------------------------------
--  DDL for Function VALIDAR_CORREO
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION "ARNOLDO"."VALIDAR_CORREO" (email varchar2)
return int
is
v_count int;
begin
    select count(*) into v_count from usuario where emai_user = email;
    if v_count>0
    then
        return 0;
    else 
        return 1;
    end if;
end;

/
--------------------------------------------------------
--  DDL for Function VALIDAR_USUARIO
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION "ARNOLDO"."VALIDAR_USUARIO" (email varchar2, pass varchar2)
return int
is
contador int;
user_id int;
BEGIN
   SELECT COUNT(*) INTO contador FROM usuario WHERE emai_user = email AND pass_user = pass;
   IF contador > 0 
   THEN
       select codi_user  into user_id from usuario where emai_user = email AND pass_user = pass;
       return user_id;
   ELSE
       RETURN 0;
   END IF;
END;

/
--------------------------------------------------------
--  Constraints for Table TECNICO
--------------------------------------------------------

  ALTER TABLE "ARNOLDO"."TECNICO" ADD PRIMARY KEY ("CODI_TECN")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TB_PROYECT"  ENABLE;
  ALTER TABLE "ARNOLDO"."TECNICO" MODIFY ("APEL_TECN" NOT NULL ENABLE);
  ALTER TABLE "ARNOLDO"."TECNICO" MODIFY ("NOMB_TECN" NOT NULL ENABLE);
  ALTER TABLE "ARNOLDO"."TECNICO" MODIFY ("CODI_TECN" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table INCIDENCIA
--------------------------------------------------------

  ALTER TABLE "ARNOLDO"."INCIDENCIA" ADD PRIMARY KEY ("CODI_INCI")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TB_PROYECT"  ENABLE;
  ALTER TABLE "ARNOLDO"."INCIDENCIA" MODIFY ("NOMB_INCI" NOT NULL ENABLE);
  ALTER TABLE "ARNOLDO"."INCIDENCIA" MODIFY ("CODI_INCI" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table STATUS_TECNICO
--------------------------------------------------------

  ALTER TABLE "ARNOLDO"."STATUS_TECNICO" MODIFY ("JOBS_TECN" NOT NULL ENABLE);
  ALTER TABLE "ARNOLDO"."STATUS_TECNICO" MODIFY ("CODI_TECN" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table TURNO
--------------------------------------------------------

  ALTER TABLE "ARNOLDO"."TURNO" ADD PRIMARY KEY ("CODI_TURN")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TB_PROYECT"  ENABLE;
  ALTER TABLE "ARNOLDO"."TURNO" MODIFY ("FK_INCI" NOT NULL ENABLE);
  ALTER TABLE "ARNOLDO"."TURNO" MODIFY ("FK_TECN" NOT NULL ENABLE);
  ALTER TABLE "ARNOLDO"."TURNO" MODIFY ("FK_USER" NOT NULL ENABLE);
  ALTER TABLE "ARNOLDO"."TURNO" MODIFY ("DETA_INCI" NOT NULL ENABLE);
  ALTER TABLE "ARNOLDO"."TURNO" MODIFY ("STAT_TURN" NOT NULL ENABLE);
  ALTER TABLE "ARNOLDO"."TURNO" MODIFY ("FECH_TURN" NOT NULL ENABLE);
  ALTER TABLE "ARNOLDO"."TURNO" MODIFY ("GENE_TURN" NOT NULL ENABLE);
  ALTER TABLE "ARNOLDO"."TURNO" MODIFY ("CODI_TURN" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table USUARIO
--------------------------------------------------------

  ALTER TABLE "ARNOLDO"."USUARIO" ADD PRIMARY KEY ("CODI_USER")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TB_PROYECT"  ENABLE;
  ALTER TABLE "ARNOLDO"."USUARIO" MODIFY ("NUMB_USER" NOT NULL ENABLE);
  ALTER TABLE "ARNOLDO"."USUARIO" MODIFY ("ADDR_USER" NOT NULL ENABLE);
  ALTER TABLE "ARNOLDO"."USUARIO" MODIFY ("PASS_USER" NOT NULL ENABLE);
  ALTER TABLE "ARNOLDO"."USUARIO" MODIFY ("EMAI_USER" NOT NULL ENABLE);
  ALTER TABLE "ARNOLDO"."USUARIO" MODIFY ("LAST_USER" NOT NULL ENABLE);
  ALTER TABLE "ARNOLDO"."USUARIO" MODIFY ("NAME_USER" NOT NULL ENABLE);
  ALTER TABLE "ARNOLDO"."USUARIO" MODIFY ("CODI_USER" NOT NULL ENABLE);
--------------------------------------------------------
--  Ref Constraints for Table TURNO
--------------------------------------------------------

  ALTER TABLE "ARNOLDO"."TURNO" ADD CONSTRAINT "INC_TURNO" FOREIGN KEY ("FK_INCI")
	  REFERENCES "ARNOLDO"."INCIDENCIA" ("CODI_INCI") ENABLE;
  ALTER TABLE "ARNOLDO"."TURNO" ADD CONSTRAINT "TECN_TURNO" FOREIGN KEY ("FK_TECN")
	  REFERENCES "ARNOLDO"."TECNICO" ("CODI_TECN") ENABLE;
  ALTER TABLE "ARNOLDO"."TURNO" ADD CONSTRAINT "USER_TURNO" FOREIGN KEY ("FK_USER")
	  REFERENCES "ARNOLDO"."USUARIO" ("CODI_USER") ENABLE;
