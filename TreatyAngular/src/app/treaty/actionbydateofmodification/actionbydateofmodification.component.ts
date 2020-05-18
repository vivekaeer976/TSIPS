import { Component, OnInit, ViewChild } from '@angular/core';
import { Treaty, TreatyItem } from '../treaty';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { TreatyserviceService} from '../service/treatyservice.service';
import { debug } from 'util';


@Component({
  selector: 'app-actionbydateofmodification',
  templateUrl: './actionbydateofmodification.component.html',
  styleUrls: ['./actionbydateofmodification.component.css']
})
export class ActionbydateofmodificationComponent implements OnInit {

  treaty: Treaty = new Treaty();
  treatyItem: TreatyItem = new TreatyItem();
  treatyItems: TreatyItem[];

  displayedColumns: string[] = ['participant', 'englishTitle', 'modifier', 'dataOfModification', 'webPublished','Action'];

  //dataSource = new MatTableDataSource<TreatyItem>(this.treatyItems);
  dataSource = new MatTableDataSource<TreatyItem>(this.treaty.treatyItems);      

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  participantFilter = new FormControl('');
  englishTitleFilter = new FormControl('');
  modifierFilter = new FormControl('');
  dataOfModificationFilter = new FormControl('');
  webPublishedSource = new FormControl('');
  
  filterValues = {
    participant: '',
    englishTitle: '',
    modifier: '',
    dataOfModification: '',
    webPublished:''
  };

  constructor(private service: TreatyserviceService) {
    this.dataSource.filterPredicate = this.createFilter();
  }

  ngOnInit()
  {
    this.treaty.pageTitle = "Actions by Date of Notifications";
    this.treaty.treatyTitle = "Regulation No. 139. Uniform provisions concerning the approval of passenger cars with regards to Brake Assist Systems (BAS)";
    this.treaty.registrationNumber = "A-4789";
    this.treaty.conclusionDate = "Geneva, 14 July 2016";
    this.treaty.mTDSGNumber = "XI-B-16-139";

    //////1
    //this.treatyItem.participant = "Formality";
    //this.treatyItem.englishTitle = "Entry into force of regulation No. 140";
    //this.treatyItem.modifier = "Marjorie Thebaud";
    //this.treatyItem.dataOfModification = "22/01/2020";
    //this.treatyItem.webPublished = "True";

    //this.treaty.treatyItems.push(this.treatyItem);

    //////2
    //this.treatyItem = new TreatyItem();
    //this.treatyItem.participant = "United Kingdom of Great Britain and Northern Ireland";
    //this.treatyItem.englishTitle = "Application of Regulationns";
    //this.treatyItem.modifier = "Benoit Marotte";
    //this.treatyItem.dataOfModification = "22/01/2019";
    //this.treatyItem.webPublished = "False";

    //this.treaty.treatyItems.push(this.treatyItem);
   
    //////3
    //this.treatyItem = new TreatyItem();
    //this.treatyItem.participant = "Ukraine";
    //this.treatyItem.englishTitle = "Application of Regulationns";
    //this.treatyItem.modifier = "Benoit Marotte";
    //this.treatyItem.dataOfModification = "22/01/2018";
    //this.treatyItem.webPublished = "True";

    //this.treaty.treatyItems.push(this.treatyItem);

    //////4
    //this.treatyItem = new TreatyItem();
    //this.treatyItem.participant = "Tunisia";
    //this.treatyItem.englishTitle = "Application of Regulationns";
    //this.treatyItem.modifier = "Benoit Marotte";
    //this.treatyItem.dataOfModification = "22/01/2017";
    //this.treatyItem.webPublished = "False";

    //this.treaty.treatyItems.push(this.treatyItem);

    //////5
    //this.treatyItem = new TreatyItem();
    //this.treatyItem.participant = "Switzerlan";
    //this.treatyItem.englishTitle = "Application of Regulationns";
    //this.treatyItem.modifier = "Benoit Marotte";
    //this.treatyItem.dataOfModification = "22/01/2016";
    //this.treatyItem.webPublished = "False";

    //this.treaty.treatyItems.push(this.treatyItem);

    //////6
    //this.treatyItem.participant = "Formality";
    //this.treatyItem.englishTitle = "Entry into force of regulation No. 140";
    //this.treatyItem.modifier = "Marjorie Thebaud";
    //this.treatyItem.dataOfModification = "22/01/2015";
    //this.treatyItem.webPublished = "True";

    //this.treaty.treatyItems.push(this.treatyItem);

    //////7
    //this.treatyItem = new TreatyItem();
    //this.treatyItem.participant = "United Kingdom of Great Britain and Northern Ireland";
    //this.treatyItem.englishTitle = "Application of Regulationns";
    //this.treatyItem.modifier = "Benoit Marotte";
    //this.treatyItem.dataOfModification = "22/01/2014";
    //this.treatyItem.webPublished = "False";

    //this.treaty.treatyItems.push(this.treatyItem);

    //////8
    //this.treatyItem = new TreatyItem();
    //this.treatyItem.participant = "Ukraine";
    //this.treatyItem.englishTitle = "Application of Regulationns";
    //this.treatyItem.modifier = "Benoit Marotte";
    //this.treatyItem.dataOfModification = "22/01/2014";
    //this.treatyItem.webPublished = "True";

    //this.treaty.treatyItems.push(this.treatyItem);

    //////9
    //this.treatyItem = new TreatyItem();
    //this.treatyItem.participant = "Tunisia";
    //this.treatyItem.englishTitle = "Application of Regulationns";
    //this.treatyItem.modifier = "Benoit Marotte";
    //this.treatyItem.dataOfModification = "22/01/2016";
    //this.treatyItem.webPublished = "False";

    //this.treaty.treatyItems.push(this.treatyItem);

    //////10
    //this.treatyItem = new TreatyItem();
    //this.treatyItem.participant = "Switzerlan";
    //this.treatyItem.englishTitle = "Application of Regulationns";
    //this.treatyItem.modifier = "Benoit Marotte";
    //this.treatyItem.dataOfModification = "22/01/2013";
    //this.treatyItem.webPublished = "True";

    //this.treaty.treatyItems.push(this.treatyItem);

    //////11
    //this.treatyItem.participant = "Formality";
    //this.treatyItem.englishTitle = "Entry into force of regulation No. 140";
    //this.treatyItem.modifier = "Marjorie Thebaud";
    //this.treatyItem.dataOfModification = "22/01/2012";
    //this.treatyItem.webPublished = "False";

    //this.treaty.treatyItems.push(this.treatyItem);

    //////12
    //this.treatyItem = new TreatyItem();
    //this.treatyItem.participant = "United Kingdom of Great Britain and Northern Ireland";
    //this.treatyItem.englishTitle = "Application of Regulationns";
    //this.treatyItem.modifier = "Benoit Marotte";
    //this.treatyItem.dataOfModification = "22/01/2011";
    //this.treatyItem.webPublished = "True";

    //this.treaty.treatyItems.push(this.treatyItem);

    //////13
    //this.treatyItem = new TreatyItem();
    //this.treatyItem.participant = "Ukraine";
    //this.treatyItem.englishTitle = "Application of Regulationns";
    //this.treatyItem.modifier = "Benoit Marotte";
    //this.treatyItem.dataOfModification = "22/01/2010";
    //this.treatyItem.webPublished = "False";

    //this.treaty.treatyItems.push(this.treatyItem);

    //////14
    //this.treatyItem = new TreatyItem();
    //this.treatyItem.participant = "Tunisia";
    //this.treatyItem.englishTitle = "Application of Regulationns";
    //this.treatyItem.modifier = "Benoit Marotte";
    //this.treatyItem.dataOfModification = "22/01/2009";
    //this.treatyItem.webPublished = "True";

    //this.treaty.treatyItems.push(this.treatyItem);

    //////15
    //this.treatyItem = new TreatyItem();
    //this.treatyItem.participant = "Switzerlan";
    //this.treatyItem.englishTitle = "Application of Regulationns";
    //this.treatyItem.modifier = "Benoit Marotte";
    //this.treatyItem.dataOfModification = "22/01/2008";
    //this.treatyItem.webPublished = "False";
    //this.treaty.treatyItems.push(this.treatyItem);

    this.service.getAllTreatyItems().subscribe(
      (response: TreatyItem[]) => {
        this.treaty.treatyItems = response;     
        this.dataSource = new MatTableDataSource<TreatyItem>(this.treaty.treatyItems);      
      }
    );   

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;


    this.participantFilter.valueChanges
      .subscribe(
        participant => {
          this.filterValues.participant = participant;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.englishTitleFilter.valueChanges
      .subscribe(
        englishTitle => {
          this.filterValues.englishTitle = englishTitle;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.modifierFilter.valueChanges
      .subscribe(
        modifier => {
          this.filterValues.modifier = modifier;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.dataOfModificationFilter.valueChanges
      .subscribe(
        dataOfModification => {
          this.filterValues.dataOfModification = dataOfModification;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.webPublishedSource.valueChanges
      .subscribe(
        webPublished => {
          this.filterValues.webPublished = webPublished;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
  }

  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function (data, filter): boolean {
      let searchTerms = JSON.parse(filter);
      return data.participant.toLowerCase().indexOf(searchTerms.participant.toLowerCase()) !== -1
        && data.englishTitle.toString().toLowerCase().indexOf(searchTerms.englishTitle.toLowerCase()) !== -1
        && data.modifier.toLowerCase().indexOf(searchTerms.modifier.toLowerCase()) !== -1
        && data.dataOfModification.toLowerCase().indexOf(searchTerms.dataOfModification.toLowerCase()) !== -1
        && data.webPublished.toLowerCase().indexOf(searchTerms.webPublished.toLowerCase()) !== -1;
    }
    return filterFunction;
  }

  onTreatyUpdateClick(action: string, element: TreatyItem) {
    alert("This is under development. You have clicked on : " + element.participant);
  }
}
