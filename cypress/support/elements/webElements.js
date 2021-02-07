class WebElements {

    // XPath Selector - Cabeçalho "Bem vindo ao Site de Automação do Batista"
    cabecalhoSiteAutomacao = () => { return '//h5[@class=contains(.,"Site de Automação do Batista")]' }

    // XPath Selector  - Botão "Formulário"
    botaoFormulario = () => { return '//a[contains(.,"Formulário")]' }

    // XPath Selector - Botão "Criar Usuários"
    botaoCriarUsuarios = () => { return '//a[@href="/users/new"][contains(.,"Criar Usuários")]' }
}

export default WebElements