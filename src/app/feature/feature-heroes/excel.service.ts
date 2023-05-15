import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

export interface ExcelData {
  sheetName: string,
  data: any
}

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  exportToExcel(excelData: ExcelData[], workbookName: string): void {
    // generate workbook and add the worksheet
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();

    for (let data of excelData) {
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data.data);
      XLSX.utils.book_append_sheet(workbook, ws, data.sheetName);
    }

    // save to file
    XLSX.writeFile(workbook, workbookName + ".xlsx");
  }

}
