// ab test based on cloudflare see
const disableCloudflareTest = () => {
    cy.setCookie('disableCloudflareTest', '1');
};

// ab test in vvo
// Based on - https://vwo.com/opt-out/
// note documentation is sparse on this topic
// it defintly disable ab test but it maybe side effect not an intetonal use
const disableVWOAbTest = () => {
    // magic value from VVO documentation
    cy.setCookie('_vis_opt_out', '2');
};

Cypress.Commands.add('setupTestCookies', () => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();

        disableCloudflareTest();
        disableVWOAbTest();

});
