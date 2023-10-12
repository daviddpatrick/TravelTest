import Injector from "../common/helpers/Injector";
import assert from "assert";
const { BuyTicketsPage, OnlineTicketOfficePage } = Injector.getPageObjects();
Feature('booktravel');

const userInfo = new DataTable(["fromLocation", "toLocation" ,"departingDays", "returningDays"]);
userInfo.add(["Lagos", "Porto - Campanha", 2, 4]);
userInfo.add(["Lagos", "Porto - Campanha", 3, 5]);
userInfo.add(["Lagos", "Porto - Campanha", 4, 6]);

Data(userInfo).Scenario('Book travel from Lagos to Campanha', { retries: 2 }, async ({ I, current }) => {
    //Arrange
    let departingDateResult, returningDateResult, fromLocationResult, toLocationResult: string;

    //Act
    await BuyTicketsPage.openBuyTicketsPage();
    await BuyTicketsPage.selectFromLocation(current.fromLocation);
    await BuyTicketsPage.selectToLocation(current.toLocation);
    await BuyTicketsPage.selectDepartingDate(current.departingDays);
    await BuyTicketsPage.selectReturningDate(current.returningDays);

    fromLocationResult = await BuyTicketsPage.getFromLocation();
    toLocationResult = await BuyTicketsPage.getToLocation();
    departingDateResult = await BuyTicketsPage.getDepartingDate();
    returningDateResult = await BuyTicketsPage.getReturningDate();

    await BuyTicketsPage.clickBuyTicketsButton();
    await OnlineTicketOfficePage.clickCancelButton();

    //Assert
    await assert(fromLocationResult, await BuyTicketsPage.getFromLocation());
    await assert(toLocationResult, await BuyTicketsPage.getToLocation());
    await assert(departingDateResult, await BuyTicketsPage.getDepartingDate());
    await assert(returningDateResult, await BuyTicketsPage.getReturningDate());
});
