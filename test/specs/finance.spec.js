const wdio = require('webdriverio');
const allureReporter = require('@wdio/allure-reporter').default;

describe('basic test', async () => {
    it('should check that there are 5 menu items', async () => {
        allureReporter.addDescription('should check that there are 5 menu items');
        let menuSelector = 'new UiSelector().className("android.widget.TextView")';
        let menu = await $$(`android=${menuSelector}`);
        let menuCount = menu.length;
        await expect(menuCount).toEqual(5);    
    });

    it('should check the presence of main menu title', async () => {
        allureReporter.addDescription('should check the presence of main menu title');
        let titleSelector = 'new UiSelector().className("android.widget.TextView").text("Finance Analyzer")';
        let mainTitle = await $(`android=${titleSelector}`);
        await expect(mainTitle).toExist();   
    });
  
    it('should check saving', async () => {
        allureReporter.addDescription('should check saving');
        let expense = ['BREAD', '2', 'food'];
        let fields = await $$("android.widget.EditText");
        for (let i=0; i<fields.length; i++){
          await fields[i].setValue(expense[i]);
        };
        await $("android.widget.Button").click();
        let savedValues = await $("android.widget.RelativeLayout").$$("android.widget.TextView");
        let textFromSavedValues = [];
        for (let i=0; i<savedValues.length; i++){
            if (i != 1){
                textFromSavedValues.push(await savedValues[i].getText());        
            };
        };
        await expect(textFromSavedValues).toEqual(expense); 
    });

    it('should check Statistics section', async () => {
        allureReporter.addDescription('should check Statistics section');
        let Statistics = await $('~Statistics');
        await Statistics.click();
        let statSelector = 'new UiSelector().className("android.widget.TextView").text("Statistics")';
        let menuItem = await $(`android=${statSelector}`);
        await expect(menuItem).toBeDisplayed();
    });          

});