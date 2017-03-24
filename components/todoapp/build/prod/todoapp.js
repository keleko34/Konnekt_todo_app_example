if(!K_Components) K_Components = {};
K_Components["todoapp"] = (function(){
/*********************************
 *  todoapp
 *  Created by keleko34
 *  This is the main initiator for the todoapp
 ********************************/

function todoapp()
{
  this.title = "todo";
  
  this.filters.toUpperCase = function(v)
  {
    return v.toUpperCase();
  }
}

/* PROTOTYPES */

todoapp.prototype.k_html = "<!-- todoapp Created by keleko34, This is the main initiator for the todoapp --><div class='todoapp'>  <div class='todoapp__title'>{{title | toUpperCase}}</div>  <div class='todoapp__list'>    <todolist></todolist>  </div></div>";
todoapp.prototype.k_css = "/********************************* *  todoapp *  Created by keleko34 *  This is the main initiator for the todoapp ********************************/.todoapp {    background: #F2F2F2;    width: 100%;    height: 100%;    position: absolute;}.todoapp__title {    font-family: sans-serif;    color: #c8c8c8;    font-size: 40px;    margin: 50px auto 10px auto;    width: 600px;    text-align: center;}.todoapp__list {  width: 600px;  margin: 0px auto;  height: 400px;  background: #ffffff;  border-radius: 3px;  box-shadow: 0px 3px 12px -3px #333;}";
return todoapp;
}());