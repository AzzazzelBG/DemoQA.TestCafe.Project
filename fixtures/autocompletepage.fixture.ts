import { NavigationPageObject } from "../helpers/navigationBar.po";

const navigationBar = new NavigationPageObject();

fixture('Auto Complete page')
    .beforeEach(async t => await navigationBar.chooseSection(t, 'Auto Complete', 'Widgets'));

test('Should select multiple colors', async t => {
    
});