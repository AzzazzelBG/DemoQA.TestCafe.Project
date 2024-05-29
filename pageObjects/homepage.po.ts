import { Selector } from "testcafe";

export class HomePageObject {

    public async clickOnCard(t: TestController, title: string) {

        const elementsCard = Selector('div.card-body').withText(title);

        await t.click(elementsCard);
    }
}