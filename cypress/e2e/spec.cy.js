describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://core.hgtx.com.br/aplicativos/apps')

    cy.get('#loginInputEmail').type('qatestercodex@hgtx.com.br');
    cy.get('#mat-input-1').type('tester123');
    cy.get('button[type="submit"]').click();
  })
})