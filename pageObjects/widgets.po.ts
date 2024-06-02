import { Selector } from "testcafe";
import { NavigationPageObject } from "../helpers/navigationBar.po";

const navigationBar = new NavigationPageObject();

export class WidgetsPageObject {

    private readonly _pageTitle = Selector('h1.text-center');
    private readonly _selectDropGeneric = Selector('div.css-1hwfws3');

    public async titleExists(t: TestController, titleText: string): Promise<boolean> {
        return this._pageTitle.withText(`${titleText}`).exists;
    }

    public async clickTab(t: TestController, tabName: string): Promise<void> {
        const tab = Selector(`a#demo-tab-${tabName.toLowerCase()}`);
        await t.click(tab);
    }

    public async tabSelected(tabName: string): Promise<string | null> {
        return Selector(`a#demo-tab-${tabName.toLowerCase()}`).getAttribute('aria-selected');
    }

    public async clickSelectValueDropdown(t: TestController): Promise<void> {
        const selectValueDropdown = this._selectDropGeneric.nth(0);
        await t.click(selectValueDropdown);
    }
}