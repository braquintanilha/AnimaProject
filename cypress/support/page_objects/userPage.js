import UserElements from '../elements/userElements'
const userElements = new UserElements()


class UserPage {

    // Clica no botão "Criar"
    clicaBotaoCriar() {
        cy.get(userElements.botaoCriar()).click()
    }

    // Cadastra um usuário de acordo com o tipo do teste - cadastro com os dados completos ou incompletos (para validar os campos obrigatórios do formulário)
    cadastraUsuario(tipo) {
        switch (tipo) {
            case 'dadosCompletos':
                // Preenche todos os campos com os dados do usuário cadastrados na fixture userData.json
                cy.fixture('userData').then((usuario) => {
                    cy.get(userElements.inputNome()).type(usuario.nome)
                    cy.get(userElements.inputUltimoNome()).type(usuario.sobrenome)
                    cy.get(userElements.inputEmail()).type(usuario.email)
                    cy.get(userElements.inputEndereco()).type(usuario.endereco)
                    cy.get(userElements.inputUniversidade()).type(usuario.universidade)
                    cy.get(userElements.inputProfissao()).type(usuario.profissao)
                    cy.get(userElements.inputGenero()).type(usuario.genero)
                    cy.get(userElements.inputIdade()).type(usuario.idade)
                })
                break;
            case 'dadosIncompletos':
                // Preenche apenas os campos não obrigatórios no cadastro de usuário
                cy.fixture('userData').then((usuario) => {
                    cy.get(userElements.inputEndereco()).type(usuario.endereco)
                    cy.get(userElements.inputUniversidade()).type(usuario.universidade)
                    cy.get(userElements.inputProfissao()).type(usuario.profissao)
                    cy.get(userElements.inputGenero()).type(usuario.genero)
                    cy.get(userElements.inputIdade()).type(usuario.idade)
                })
                break;
            default:
        }

        // Clica no botão "Criar"
        this.clicaBotaoCriar()
    }

    // Clica no botão "Voltar"
    clicaBotaoVoltar() {
        cy.get(userElements.botaoVoltar()).click()
    }

    // Valida a mensagem "Usuário cadastrado com sucesso"
    validaMensagemUsuarioCadastrado() {
        cy.get(userElements.mensagemUsuarioCadastrado()).should('be.visible')
    }

    // Valida a mensagem de erro de cadastro de usuário por falta de preenchimento dos campos obrigatórios
    validaMensagemErroCadastro() {
        cy.xpath(userElements.mensagemErroCadastro()).should('be.visible')
    }
}

export default UserPage