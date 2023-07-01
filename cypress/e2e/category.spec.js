beforeEach(() => {
    cy.visit('/')
      cy.location('pathname').should('eq', '/login')
      cy.get('#email').type("tokoscincare@gmail.com")
      cy.get('#password').type("devy123")
      cy.get('button[type="submit"]').click()
      cy.location('pathname').should('eq', '/dashboard')
      cy.get('h3').invoke('text').should('contain', 'kasirAja');
})

//Scenario testing category
describe('Tes Case Category', () => {
    //cypress positive case
    it('Berhasil Tambah Category', () => {
        cy.visit('/')
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()
        cy.get(".chakra-button.css-1piskbq").click()
        cy.url().should('include','/categories/create')
        cy.get('#nama').type("scincare")
        cy.get('#deskripsi').type("scincare wajah")
        cy.get("button[class='chakra-button css-l5lnz6']").click()
        cy.url().should('include','/categories')
        cy.contains("success")
        cy.contains("item ditambahkan")
    }),
    
    //cypress negative case
    it('Gagal Tambah Category', () => {
        cy.visit('/')
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()
        cy.get(".chakra-button.css-1piskbq").click()
        cy.url().should('include','/categories/create')
        cy.get("button[class='chakra-button css-l5lnz6']").click()
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3').should('have.text', '"name" is not allowed to be empty')  
    })
})