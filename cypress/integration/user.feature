#language: pt

Funcionalidade: User

    Eu como usuario 
    Quero acessar a pagina de cadastro de usuários
    Para que possa cadastrar um usuario

Contexto:
    Dado que eu estou na pagina de Automacao Web
    Quando eu acesso o cadastro de usuarios

@CadastrarUsuario
Cenario: Cadastrar um usuario no sistema
    Quando eu cadastro um usuario com os dados corretos
    Entao eu devo visualizar o usuario cadastrado

@ValidarCamposObrigatorios
Cenario: Validar os campos obrigatorios do cadastro de usuario
    Quando eu cadastro um usuario sem os dados obrigatorios
    Entao eu devo visualizar a mensagem de erro

@ValidarVoltar
Cenario: Validar a funcao Voltar a partir da tela de cadastro
    Quando eu acesso a opcao Voltar
    Entao eu devo visualizar a pagina de Automacao Web