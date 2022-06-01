import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {
  todos = [];
  qtdeNot = null;

  constructor(private loading:LoadingController, private serviceService: ServiceService) { }

  ngOnInit() {
    this.presentLoading();
    this.serviceService.getAllTodo().then((res) => {
      this.todos = res.data;
      this.qtdeNot = this.todos.length;
      console.log(this.todos);
    }).finally(() => this.loading.dismiss())
    this.loading.dismiss()

    console.log(this.todos);
  }

  async presentLoading() {
    const loading = await this.loading.create({
      message:  'Aguarde por favor...',
      duration: 2000
    });
    await loading.present();
  }

}
