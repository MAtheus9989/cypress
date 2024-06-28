describe('Pagina de Login', () => {
    beforeEach(()  => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })

    it('Verificar mensagem de texto', () => {
        
        cy.get('.header__message').click();
        cy.login('matheusmattos2001@gmail.com','Senha123');
        cy.get('[data-test="submit-button"]').click();
    })
  })