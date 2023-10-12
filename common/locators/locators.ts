export enum LocatorsBuyTicketsPage {
    FromLocation = 'input[name="textBoxPartida"]',
    ToLocation = 'input[name="textBoxChegada"]',
    DepartingDateLocator = 'input[name="departDate"]',
    ReturningDateLocator = 'input[name="returnDate"]',
    DatePickerFirst = 'table[id="datepicker-first_table"] div[data-pick="today"]',
    DatePickerSecond = 'table[id="datepicker-second_table"] div[data-pick="today"]',
    BuyTicketsButton = 'input[type="Submit"]',
}

export enum LocatorsOnlineTicketOfficePage {
    cancelButton = 'input[name="exitButton"]',
}