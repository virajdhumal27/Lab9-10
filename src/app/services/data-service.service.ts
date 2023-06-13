import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

export interface User {
  user_id?: string;
  username?: string;
  password?: string;
  branch?: string;
  course?: string;
  sgpa?: string;
  ucid?: string;
}

export interface Feedback {
  difficulty?: string;
  time?: string;
  support?: string;
  classroom?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private firestore: Firestore) { }

  loginUser(username: string, password: string): Observable<User[]> {
    const userRef = collection(this.firestore, `users`);
    return collectionData(userRef, { idField: 'user_id' }) as Observable<User[]>;
    
  }

  getUserById(id: string | null): Observable<User> {
    const userDocRef = doc(this.firestore, `users/${id}`);
    return docData(userDocRef, {idField: 'user_id'}) as Observable<User>;
  }

  saveData(user: User) {
    const userRef = doc(this.firestore, `users/${user.user_id}`);
    return updateDoc(userRef, {
      ucid: user.ucid,
      branch: user.branch,
      course: user.course,
      sgpa: user.sgpa
    })
  }

  saveFeedback(feedback: Feedback) {
    const feedbackRef = collection(this.firestore, 'feedback');
    addDoc(feedbackRef, feedback);
  }
}
