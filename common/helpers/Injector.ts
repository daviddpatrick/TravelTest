import { BuyTicketsPage} from "../pages/BuyTicketsPage";
import { OnlineTicketOfficePage} from "../pages/OnlineTicketOfficePage";
class Injector {
    private isInitialized: boolean;
    private BuyTicketsPage: BuyTicketsPage;
    private OnlineTicketOfficePage: OnlineTicketOfficePage;

    public getPageObjects(): any {
        if (!this.isInitialized) {
            this.BuyTicketsPage = new BuyTicketsPage();
            this.OnlineTicketOfficePage = new OnlineTicketOfficePage();
            this.isInitialized = true;
        }
        return {
            BuyTicketsPage: this.BuyTicketsPage,
            OnlineTicketOfficePage: this.OnlineTicketOfficePage,
        }
    }
}

export default new Injector();