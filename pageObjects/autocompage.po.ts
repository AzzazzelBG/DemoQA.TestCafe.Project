import { Selector } from "testcafe";

export class AutoCompletePageObject {
    private readonly _multiColorField = Selector('div.auto-complete__value-container').nth(0);
    private readonly _singleColorField = Selector('div.auto-complete__value-container').nth(1);
    private readonly _selectedMultiValues = Selector('div.css-1rhbuit-multiValue.auto-complete__multi-value');
    private readonly _selectedSingleValue = Selector('div.auto-complete__single-value.css-1uccc91-singleValue');

    public async chooseMultipleColors(t: TestController, colours: string[]): Promise<void> {
        for(var color of colours) {
            await t.typeText(this._multiColorField, color);
            const suggestions = Selector('.auto-complete__menu');
            await t.click(suggestions.child().withText(color));
        }
    }

    public async numberOfSelectedColors(): Promise<number> {
        return this._selectedMultiValues.count;
    }

    public async chooseSingleColor(t: TestController, color: string): Promise<void> {
        await t.typeText(this._singleColorField, color);
        const suggestions = Selector('.auto-complete__menu');
        await t.click(suggestions.child().withText(color));
    }

    public async selectedSingleValue(): Promise<string> {
        return this._selectedSingleValue.innerText;
    }
}