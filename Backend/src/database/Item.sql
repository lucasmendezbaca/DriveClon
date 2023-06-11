CREATE DATABASE items;
use items;

CREATE TABLE Item
(
    id VARCHAR(36) NOT NULL PRIMARY KEY,
    parentId VARCHAR(36),
    userId VARCHAR(28) NOT NULL,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    content BLOB,
    updateDate DATETIME NOT NULL,
    createDate DATETIME NOT NULL,

    FOREIGN KEY (parentId) REFERENCES Item(id)
);


-- Carpeta raiz (Mi Unidad)
INSERT INTO Item (id, userId, name, description, type, updateDate, createDate) 
VALUES ('9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', 'zRT9eaDnSgQQzdO3AajOTL4BFl12', 'Mi Unidad', 'Carpeta raiz', 'Folder', '2019-01-01 00:00:00', '2019-01-01 00:00:00');

-- Carpetas que cuelga de la carpeta raiz
INSERT INTO Item (id, parentId, userId, name, description, type, updateDate, createDate) 
VALUES ('2sj9udb4d-3b7d-9sad-9bdd-2b0d7b3dsy8', '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', 'zRT9eaDnSgQQzdO3AajOTL4BFl12', 'Lenguaje de Marcas', '', 'Folder', '2019-01-01 00:00:00', '2019-01-01 00:00:00');

INSERT INTO Item (id, parentId, userId, name, description, type, updateDate, createDate) 
VALUES ('2sj3vib4d-3b7d-9sad-5ksd-2b0d7b3dsy8', '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', 'zRT9eaDnSgQQzdO3AajOTL4BFl12', 'Base de Datos', '', 'Folder', '2019-01-01 00:00:00', '2019-01-01 00:00:00');

INSERT INTO Item (id, parentId, userId, name, description, type, updateDate, createDate) 
VALUES ('1ks8vib4d-3b7d-9sad-5ksd-2b9sl33dsy8', '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', 'zRT9eaDnSgQQzdO3AajOTL4BFl12', 'Otra Carpeta', '', 'Folder', '2019-01-01 00:00:00', '2019-01-01 00:00:00');

-- Cuelga de la carpeta raiz pero de otro usuario
INSERT INTO Item (id, parentId, userId, name, description, type, updateDate, createDate) 
VALUES ('2sj3vib4d-3i2t-9sad-5ksd-2b0d2i9dsy8', '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', 'zRT9edFiSgQQz8ggAajOTL4BFl12', 'Practicas', '', 'Folder', '2019-01-01 00:00:00', '2019-01-01 00:00:00');

-- Cuelga de la carpeta raiz pero es un archivo y es de otro usuario
INSERT INTO Item (id, parentId, userId, name, description, type, updateDate, createDate) 
VALUES ('2sj9sji4d-3i2t-9sad-5ksd-2b0d2i9dsy2', '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', 'zRT9edFiSgQQz8ggAajOTL4BFl12', 'Primer Archivo', '', 'File', '2019-01-01 00:00:00', '2019-01-01 00:00:00');

-- Cuelga de la carpeta raiz pero es un archivo y es del ultimo usuario
INSERT INTO Item (id, parentId, userId, name, description, type, updateDate, createDate) 
VALUES ('1ks8vib4d-s9si-8wad-5ksd-2b9sl33dsy8', '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', 'zRT9eaDnSgQQzdO3AajOTL4BFl12', 'Segundo Archivo', '', 'File', '2019-01-01 00:00:00', '2019-01-01 00:00:00');


-- Usuario jose
-- Carpeta raiz (Mi Unidad)
INSERT INTO Item (id, userId, name, description, type, updateDate, createDate) 
VALUES ('9bsdkfkd-3b7d-4bad-9bdd-2b0d7b3dcb6d', '7HohYs3xJNNalKWsC1s7FGqiN0R2', 'Mi Unidad', 'Carpeta raiz', 'Folder', '2019-01-01 00:00:00', '2019-01-01 00:00:00');

-- Carpetas que cuelga de la carpeta raiz
INSERT INTO Item (id, parentId, userId, name, description, type, updateDate, createDate) 
VALUES ('2axl2db4d-3b7d-9sad-9bdd-2b0d7b3dsy8', '9bsdkfkd-3b7d-4bad-9bdd-2b0d7b3dcb6d', '7HohYs3xJNNalKWsC1s7FGqiN0R2', 'Lenguaje de Marcas', '', 'Folder', '2019-01-01 00:00:00', '2019-01-01 00:00:00');

INSERT INTO Item (id, parentId, userId, name, description, type, updateDate, createDate) 
VALUES ('2sj3vib4d-3b7d-9sad-5ksd-2d22d0ddsy8', '9bsdkfkd-3b7d-4bad-9bdd-2b0d7b3dcb6d', '7HohYs3xJNNalKWsC1s7FGqiN0R2', 'Base de Datos', '', 'Folder', '2019-01-01 00:00:00', '2019-01-01 00:00:00');

-- Tabla User
CREATE TABLE User
(
    Id VARCHAR(28) NOT NULL PRIMARY KEY,
    rootFolderId VARCHAR(36) NOT NULL
);



-- Json POST
{
	"id": "5ds8vib4d-3b7d-9sad-5ksd-2b9s8sj2ks7",
	"parentId": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
	"userId": "zRT9eaDnSgQQzdO3AajOTL4BFl12",
	"name": "Insomnia",
	"description": "",
	"type": "Folder",
	"content": "",
	"updateDate": "2019-01-01 00:00:00",
	"createDate": "2019-01-01 00:00:00"
}