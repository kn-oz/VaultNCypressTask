class LoginPage{

    getLogin(email,password){
         cy.get('[id="username"]').type(email)
            cy.get('[id="login-submit"]').click()
            cy.get('[type="password"]').type(password+'{enter}')
            return
    }

}
export default LoginPage