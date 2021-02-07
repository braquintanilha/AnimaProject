import UserElements from '../elements/userElements'
const userElements = new UserElements()


class UserPage {

    // Clica no botão "Criar"
    clicaBotaoCriar() {
        cy.get(userElements.botaoCriar()).click()
    }

    // Preenche os campos com os dados do usuário cadastrados na fixture userData.json e clica no botão "Criar"
    cadastraUsuario() {
        cy.fixture('userData').then((usuario) => {
            cy.get(userElements.inputNome()).type(usuario.nome)
            cy.get(userElements.inputUltimoNome()).type(usuario.sobrenome)
            cy.get(userElements.inputEmail()).type(usuario.email)
            cy.get(userElements.inputEndereco()).type(usuario.endereco)
            cy.get(userElements.inputUniversidade()).type(usuario.universidade)
            cy.get(userElements.inputProfissao()).type(usuario.profissao)
            cy.get(userElements.inputGenero()).type(usuario.genero)
            cy.get(userElements.inputIdade()).type(usuario.idade)

            this.clicaBotaoCriar()
        })
    }

    // Clica no botão "Voltar"
    clicaBotaoVoltar() {
        cy.get(userElements.botaoVoltar()).click()
    }

    // Valida a mensagem "Usuário cadastrado com sucesso"
    validaMensagemUsuarioCadastrado() {
        cy.get(userElements.mensagemUsuarioCadastrado()).should('be.visible')
    }

    // Valida a mensagem de erro de cadastro de usuário por falta dos campos obrigatórios
    validaMensagemErroCadastro() {
        cy.xpath(userElements.mensagemErroCadastro()).should('be.visible')
    }
}

export default UserPage