import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchText:string = ''
@Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>();

 @ViewChild('searchInput') searchInputEl:ElementRef

 
  onSearchTextChanged(){
  
  }



  updateSearchText(){
  // this.searchText=event.target.value
  this.searchText=this.searchInputEl.nativeElement.value
  this.searchTextChanged.emit(this.searchText)
  }

  





}
