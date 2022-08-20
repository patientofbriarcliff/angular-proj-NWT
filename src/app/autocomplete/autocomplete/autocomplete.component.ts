import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable} from 'rxjs';
import { startWith} from 'rxjs/operators';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  searchTerm = new FormControl();

  cities: string[] = ['Novi Sad', 'Beograd', 'Nis'];

  filteredCities!: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    this.filteredCities = this.searchTerm.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value:string): string[] {
    const filterValue = value.toLowerCase();
    return this.cities.filter(city => city.toLowerCase().includes(filterValue));
  }
}
