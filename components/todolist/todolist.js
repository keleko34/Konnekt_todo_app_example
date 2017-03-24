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