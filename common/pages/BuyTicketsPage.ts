import {LocatorsBuyTicketsPage} from '../locators/locators';
import I = CodeceptJS.I;

const { I } = inject();

export class BuyTicketsPage {
    public I: I;
    public readonly FromLocation = LocatorsBuyTicketsPage.FromLocation;
    public readonly ToLocation = LocatorsBuyTicketsPage.ToLocation;
    public readonly DepartingDateLocator = LocatorsBuyTicketsPage.DepartingDateLocator;
    public readonly ReturningDateLocator = LocatorsBuyTicketsPage.ReturningDateLocator;
    public readonly DatePickerFirst = LocatorsBuyTicketsPage.DatePickerFirst;
    public readonly DatePickerSecond = LocatorsBuyTicketsPage.DatePickerSecond;
    public readonly buyTicketsButton = LocatorsBuyTicketsPage.BuyTicketsButton;

    public constructor() {
        this.I = I;
    }
    public async openBuyTicketsPage():Promise<void>{
        await this.I.amOnPage('/buy-tickets');
    }
    public async selectFromLocation(fromLocation:string):Promise<void>{
        await this.I.waitForVisible(this.FromLocation);
        await this.I.fillField(this.FromLocation, fromLocation);
    }

    public async getFromLocation():Promise<string>{
        await this.I.waitForVisible(this.FromLocation);
        return this.I.grabValueFrom(this.FromLocation);
    }
    public async selectToLocation(toLocation:string):Promise<void>{
        await this.I.waitForVisible(this.ToLocation);
        await this.I.fillField(this.ToLocation, toLocation);
    }

    public async getToLocation():Promise<string>{
        await this.I.waitForVisible(this.ToLocation);
        return this.I.grabValueFrom(this.ToLocation);
    }

    public async selectDepartingDate(addDays:number):Promise<void>{
        await this.I.click(this.DepartingDateLocator);
        const todaysDate  = this.calculateDate(addDays);
        await this.I.click(this.DatePickerFirst.replace('today', todaysDate.toString()));
    }

    public async getDepartingDate():Promise<string>{
        await this.I.waitForVisible(this.DepartingDateLocator);
        return await this.I.grabValueFrom(this.DepartingDateLocator);
    }

    public async selectReturningDate(addDays:number):Promise<void>{
        await this.I.click(this.ReturningDateLocator);
        const todaysDate  = this.calculateDate(addDays);
        await this.I.click(this.DatePickerSecond.replace('today', todaysDate.toString()));
    }

    public async getReturningDate():Promise<string>{
        await this.I.waitForVisible(this.ReturningDateLocator);
        return await this.I.grabValueFrom(this.ReturningDateLocator);
    }
    public async clickBuyTicketsButton():Promise<void>{
        await this.I.click(this.buyTicketsButton);
    }

    calculateDate(addDays:number):number{
        const today: Date = new Date();
        today.setHours(17,0,0,0);
        const todayInMiliseconds: number = today.getTime();
        addDays-=1;
        const daysInMiliseconds: number = addDays * 86400000;
        return todayInMiliseconds + daysInMiliseconds;
    }
}