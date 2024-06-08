import { Selector } from "testcafe";

export class AutoCompletePageObject {
    private readonly _multiColorField = Selector('#autoCompleteMultiple');
    private readonly _singleColorField = Selector('#autoCompleteSingle');
}