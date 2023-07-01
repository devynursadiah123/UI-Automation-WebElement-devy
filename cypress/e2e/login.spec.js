//Scenario Testing 
describe('Test Case untuk Testing Login kasirAja', () => {
    //cypress positive case
      it('Login Berhasil', () => {
        cy.visit('/')
        cy.location('pathname').should('eq', '/login')
        cy.get('#email').type("tokoscincare@gmail.com")
        cy.get('#password').type("devy123")
        cy.get('button[type="submit"]').click()
        cy.location('pathname').should('eq', '/dashboard')
        cy.get('h3').invoke('text').should('contain', 'kasirAja');
      })
    
    //cypress negative case
      it('Login Gagal (Tanpa input Email dan Password)', () => {
        cy.visit('/')
        cy.get('button[type="submit"]').click()
        cy.get('div[role="alert"]').should('have.text','"email" is not allowed to be empty')
      })
      
      it('Login Gagal (Format Email Salah)', () => {
        cy.visit('/')
        cy.get('#email').type("tokoscincare")
        cy.get('#password').type("devy123")
        cy.get('button[type="submit"]').click()
        cy.get('div[role="alert"]').should('have.text','"email" must be a valid email')
      })
      it('Login Gagal (Tidak Input Email)', () => {
        cy.visit('/')
        cy.get('#password').type("devy123")
        cy.get('button[type="submit"]').click()
        cy.get('div[role="alert"]').should('have.text','"email" is not allowed to be empty')
      })
    
      it('Login Gagal (Password Salah)', () => { 
        cy.visit('/')
        cy.get('#email').type("tokoscincare@gmail.com")
        cy.get('#password').type("toko")
        cy.get('button[type="submit"]').click()
        cy.get('div[role="alert"]').should('have.text','Kredensial yang Anda berikan salah')
      })
      it('Login Gagal (Tidak Input Password)', () => {
        cy.visit('/')
        cy.get('#email').type("tokoscincare@gmail.com")
        cy.contains("login").click()
        cy.get('div[role="alert"]').should('have.text','"password" is not allowed to be empty')
      })
  
    })