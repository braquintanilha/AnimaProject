/* global Given, When, Then */

import HomePage from '../page_objects/homePage'
import UserPage from '../page_objects/userPage';
import WebPage from '../page_objects/webPage'
const homePage = new HomePage()
const webPage = new WebPage()
const userPage = new UserPage()

Given('que eu estou na pagina de Automacao Web', () => {
    homePage.acessarSite()
    homePage.clicaBotaoAcessarAutomacao()
});

When('eu acesso o cadastro de usuarios', () => {
    webPage.clicaBotaoFormulario()
    webPage.clicaBotaoCriarUsuarios()
});

When('eu cadastro um usuario com os dados corretos', () => {
    userPage.cadastraUsuario('dadosCompletos')
});

Then('eu devo visualizar o usuario cadastrado', () => {
    userPage.validaMensagemUsuarioCadastrado()
})

When('eu cadastro um usuario sem os dados obrigatorios', () => {
    userPage.cadastraUsuario('dadosIncompletos')
})

Then('eu devo visualizar a mensagem de erro', () => {
    userPage.validaMensagemErroCadastro()
})

When('eu acesso a opcao Voltar', () => {
    userPage.clicaBotaoVoltar()
})

Then('eu devo visualizar a tela Home', () => {
    webPage.validaPagina()
})