import { Selector } from "testcafe";

type DroppableTabs = 'Simple' | 'Accept' | 'Prevent Propogation' | 'Revert Draggable';

export class DroppablePageObject {
    private readonly _navTabs = Selector('nav.nav.nav-tabs');
    private readonly _dragMeBox = Selector('#draggable');
    private readonly _dropHereBox = Selector('#droppable');
    private readonly _prevPropDragBox = Selector('#dragBox');
    private readonly _prevpropGreedyBox = Selector('#greedyDropBox');
    private readonly _prevpropInnerGreedyBox = Selector('#greedyDropBoxInner');

    public async chooseDropTab(t: TestController, tabName: DroppableTabs): Promise<void> {
        await t.click(this._navTabs.withText(tabName));
    }

    public async dragIntoDropBox(t: TestController): Promise<void> {
        await t.dragToElement(this._dragMeBox, this._dropHereBox);
    }

    public async colorChangeToBlue(): Promise<string> {
        return this._dropHereBox.getStyleProperty('background-color');
    }

    //Does not work properly
    public async prevPropGreedyOuterChangeTextAfterDrop(t: TestController): Promise<boolean> {
        const outerText = this._prevpropGreedyBox.withText('Outer droppable');
        await t.dragToElement(this._prevPropDragBox, outerText).wait(1000);
        return this._prevpropInnerGreedyBox.withAttribute('p', 'Dropped!').exists;
    }
}