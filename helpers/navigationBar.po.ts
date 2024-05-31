import { Selector } from "testcafe";

type MainSections = "Elements" | "Forms" | "Alerts, Frame & Windows" | "Widgets" | "Interactions" | "Interactions";

export class NavigationPageObject {

    private readonly _mainSection = Selector('div.header-wrapper');
    private readonly _elementsList = Selector('span.text');


    public async chooseSection(t: TestController, subSection: string, section?: MainSections) {
        if (section) {
            const mainSection = this._mainSection.withText(section);
            await t.click(mainSection);
        }

        const subSelect = this._elementsList.withText(subSection);
        await t.click(subSelect);
    }
}   