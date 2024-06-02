import { Selector } from "testcafe";
import { NavigationPageObject } from "../helpers/navigationBar.po";
import { HomePageObject } from "../pageObjects/homepage.po";
import { WidgetsPageObject } from "../pageObjects/widgets.po";

const homePage = new HomePageObject();
const navigationBar = new NavigationPageObject();
const widgetPage = new WidgetsPageObject();

fixture('Widget page')
    .beforeEach(async t => await homePage.clickOnCard(t, 'Widgets'));

test('Should navigate to Tabs menu', async t => {

    await navigationBar.chooseSection(t, 'Tabs');
    const tabsTitle = await widgetPage.titleExists(t, 'Tabs');
    await t.expect(tabsTitle).ok();
});

test('Should click Use tab', async t => {
    await navigationBar.chooseSection(t, 'Tabs');
    await widgetPage.clickTab(t, 'Use');
    const isTabselected = await widgetPage.tabSelected('use');
    await t.expect(isTabselected).eql('true');
});

test('Should go to Select Menu tab', async t => {
    await navigationBar.chooseSection(t, 'Select Menu');
    const selectMenuTitle = await widgetPage.titleExists(t, 'Select Menu');
    await t.expect(selectMenuTitle).ok();
})
//TODO: Continue with the Slect Menu test