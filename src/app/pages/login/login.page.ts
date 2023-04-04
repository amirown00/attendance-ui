import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isTypePassword: boolean = true;
  
  constructor(
    public modalCtrl: ModalController,
    private route: Router
  ) { }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  login(){
    this.route.navigate(['/home']);
  }
  onChange(){
    this.isTypePassword = !this.isTypePassword;
  }
}

