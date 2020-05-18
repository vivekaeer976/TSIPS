import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface TreatyType {
  value: string;
  viewValue: string;
}
interface Language {
  languageName: string;
  languageCode: string;
}
@Component({
  selector: 'app-edittreaty',
  templateUrl: './edittreaty.component.html',
  styleUrls: ['./edittreaty.component.css']
})
export class EditTreatyComponent {
  isLinear = false;
  treatyFormGroup: FormGroup;
  typeOfAgreementICJClauseFormGroup: FormGroup;
  eIFFormGroup: FormGroup;
  attachmentsFormGroup: FormGroup;
  otherTerritoryInformationFormGroup: FormGroup;
  translationLimitedPublicationFormGroup: FormGroup;
  treatyTypes: TreatyType[] = [
    { value: 'Regulation', viewValue: 'Regulation' },
    { value: 'abc', viewValue: 'abc' },
    { value: 'xyz', viewValue: 'xyz' }
  ];
  languages: Language[] = [
    { languageCode: 'Arabic', languageName: 'Arabic' },
    { languageCode: 'Chinese', languageName: 'Chinese' },
    { languageCode: 'English', languageName: 'English' },
    { languageCode: 'French', languageName: 'French' },
    { languageCode: 'Russian', languageName: 'Russian' },
    { languageCode: 'Spanish', languageName: 'Spanish' }
  ];
  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit() {
    this.treatyFormGroup = this._formBuilder.group({
      treatyCtrl: ['', Validators.required]
    });
    this.typeOfAgreementICJClauseFormGroup = this._formBuilder.group({
      typeOfAgreementICJClauseCtrl: ['', Validators.required]
    });

    this.eIFFormGroup = this._formBuilder.group({
      eIFFormGroupCtrl: ['', Validators.required]
    });
    this.attachmentsFormGroup = this._formBuilder.group({
      attachmentsFormGroupCtrl: ['', Validators.required]
    });
    this.otherTerritoryInformationFormGroup = this._formBuilder.group({
      otherTerritoryInformationFormGroupCtrl: ['', Validators.required]
    });
    this.translationLimitedPublicationFormGroup = this._formBuilder.group({
      translationLimitedPublicationFormGroupCtrl: ['', Validators.required]
    });
  }
}
