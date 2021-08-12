
import { Component, OnInit, ViewChild, Input  } from '@angular/core';
import { ApiService } from '../../../../services/api.service'
import { MatPaginator} from '@angular/material/paginator';
import { MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {

  public characters:any;
  public displayedColumns: string[] = ['id', 'name', 'gender', 'date'];
  public dataSource: any
  @ViewChild(MatPaginator)
  public paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false})
  public sort!: Sort;
  public currentItem:any;


  constructor(private apiService:ApiService, private dialog: MatDialog) {

  }


  ngOnInit(): void {
  

  }

  ngAfterViewInit() {
    this.getAllcharacters();
  }

  character(rowclicked:any){
    this.currentItem = rowclicked
    console.log(this.currentItem) 
  }

  openDialog(templateRef:any, row:any) {
     this.character(row);
     let dialogRef = this.dialog.open(templateRef, {
      width: '45%',
      height: 'auto',
      autoFocus: false
    });
  }

  getAllcharacters() {
   this.apiService.getAllcharacters().subscribe(
      data => {
        console.log(data)
        this.characters = data.results;
        this.dataSource = new MatTableDataSource(this.characters);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error  => {
        console.log(error)
      }
     )
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

