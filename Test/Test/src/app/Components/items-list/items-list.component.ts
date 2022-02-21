import { ArrayType } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ColDef, FirstDataRenderedEvent, GridApi, GridReadyEvent, IFiltersToolPanel, RowGroupingDisplayType, RowNodeTransaction, SideBarDef, ValueFormatterParams, ValueGetterParams } from 'ag-grid-community';
import { from, groupBy, map, mergeMap, observable, Observable, of, toArray, zip } from 'rxjs';
import { AddItemComponent } from 'src/app/DialogBoxes/add-item/add-item.component';

import { Item } from 'src/app/Model/item';

import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
 
  itemsList:Array<Item>=new Array<Item>();

  columnDefs: ColDef[] = [
    { field: 'id',chartDataType: 'series',editable: true },
    { field: 'name',chartDataType: 'category',editable: true},
    { field: 'description',chartDataType: 'category',editable: true},
    { field: 'features' ,chartDataType: 'category',editable: true},
    { field: 'price' ,sortable: true,chartDataType: 'category',editable: true},
    { field: 'keywords',chartDataType: 'category',editable: true},
    { field: 'url',chartDataType: 'category' ,editable: true},
    { field: 'category', rowGroup: true,hide: false,chartDataType: 'category',filter: true ,editable: true},
    { field: 'subcategory', rowGroup: true,hide: false, chartDataType: 'category' ,editable: true},
];

  gridApi!: GridApi;
  api: any;

  public rowSelection = 'single';
 public groupDisplayType: RowGroupingDisplayType = 'singleColumn'; 
 public  groupDefaultExpanded=-1;
 public sideBar: SideBarDef | string | boolean | null = 'filters';
 public defaultColDef: ColDef = {
  flex: 1,
  minWidth: 150,    
  resizable: true,
};


  constructor(public itemService:ItemService,public dialog: MatDialog,) { }

  ngOnInit(): void {

    this.itemService.GetItemsList().subscribe(itemsList=>
          {
             this.itemsList=new MatTableDataSource<Item>(itemsList.products.data.items).data ;                 
          }); 
          
       }   
       
         
      onGridReady(params: GridReadyEvent) {
            this.gridApi = params.api;
        
       
            ((params.api.getToolPanelInstance(
              'filters'
            ) as any) as IFiltersToolPanel).expandFilters();
        
      }

     

      addIndex=1;
      onAddSelected() {
        const dialogRef = this.dialog.open(AddItemComponent, {
          width : '500px' ,
          data : new Item,
       });
   
       dialogRef.afterClosed().subscribe( item => {
          console .log( 'תיבת הדו-שיח נסגרה' );
          const row = item;
          
          this.itemsList.push(item);
          this.gridApi.setRowData(this.itemsList);
          this.addIndex++;
         
       });
            
      
      }
       
         
      
      onUpDateSelected() {
        
        
        const selectedData = this.gridApi.getSelectedRows();
        const res = this.gridApi.applyTransaction({ update: selectedData })!;
      
      }
     


      onRemoveSelected() {
        const selectedData = this.gridApi.getSelectedRows();
        const res = this.gridApi.applyTransaction({ remove: selectedData })!;
        
      }
  
   


}

