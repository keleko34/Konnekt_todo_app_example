if(!K_Components) K_Components = {};
K_Components["todolist"] = (function(){
/*********************************
 *  todolist
 *  Created by keleko34
 *  the main list for the todo app
 ********************************/

function todolist(node)
{
  /* scope `this` for events to access data set */
  var self = this;
  
  /* ATTRIBUTES */
  
  /* where each added item is stored */
  this.items = [];
  this.complete = 0;
  this.total = 0;
  
  /* current input text */
  this.text = "";
  
  /* ERRORS */
  this.isError = false;
  this.error = "";
  
  /* the sorting items */
  this.sorters = [
    {title:'All',active:true,onSort:this.sort},
    {title:'Uncomplete',active:false,onSort:this.onSort},
    {title:'Complete',active:false,onSort:this.onSort},
    {title:'Ascending',active:false,onSort:this.onSort},
    {title:'Descending',active:false,onSort:this.onSort}
  ];
  
  /* EVENTS */
  
  /* each sort button fires this */
  this.onSort = function(sorter)
  {
    for(var x=0,len=self.sorters.length;x<len;x++)
    {
      self.sorters[x].active = (self.sorters[x].title === sorter);
    }
    self[sorter](self.items);
  }
  
  /* this input keyup fires this */
  this.onAdd = function(e)
  {
    var keyCode = (e.which || e.keyCode);
    
    if(self.items.map(function(item){return item.title;}).indexOf(self.text) !== -1)
    {
      self.isError = true;
      self.error = "This already exists!";
    }
    else
    {
      self.isError = false;
    }
    
    if(keyCode === 13)
    {
      if(!self.isError)
      {
        self.items.push({
          title:self.text,
          hide:false,
          complete:false,
          onComplete:self.onComplete,
          onDelete:self.onDelete
        });
        self.total += 1;
        self.text = "";
      }
    }
  }
  
  /* when an item becomes complete */
  this.onComplete = function(v)
  {
    self.complete += (v ? 1 : -1);
  }
  
  this.onDelete = function(title)
  {
    self.items.splice(self.items.map(function(item){return item.title;}).indexOf(title),1);
  }
}

/* PROTOTYPES */
todolist.prototype.All = function(items)
{
  for(var x=0,len=this.items.length;x<len;x++)
  {
    this.items[x].hide = false;
  }
}

todolist.prototype.Ascending = function(items)
{
  for(var x=0,len=this.items.length;x<len;x++)
  {
    this.items[x].hide = false;
  }
  items.sort(function(a,b){
    return (a.title > b.title ? -1 : 1);
  });
}

todolist.prototype.Descending = function(items)
{
  for(var x=0,len=this.items.length;x<len;x++)
  {
    this.items[x].hide = false;
  }
  items.sort(function(a,b){
    return (a.title > b.title ? 1 : -1);
  });
}

todolist.prototype.Uncomplete = function(items)
{
  for(var x=0,len=this.items.length;x<len;x++)
  {
    this.items[x].hide = (!!this.items[x].complete);
  }
}

todolist.prototype.Complete = function(items)
{
  for(var x=0,len=this.items.length;x<len;x++)
  {
    this.items[x].hide = (!this.items[x].complete);
  }
}
todolist.prototype.k_html = "<!-- todolist Created by keleko34, the main list for the todo app --><div class='todolist'>  <div class='todolist__bar'>    <div class='todolist__bar__status'>{{complete}}/{{total}} completed</div>    <div class='todolist__bar__sort'>{{for sorters loop sortitem}}</div>  </div>  <div class='todolist__add'>    <img class='todolist__add__icon' src='assets/img/icons/edit.svg' />    <input class='todolist__add__input' type='text' placeholder='What needs to be done?' value='{{text}}' onkeyup='{{onAdd}}' />  </div>  <div class='todolist__items'>{{for items loop todolist_items}}</div></div>";
todolist.prototype.k_css = "/********************************* *  todolist *  Created by keleko34 *  the main list for the todo app ********************************/.todolist {}.todolist__bar {  height: 25px;  border-bottom: 2px solid #e9e9e9;  font-family: sans-serif;  color: #888787;  font-size: 14px;  margin-left: 10px;  margin-right: 10px;}.todolist__bar__status {  line-height: 25px;  margin-left: 10px;}.todolist__add {  height: 40px;  position: relative;}.todolist__add__icon {  height: 24px;  position: absolute;  left: 19px;  top: 8px;}.todolist__add__input {  height: 40px;  width: calc(100% - 62px);  margin: 0px 10px;  padding: 0;  outline: transparent;  border: none;  padding-left: 42px;  line-height: 40px;  font-family: sans-serif;  font-size: 16px;  color: #B1A9A9;}";
return todolist;
}());