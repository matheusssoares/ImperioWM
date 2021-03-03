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

  setUpdate(collection, id, data) {
    return this.db.collection(collection).doc(id).update(data);
  }

  atualizar(collection, id, data) {
    return new Promise((resolve, reject) => {
      this.setUpdate(collection, id, data).then(() => {
        resolve(true);
      }).catch((e) => {
        console.log(e);

        reject(false);
        
      })
    })
  }

  receberDataId(collection, id) {
    return new Promise((resolve) => {
      this.getdataById(collection, id).subscribe((data: any) => {
        resolve(data);
      })
    })
  }
}
