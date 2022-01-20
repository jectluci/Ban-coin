CREATE TABLE IF NOT EXISTS clientes(
    id SERIAL PRIMARY KEY unique,
    created TIMESTAMP not null,
    updated TIMESTAMP not null,
    status CHAR(1) not null,
    fname VARCHAR(50) Not null,
    lname VARCHAR(50) Not null,
    address TEXT,
    birthdate DATE Not Null
);

DROP Procedure Registrar;
DROP Procedure ConsultarPorID;
DROP Procedure Actualizar; 

CREATE Procedure Registrar
(
nombres varchar,
apellido varchar,
direccion text,
nacimiento date 
)language plpgsql as
$$
Begin
 Insert into clientes values ( nombres,apellido, direccion,nacimiento);
End;
$$;

CREATE Procedure ConsultarPorID
(
codigo integer
)
language plpgsql as
$$
Begin
 Select * from clientes where id=codigo;
End;
$$;

CREATE Procedure Actualizar
(
codigo integer,
fechaActualizacion timestamp,
nombres varchar,
apellido varchar,
direccion text,
nacimiento date 
)
language plpgsql as
$$
Begin
fechaActualizacion = current_timestamp;
 UPDATE clientes SET updated=fechaActualizacion, fname=nombres,lname=apellido, address=direccion,birthdate= nacimiento where id=codigo;
End;
$$;
