import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { environment } from "../../environments/environment";
import 'firebase/compat/firestore';

firebase.initializeApp(environment.firebase)
const db = firebase.firestore();

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor() { }

  getAllPackages(){
    return db.collection("Packages")
  }
}
