import {LocatorsOnlineTicketOfficePage} from '../locators/locators';
import I = CodeceptJS.I;
const { I } = inject();

export class OnlineTicketOfficePage {
    public I: I;
    public readonly CancelButton = LocatorsOnlineTicketOfficePage.cancelButton;

    public constructor() {
        this.I = I;
    }
    public async clickCancelButton():Promise<void>{
        await this.I.seeInCurrentUrl('/comprar');
        await this.I.waitForVisible(this.CancelButton);
        await this.I.click(this.CancelButton);
    }
}