import { Selector } from "testcafe";
import { NavigationPageObject } from "../helpers/navigationBar.po";
import { HomePageObject } from "../pageObjects/homepage.po";

const homePage = new HomePageObject();
const navigationBar = new NavigationPageObject();

fixture('Widget page');

test('Should navigate to Tabs menu', async t => {
    await homePage.clickOnCard(t, 'Widgets');
    await navigationBar.chooseSection(t, 'Tabs');

    const tabsTitle = Selector('h1.text-center').withText('Tabs').exists;
    await t.expect(tabsTitle).ok();
})