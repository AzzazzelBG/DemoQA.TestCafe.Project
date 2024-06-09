import { NavigationPageObject } from "../helpers/navigationBar.po";
import { DroppablePageObject } from "../pageObjects/droppable.po";

const navigationBar = new NavigationPageObject();
const dropPage = new DroppablePageObject();

fixture('Droppable page')
    .page(`./interaction`)
    .beforeEach(async t => await navigationBar.chooseSection(t, 'Droppable'));

test.skip('Should drag and drop in simple tab', async t => {
    await dropPage.dragIntoDropBox(t);
    await t.expect('rgb(70, 130, 180)').eql(await dropPage.colorChangeToBlue());
});

test('Should drag to greedy outer box', async t => {
    await dropPage.chooseDropTab(t, 'Prevent Propogation');
    const text = await dropPage.prevPropGreedyOuterChangeTextAfterDrop(t);
    await t.expect(await dropPage.prevPropGreedyOuterChangeTextAfterDrop(t)).ok();
});