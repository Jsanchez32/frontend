import { Component, OnInit } from '@angular/core';
import { UserReponse } from 'src/app/interfaces/one-response-interface';
import { Content } from 'src/app/interfaces/user-response-interface';
import { UserService} from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.css']
})
export class UsersItemComponent implements OnInit {
  isLoading: boolean = false;
  user: Content | null = null;
  userId: number = 0;
  errorRequest: string | null = null;
  users: UserReponse[] = [];
  selectedUser: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private userServices: UserService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = +params['id'];
      this.loadUser();
    });
  }


  loadUser() {
    this.isLoading = true;
    this.userServices.getUserId(this.userId).subscribe(
      (response) => {
        this.user = response;
        this.isLoading = false;
      },
      (error) => {
        this.errorRequest = 'Error Request User not exist';
        this.snackBar.open(this.errorRequest, 'Close', {
          panelClass: ['snackbar-custom'],
          duration: 2000,
        });
      }
    );
  }
}




