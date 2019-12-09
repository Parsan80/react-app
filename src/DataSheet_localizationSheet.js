import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text_1005342";
    item['en'] = "Hej och välkommen till min simpla React app som är gjord med React Studio!";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_880955";
    item['en'] = "LinkedIn link";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button2_207523";
    item['en'] = "TIKTOK LINK";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button3_161780";
    item['en'] = "Github link";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
