describe('Checkout', () => {
  it('Add textra to checkout', () => {
    cy.visit('')
    cy.get("[data-testid='header-desktop-container'] input[type='search']").first().type("Geralt Sword{enter}")

    cy.get('.displate-tile').first().click();

    cy.get(`[data-testid="desktop-hero-pickers"] [data-testid="size-input-L"]`).parent().click();

    cy.get('[data-testid="hero-artwork-price"]').contains('89')


    cy.get(`[data-testid="desktop-hero-pickers"] [data-testid="size-input-M"]`).parent().click();

    cy.get('[data-testid="hero-artwork-price"]').contains('44')

    cy.get('[data-testid="desktop-hero-pickers"] [data-testid="finish-input-textra"]').parent().click();
    cy.get('[data-testid="hero-artwork-price"]').contains('64')

    cy.contains('Add to cart').click();
    cy.contains('Proceed to the cart', ).click();

    cy.get('#order-total').should('have.text', '69.00 EUR');


  })
})