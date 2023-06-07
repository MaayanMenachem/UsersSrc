import { Component, OnInit } from '@angular/core';
import { User, UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  constructor(private userSer: UsersService) { }

  lUser:any; // undefined מתי מגדירים משתנה 
  sliceUsers:any; //המערך החלקי עם המקומות שאנחנו רוצים
  selectedUserId:any = 0;
  selectedUser:any;
  
//ImgUrl ='assets/Images/Screenshot 2022-07-17 120209.png';
  GetUsers() {
      this.userSer.GetUsers().subscribe((res: any) => {
      this.lUser = res.body;
      this.sliceUsers=this.lUser.slice(0 , 9);
      this.selectedUser=this.sliceUsers[0];
      console.log(this.lUser);
      console.log(res);
    }, (error: string) => {
      console.log("error happened" + error)
    });
  }

  btnArrowRight()
  {
     this.selectedUser = this.sliceUsers[0]; 
     this.selectedUser = this.sliceUsers[this.selectedUserId +1];
     this.selectedUserId = this.selectedUserId + 1;
     console.log(this.selectedUser);    
  }

  btnArrowLeft()
  {
     this.selectedUser = this.sliceUsers[0]; 
     this.selectedUser = this.sliceUsers[this.selectedUserId -1];
     this.selectedUserId = this.selectedUserId - 1;
     console.log(this.selectedUser);    
  }

  btnArrowUp()
  {
     this.selectedUser = this.sliceUsers[1]; 
     this.selectedUser = this.sliceUsers[this.selectedUserId - 3];
     this.selectedUserId = this.selectedUserId - 3;
     console.log(this.selectedUser);    
  }

  btnArrowDown()
  {
     this.selectedUser = this.sliceUsers[1]; 
     this.selectedUser = this.sliceUsers[this.selectedUserId + 3];
     this.selectedUserId = this.selectedUserId + 3;
     console.log(this.selectedUser);    
  }
  
  ngOnInit(): void {
    this.GetUsers();
  }
}
