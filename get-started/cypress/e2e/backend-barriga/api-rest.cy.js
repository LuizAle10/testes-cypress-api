//Como saber interagir, ou quais rotas utilizar, o que enviar, o que vai ser recebido?
// 1- Documentação da API
// 2- Ter acesso aos códigos da aplicação
// 3- Não preciso conhecer a aplicação, executando através do frontEnd e vendo as chamadas, consigo entender como as rotas funcionam(Testes abaixo).



describe('Should test at a functional level', () => {
    let token

    before(() => {
        cy.getToken('a@a', 'a')
            .then(tkn => {
                token = tkn
            })
    });

    beforeEach(() => {
        cy.resetRest()                                             //Vai resetar todas as contas do sistema evitando o erro de conta duplicada
    });

    it('Should crate an account', () => {
        cy.request({
                url: '/contas',
                method: 'POST',
                headers: { Authorization: `JWT ${token}` },         // JWT => JSON Web Token
                //headers: { Authorization: `bearer ${token}`}      // nas versões atuais usa "bearer", consigo verificar qual é em Headers => Request Headers => Authorization: JWT eyjas23d123121.....
                body: {
                    nome: 'Conta via rest'                          //nome da conta criada
                }
            })
            .as('response')

    cy.get('@response').then(res => {
        expect(res.status).to.be.equal(201)
        expect(res.body).to.have.property('id')
        expect(res.body).to.have.property('nome', 'Conta via rest')


    })



it('Should update an account', () => {

})

it('Should not create an account with same name', () => {

})

it('Should create a transaction', () => {

})

it('Should get balance', () => {

})

it('Should remove a transaction', () => {

})


});
});