/* global Given, When, Then */

import HomePage from '../page_objects/homePage'
import WebPage from '../page_objects/webPage'
const homePage = new HomePage()
const webPage = new WebPage()

Given('que eu estou na pagina inicial', () => {
	homePage.acessarSite()
});

When('eu acesso a pagina de Automacao Web', () => {
	homePage.clicaBotaoAcessarAutomacao()
});

Then('eu devo visualizar a pagina de Automacao Web', () => {
	webPage.validaPagina()
});

Then('eu devo visualizar a url da pagina de Automacao Web', () => {
	webPage.validaUrl()
});