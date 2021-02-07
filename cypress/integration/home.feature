#language: pt

Funcionalidade: Home

    Eu como usuario 
    Quero acessar a pagina Automacao Web
    Para que possa utilizar o sistema criado para automacao de testes

Contexto:
    Dado que eu estou na pagina inicial
    Quando eu acesso a pagina de Automacao Web

@AcessarAutomacaoWeb
Cenario: Acessar a pagina Automacao Web
    Entao eu devo visualizar a pagina de Automacao Web

@ValidarUrlWeb 
Cenario: Validar a url da pagina Automacao Web
    Entao eu devo visualizar a url da pagina de Automacao Web