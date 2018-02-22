import { observable, computed, action } from "mobx";



export default class TodoListModel {
  @observable  islogin=true

 

  @action
  login() {
    this.islogin=false
  }
}