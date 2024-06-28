describe('Pagina de Cadastro', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="register-button"]').click();
      
    })
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

    cy.get('[data-test="input-name"]').type('Matheus Mattos');
    cy.get('[data-test="input-email"]').type('matheusmattos2001@gmail.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();

  })
})


