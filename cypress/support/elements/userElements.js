class UserElements {

    // CSS Selector - Input "Nome"
    inputNome = () => { return '#user_name' }

    // CSS Selector - Input "Último nome"
    inputUltimoNome = () => { return '#user_lastname' }

    // CSS Selector - Input "E-mail"
    inputEmail = () => { return '#user_email' }

    // CSS Selector - Input "Endereço"
    inputEndereco = () => { return '#user_address' }

    // CSS Selector - Input "Universidade"
    inputUniversidade = () => { return '#user_university' }

    // CSS Selector - Input "Profissão"
    inputProfissao = () => { return '#user_profile' }

    // CSS Selector - Input "Gênero"
    inputGenero = () => { return '#user_gender' }

    // CSS Selector - Input "Idade"
    inputIdade = () => { return '#user_age' }

    // CSS Selector - Botão "Criar"
    botaoCriar = () => { return 'input[value="Criar"]' }

    // XPath Selector - Botão "Voltar"
    botaoVoltar = () => { return ' a[class="btn waves-light red"][href="/treinamento/home"]' }

    // CSS Selector - Mensagem "Usuário Cadastrado com Sucesso"
    mensagemUsuarioCadastrado = () => { return '#notice' }

    // XPath - Mensagem "3 errors proibiu que este usuário fosse salvo"
    mensagemErroCadastro = () => { return '//div[@id="error_explanation"]/h2' }
}

export default UserElements