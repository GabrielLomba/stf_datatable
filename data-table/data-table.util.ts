import { Injectable } from "@angular/core";
import { DataColumnComponent } from "../data-column/data-column.component";


@Injectable()
export class DataTableUtil {
    columns: DataColumnComponent[] = [];
    datatable: any[] = [];
    homeData: any[] = [];

    addColumn(column: any){
        this.columns.push(column);
    }    

    buildDataTableProperties(dataList: any[]) {  
        this.clearDataTable();
        let fullColumn = {header: "", sortable: false, columnType: "", isVisible: true, columnIcon: "", iconField: "", values: [], icons: []};
        
        this.columns.forEach(column => { 
          fullColumn.header = column.columnHeader;
          fullColumn.columnType = column.columnType;
          fullColumn.sortable = column.sortable;
          fullColumn.isVisible = column.isVisible;
          fullColumn.columnIcon = column.columnIcon;
          
          dataList.forEach(data => {
            fullColumn.values.push(data[column.columnField]);
          });

          dataList.forEach(data => {
            fullColumn.icons.push(data[column.iconField]);
          });

          this.datatable.push(fullColumn);
          fullColumn = {header: "", sortable: false, columnType: "", isVisible: true, columnIcon: "",  iconField: "", values: [], icons: []};
        });
        
        return this.datatable;
    }

    clearDataTable(){
        this.datatable = [];
    }
}