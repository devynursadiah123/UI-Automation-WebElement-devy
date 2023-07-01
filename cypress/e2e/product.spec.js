beforeEach(() => {
    cy.visit('/')
      cy.location('pathname').should('eq', '/login')
      cy.get('#email').type("tokoscincare@gmail.com")
      cy.get('#password').type("devy123")
      cy.get('button[type="submit"]').click()
      cy.location('pathname').should('eq', '/dashboard')
      cy.get('h3').invoke('text').should('contain', 'kasirAja');
})

//Scenario Testing Product
describe('Test case Product', () => {
    //cypress positive case
    it('Berhasil Tambah Product', () => {
      cy.visit('/')
      cy.get('a[href="/products"]').click()
      cy.get('a[href="/products/create"]').click()
      cy.get('#nama').clear().type("Serum Azzarine")
      cy.get('#deskripsi').clear().type("serum wajah azzarine")
      cy.get('[id="harga beli"]').clear().type(75000)
      cy.get('[id="harga jual"]').clear().type(85000)
      cy.get('#stok').clear().type(5)
      cy.get('#kategori').click()
      cy.get('table').contains('td', 'scincare').click()
      cy.contains('button', 'simpan').click()
      cy.location('pathname').should('eq', '/products')
      cy.contains("success")
      cy.contains("item ditambahkan")
    })
  
    //cypress negative case
    it('Gagal Tambah Product (Tanpa Input Nama)', () => {
      cy.visit('/')
      cy.get('a[href="/products"]').click()
      cy.get('a[href="/products/create"]').click()
      cy.get('[id="harga beli"]').clear().type(75000)
      cy.get('[id="harga jual"]').clear().type(85000)
      cy.get('#stok').clear().type(5)
      cy.get('#kategori').click()
      cy.get('table').contains('td', 'scincare').click()
      cy.contains('button', 'simpan').click()
      cy.get('div[role="alert"]').should('have.text', '"name" is not allowed to be empty')
    })
    it('Gagal Tambah Product (Tanpa Input Category)', () => {
      cy.visit('/')
      cy.get('a[href="/products"]').click()
      cy.get('a[href="/products/create"]').click()
      cy.get('#nama').clear().type("Toner Azzarine")
      cy.get('#deskripsi').clear().type("Toner wajah azzarine")
      cy.get('[id="harga beli"]').clear().type(50000)
      cy.get('[id="harga jual"]').clear().type(65000)
      cy.get('#stok').clear().type(10)
      cy.contains('button', 'simpan').click()
      cy.get('div[role="alert"]').should('have.text', '"category_id" is required')
    })
})