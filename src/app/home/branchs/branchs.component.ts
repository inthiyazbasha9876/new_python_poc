import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/shared/shared/services/service.service';

@Component({
  selector: 'app-branchs',
  templateUrl: './branchs.component.html',
  styleUrls: ['./branchs.component.scss']
})
export class BranchsComponent implements OnInit {
  id
  role
  constructor(private service:ServiceService) { 
    this.id=localStorage.getItem('id')
    this.role=localStorage.getItem('role')

    this.getBranchList()
  }

  branchForm = new FormGroup({
    branchName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  branchdataList
  ngOnInit(): void {
  }


  createBranch(){

    console.log(this.branchForm.value);
    let dummy=this.branchForm.value
    let date=new Date()
    let obj={
      "branchName":dummy.branchName,
      "address":dummy.address,
      "created_Date":date,
      "flage":true
    }
    this.service.branchcrt(obj).subscribe(res=>{
      console.log(res);
      
    })
  }

  getBranchList(){
    this.service.getbranchdata().subscribe(res=>{
      this.branchdataList=res
      console.log(this.branchdataList);
      
    })
  }

}
