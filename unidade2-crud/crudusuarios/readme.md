# Requisitos

Cadastro:
- O usuário deverá ter nome, email e lista de telefones
- O usuário deve ter ID único
- Os telefones devem ser compostos apenas por números
- Deve haver uma mensagem de erro caso o telefone contenha caracteres que não sejam números
- O usuário não deve poder cadastrar emails já cadastrados
- Deve haver uma mensagem de erro caso o email já esteja cadastrado

Edição:
- Deve haver uma busca pelo usuário a ser editado usando o ID único
- Deve haver uma mensagem de confirmação do usuário a ser editado
- Deve haver uma mensagem de erro caso não seja encontrado um usuário com o ID
- O usuário deve poder atualizar nome, email e lista de telefones a sua vontade
- Deve haver uma verificação para, quando atualizado, o email não poder ser igual a outro já cadastrado
- Deve haver uma mensagem de erro caso o email já esteja em uso

Listagem:
- Deverão ser listadas todas as informações dos usuários, incluindo id, nome, email e lista de telefones
- Deve haver uma verificação se há usuários cadastrados
- Deve ser mostrada uma mensagem caso não houverem usuários cadastrados

Remoção:
- Deve haver uma busca pelo usuário a ser deletado usando o ID único, para evitar a remoção do usuário errado
- Deve haver uma mensagem de confirmação do usuário
- Deve haver uma mensagem de erro caso o ID não seja encontrado
