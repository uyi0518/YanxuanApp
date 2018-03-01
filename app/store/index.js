import { observable, computed, action } from "mobx";



export default class TodoListModel {
  @observable  islogin=false

 

  @action
  login() {
    this.islogin=true
  }
}