export class Treaty {
  pageTitle: string;
  treatyTitle: string;
  registrationNumber: string;
  conclusionDate: string;
  mTDSGNumber: string;
  treatyItems: TreatyItem[] = [];
  treatyItem: TreatyItem;

  constructor() {
    this.pageTitle = "Actions by Date of Notifications";
    this.treatyTitle = "Regulation No. 139. Uniform provisions concerning the approval of passenger cars with regards to Brake Assist Systems (BAS)";
    this.registrationNumber = "A-4789";
    this.conclusionDate = "Geneva, 14 July 2016";
    this.mTDSGNumber = "XI-B-16-139";

    //1
    this.treatyItem = new TreatyItem();
    this.treatyItem.participant = "Formality";
    this.treatyItem.englishTitle = "Entry into force of regulation No. 140";
    this.treatyItem.modifier = "Marjorie Thebaud";
    this.treatyItem.dataOfModification = "22/01/2020";
    this.treatyItem.webPublished = "True";

    this.treatyItems.push(this.treatyItem);

    //2
    this.treatyItem = new TreatyItem();
    this.treatyItem.participant = "United Kingdom of Great Britain and Northern Ireland";
    this.treatyItem.englishTitle = "Application of Regulationns";
    this.treatyItem.modifier = "Benoit Marotte";
    this.treatyItem.dataOfModification = "22/01/2019";
    this.treatyItem.webPublished = "False";

    this.treatyItems.push(this.treatyItem);

    //3
    this.treatyItem = new TreatyItem();
    this.treatyItem.participant = "Ukraine";
    this.treatyItem.englishTitle = "Application of Regulationns";
    this.treatyItem.modifier = "Benoit Marotte";
    this.treatyItem.dataOfModification = "22/01/2018";
    this.treatyItem.webPublished = "True";

    this.treatyItems.push(this.treatyItem);

    //4
    this.treatyItem = new TreatyItem();
    this.treatyItem.participant = "Tunisia";
    this.treatyItem.englishTitle = "Application of Regulationns";
    this.treatyItem.modifier = "Benoit Marotte";
    this.treatyItem.dataOfModification = "22/01/2017";
    this.treatyItem.webPublished = "False";

    this.treatyItems.push(this.treatyItem);

    //5
    this.treatyItem = new TreatyItem();
    this.treatyItem.participant = "Switzerlan";
    this.treatyItem.englishTitle = "Application of Regulationns";
    this.treatyItem.modifier = "Benoit Marotte";
    this.treatyItem.dataOfModification = "22/01/2016";
    this.treatyItem.webPublished = "False";

    this.treatyItems.push(this.treatyItem);

    //6
    this.treatyItem.participant = "Formality";
    this.treatyItem.englishTitle = "Entry into force of regulation No. 140";
    this.treatyItem.modifier = "Marjorie Thebaud";
    this.treatyItem.dataOfModification = "22/01/2015";
    this.treatyItem.webPublished = "True";

    this.treatyItems.push(this.treatyItem);

    //7
    this.treatyItem = new TreatyItem();
    this.treatyItem.participant = "United Kingdom of Great Britain and Northern Ireland";
    this.treatyItem.englishTitle = "Application of Regulationns";
    this.treatyItem.modifier = "Benoit Marotte";
    this.treatyItem.dataOfModification = "22/01/2014";
    this.treatyItem.webPublished = "False";

    this.treatyItems.push(this.treatyItem);

    //8
    this.treatyItem = new TreatyItem();
    this.treatyItem.participant = "Ukraine";
    this.treatyItem.englishTitle = "Application of Regulationns";
    this.treatyItem.modifier = "Benoit Marotte";
    this.treatyItem.dataOfModification = "22/01/2014";
    this.treatyItem.webPublished = "True";

    this.treatyItems.push(this.treatyItem);

    //9
    this.treatyItem = new TreatyItem();
    this.treatyItem.participant = "Tunisia";
    this.treatyItem.englishTitle = "Application of Regulationns";
    this.treatyItem.modifier = "Benoit Marotte";
    this.treatyItem.dataOfModification = "22/01/2016";
    this.treatyItem.webPublished = "False";

    this.treatyItems.push(this.treatyItem);

    //10
    this.treatyItem = new TreatyItem();
    this.treatyItem.participant = "Switzerlan";
    this.treatyItem.englishTitle = "Application of Regulationns";
    this.treatyItem.modifier = "Benoit Marotte";
    this.treatyItem.dataOfModification = "22/01/2013";
    this.treatyItem.webPublished = "True";

    this.treatyItems.push(this.treatyItem);

    //11
    this.treatyItem.participant = "Formality";
    this.treatyItem.englishTitle = "Entry into force of regulation No. 140";
    this.treatyItem.modifier = "Marjorie Thebaud";
    this.treatyItem.dataOfModification = "22/01/2012";
    this.treatyItem.webPublished = "False";

    this.treatyItems.push(this.treatyItem);

    //12
    this.treatyItem = new TreatyItem();
    this.treatyItem.participant = "United Kingdom of Great Britain and Northern Ireland";
    this.treatyItem.englishTitle = "Application of Regulationns";
    this.treatyItem.modifier = "Benoit Marotte";
    this.treatyItem.dataOfModification = "22/01/2011";
    this.treatyItem.webPublished = "True";

    this.treatyItems.push(this.treatyItem);

    //13
    this.treatyItem = new TreatyItem();
    this.treatyItem.participant = "Ukraine";
    this.treatyItem.englishTitle = "Application of Regulationns";
    this.treatyItem.modifier = "Benoit Marotte";
    this.treatyItem.dataOfModification = "22/01/2010";
    this.treatyItem.webPublished = "False";

    this.treatyItems.push(this.treatyItem);

    //14
    this.treatyItem = new TreatyItem();
    this.treatyItem.participant = "Tunisia";
    this.treatyItem.englishTitle = "Application of Regulationns";
    this.treatyItem.modifier = "Benoit Marotte";
    this.treatyItem.dataOfModification = "22/01/2009";
    this.treatyItem.webPublished = "True";

    this.treatyItems.push(this.treatyItem);

    //15
    this.treatyItem = new TreatyItem();
    this.treatyItem.participant = "Switzerlan";
    this.treatyItem.englishTitle = "Application of Regulationns";
    this.treatyItem.modifier = "Benoit Marotte";
    this.treatyItem.dataOfModification = "22/01/2008";
    this.treatyItem.webPublished = "False";

    this.treatyItems.push(this.treatyItem);
  }

}

export class TreatyItem {
  participant: string;
  englishTitle: string;
  modifier: string;
  dataOfModification: string;
  webPublished: string;
}

