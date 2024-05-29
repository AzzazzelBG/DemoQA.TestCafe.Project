import { Selector } from "testcafe";
import { ClientFunction } from 'testcafe';
import { HomePageObject } from "../pageObjects/homepage.po";

const homePage = new HomePageObject();
const dataSet = require('../dataSets/cardData.json');

fixture('Home Page')
    .page('https://demoqa.com/');

test('Should navigate to home page', async t => {
    const titlePicture = Selector('.banner-image').exists;

    await t.expect(titlePicture).ok();
});

dataSet.forEach(data => {
    test(`Should click the ${data.cardName} card`, async t => {
        await homePage.clickOnCard(t, `${data.cardName}`);

        const getPageUrl = await ClientFunction(() => window.location.href);

        await t.expect(getPageUrl()).contains(`${data.urlExpectedText}`);
    });
});