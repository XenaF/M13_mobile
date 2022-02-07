const expect = require("chai").expect;

describe('basic tests', () => {
    it('should open homepage', async () => {
        await browser.get('https://oz.by/');
        let title = await browser.getTitle();
        expect(title).to.be.equal('OZ.by — интернет-магазин. Книги, игры, косметика, товары для дома, творчества, подарки, продукты. Доставка по Беларуси.');
    });

    it('should change button text when add to basket', async () => {
        let searchItem = 'Javascript';
        await element(by.className('top-panel__search__input ui-autocomplete-input')).sendKeys(searchItem);
        await element(by.className('search-tools')).click();
        await element(by.className('filters-mobile-controls__item filters-mobile-controls__item--fico')).click();
        await element(by.linkText('Бестселлеры')).click();
        await element(by.id('f-results')).click();
        await element(by.className('viewer-type-card__li')).click();
        let basket = await element(by.className('i-button__text'));
        await browser.executeScript('arguments[0].scrollIntoView()', basket);
        await basket.click();
        browser.sleep(1000);
        let text = await element(by.className('i-button__text')).getText();
        expect(text).to.be.equal('Уже в корзине');         
    });  

    it('should check contact details in footer', async () => {
        await browser.executeScript('window.scrollTo(0,0)');
        await element(by.className('top-panel__logo')).click();
        browser.sleep(2000);
        let socialLinks = await element(by.className('footer-full__social-list'));
        await browser.executeScript('arguments[0].scrollIntoView()', socialLinks); 
        let contacts = await element(by.className('footer-full__links-list-item')).getText();
        expect(contacts).to.be.equal('Позвонить 695-25-25 (МТС, A1, life:)');
    });   

});