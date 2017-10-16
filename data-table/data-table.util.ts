export class DataTableUtil {
    columns: any[] = [];
    datatable: any[] = [];
    homeData: any[] = [];

    addColumnByEvent(column: any){
        this.columns.push(column);
    }
    

    buildDataTableProperties(dataList: any[]) {  
        
        let fullColumn = {header: "", sortable: false, columnType: "", isVisible: true, columnIcon: "", values: []};
    
        this.columns.forEach(column => { 
          fullColumn.header = column.header;
          fullColumn.columnType = column.columnType;
          fullColumn.sortable = column.sortable
          fullColumn.isVisible = column.isVisible;
          fullColumn.columnIcon = column.columnIcon
          dataList.forEach(data => {
            fullColumn.values.push(data[column.field]);
          });
          this.datatable.push(fullColumn);
          fullColumn = {header: "", sortable: false, columnType: "", isVisible: true, columnIcon: "", values: []};
        });

        return this.datatable;
    }
}