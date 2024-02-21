import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import { Content } from 'src/app/interfaces/user-response-interface';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FilterOptions } from 'src/app/interfaces/filter-options-interface';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { debounceTime, distinctUntilChanged } from 'rxjs';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, AfterViewInit{
  usersDataSource: MatTableDataSource<Content> =
    new MatTableDataSource<Content>();
  displayedColumns: string[] = [
    'id',
    'nombre',
    'apellido',
    'email',
    'cargo',
    'details',
  ];

  totalUser: number = 0;
  errorRequest: string | null = null;
  searchControl: FormControl = new FormControl();

  filterOptions: FilterOptions = {
    page: 1,
    size: 10,
    keyword: '',
    entryDate: '',
  };

  isLoading: boolean = false;
  pageSizeOptions: number[] = [5,10,25,50];

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private _liveAnnouncer: LiveAnnouncer
  ) {
  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngAfterViewInit(): void {
    this.usersDataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.searchControl.valueChanges
    .pipe(debounceTime(300), distinctUntilChanged())
    .subscribe(() => {
      // Restablece la página al cambiar el filtro.
      this.filterOptions.page = 0;
      this.applyFilter();
    });

    this.loadUser();
  }


  applyFilter() {
    const filterValue = this.searchControl.value.trim().toLowerCase();
    this.filterOptions.keyword = filterValue;
    this.loadUser();
  }
  
  clearSearch() {
    this.searchControl.setValue('');
  }

  loadUser() {
    this.isLoading = true;
    this.userService.getUser(this.filterOptions)?.subscribe(
      (response: any) => {
        this.usersDataSource.data = response.data;
        this.totalUser = response.total;
        this.isLoading = false;
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.usersDataSource.data = [];
        this.errorRequest = 'Error in the search';
        this.snackBar.open(this.errorRequest, 'Close', {
          panelClass: ['snackbar-custom'],
          duration: 2000,
        });
      }
    );
  }

  onPageChange(event: any) {
    this.paginator.pageIndex = event.pageIndex++;
    this.filterOptions.page = event.pageIndex;
    this.filterOptions.size = event.pageSize;
    this.loadUser();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


}
