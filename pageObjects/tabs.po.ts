import { Selector } from "testcafe";

export class TabsPageObject {
    private readonly _tabsTitle = Selector('h1.text-center').withText('Tabs');
    private readonly _useTab = Selector('a#demo-tab-use');

    public async tabsTitleExists(): Promise<boolean> {
        return this._tabsTitle.exists;
    }

    public async useTabSelected(t: TestController ): Promise<string | null> {
        await t.click(this._useTab);
        return this._useTab.getAttribute('aria-selected');
    }
}