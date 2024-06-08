import { NavigationPageObject } from "../helpers/navigationBar.po";
import { HomePageObject } from "../pageObjects/homepage.po";
import { TabsPageObject } from "../pageObjects/tabs.po";

const homePage = new HomePageObject();
const navigationBar = new NavigationPageObject();
const tabsPage = new TabsPageObject();

fixture('Tabs page')
    .page(`./widgets`);

test('Should navigate to Tabs menu', async t => {
    await navigationBar.chooseSection(t, 'Tabs');
    await t.expect(await tabsPage.tabsTitleExists()).ok();
});

test('Should select Use tab', async t => {
    await navigationBar.chooseSection(t, 'Tabs');
    const attributeValue = await tabsPage.useTabSelected(t);
    await t.expect(attributeValue).eql('true');
});