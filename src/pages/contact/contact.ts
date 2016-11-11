import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactService } from '../../app/services/contact.service';
import { Curso } from '../../app/models/curso';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [ContactService]
})
export class ContactPage implements OnInit{
  public titulo: string = 'Escolaridade';
  public cursos: Curso[];


  constructor(public navCtrl: NavController, public contactService: ContactService) {
  }

  ngOnInit() {
    this.cursos = this.contactService.carregarCursos();
  }

}
