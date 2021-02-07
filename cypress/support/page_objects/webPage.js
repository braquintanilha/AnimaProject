import WebElements from '../elements/webElements'
const webElements = new WebElements()
const url = Cypress.config("baseUrl")

class WebPage {

    // Valida se está na página correta de acordo com as seguintes estratégias
    validaPagina() {
        // Valida se o título da página é o correto
        cy.title().should('be.equal', 'Automação com Batista')

        //Valida se o texto do cabeçalho da página é o correto
        cy.xpath(webElements.cabecalhoSiteAutomacao()).should('have.text', 'Bem vindo ao Site de Automação do Batista.')
    }

    // Valida se a URL da página atual é igual a URL esperada
    validaUrl() {
        cy.url().should('be.equal', `${url}/treinamento/home`)
    }

    //Clica no Botão Formulário
    clicaBotaoFormulario() {
        cy.xpath(webElements.botaoFormulario()).click()
    }

    //Clica no Botão Criar Usuários
    clicaBotaoCriarUsuarios() {
        cy.xpath(webElements.botaoCriarUsuarios()).click()
    }
}

export default WebPage