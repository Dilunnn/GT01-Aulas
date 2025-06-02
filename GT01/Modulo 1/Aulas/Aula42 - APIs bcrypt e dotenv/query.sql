SELECT usuarios.nome, disciplinas.nome FROM usuarios JOIN professores ON usuarios.id = professores.usuario_id JOIN disciplinas on disciplinas.professor_id = professores.id;

use escola;
 SELECT * from disciplinas;

SELECT * FROM usuarios;