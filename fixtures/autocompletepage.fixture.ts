import { NavigationPageObject } from "../helpers/navigationBar.po";
import { AutoCompletePageObject } from "../pageObjects/autocompage.po";

const navigationBar = new NavigationPageObject();
const autoCompPage = new AutoCompletePageObject();

fixture('Auto Complete page')
    .page(`./widgets`)
    .beforeEach(async t => await navigationBar.chooseSection(t, 'Auto Complete'));

test('Should select multiple colors', async t => {
    const colors: string[] = ['Black', 'Blue', 'Green', 'Yellow', 'Purple'];
    await autoCompPage.chooseMultipleColors(t, colors);
    await t.expect(await autoCompPage.numberOfSelectedColors()).eql(colors.length);
});

test('Should select single color', async t => {
    await autoCompPage.chooseSingleColor(t, 'Green');
    await t.expect(await autoCompPage.selectedSingleValue()).eql('Green');
});