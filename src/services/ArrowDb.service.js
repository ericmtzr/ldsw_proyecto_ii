import firebase from "../firebase";

const db = firebase.ref("/tutorials");

class TutorialDataService {
  getAll() {
    return db;
  }

  create(ArrowDb) {
    return db.push(ArrowDb);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new TutorialDataService();
