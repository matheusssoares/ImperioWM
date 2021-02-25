import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  constructor(
    private db: AngularFirestore
  ) { 
   
  }

  getdata(collection: string) {
    return this.db.collection(`${collection}`, ref => ref.orderBy('nome', 'asc')).valueChanges();
  }

  gerarKey() {
    return this.db.createId();
  }

  cadastrar(collection, dados) {
    dados.key = this.gerarKey();
    return this.db.collection(collection).doc(dados.key).set(dados)

  }

  getdataById(collection, id) {
    return this.db.collection(`${collection}`).doc(`${id}`).valueChanges();
  }
}
