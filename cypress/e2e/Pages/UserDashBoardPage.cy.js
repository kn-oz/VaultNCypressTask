class UserDashBoardPage{

    getAddBoard(NameOfBoard){
        return  cy.wait(1000)
        .get('[class="board-tile mod-add"]').click()
        .get('[data-testid="create-board-title-input"]').type(NameOfBoard)
        .wait(1000)
        .get('[data-testid="create-board-submit-button"]').click()
    }

    getAddList(NameOfList) {
        return cy.get('[class="oe8RymzptORQ7h"]').type(NameOfList)
            .get('[data-testid="list-composer-add-list-button"]').click();
    }

    getCloseBoard(){
        return cy.get('.GDunJzzgFqQY_3 > .nch-icon > [data-testid="OverflowMenuHorizontalIcon"]').click()
                 .get('[class="board-menu-navigation-item-link board-menu-navigation-item-link-v2 js-close-board"]').click()
                 .get('[type="submit"]').click()
    }
    getDeleteBoard(){
        return cy.get('[data-testid="close-board-delete-board-button"]').click()
                 .get('[data-testid="close-board-delete-board-confirm-button"]').click()

    }

    getAddCardtoList(cardValue,indexOfList){
        cy.get('[data-testid="list-add-card-button"]').eq(indexOfList).type(cardValue)
        cy.get('[type="submit"]').click()
        cy.get('body').type('{enter}');

    }

    getListMove(cardValue,targetListStatus){
        return cy.wait(1000)
        .get('[data-testid="card-name"]').contains(cardValue).click()
        .wait(1000)
        .get('[class="js-open-move-from-header"]').click()
        .get('[class=" css-1tbvomj"]').eq(1).click()
        .get('[role="option"] ').contains(targetListStatus).click()
        .get('[data-testid="move-card-popover-move-button"]').click()
        .get('.Y9J4BArcarEAX9 > .nch-icon > [data-testid="CloseIcon"]').click()
        .wait(1000)
    }

}
export default UserDashBoardPage