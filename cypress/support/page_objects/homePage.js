import HomeElements from '../elements/homeElements'
const homeElements = new HomeElements()
const url = Cypress.config("baseUrl")

class HomePage {

    // Acessa o site
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão Acessar Automação Web
    clicaBotaoAcessarAutomacao() {
        cy.get(homeElements.botaoAcessarAutomacao()).click()
    }
}

export default HomePage