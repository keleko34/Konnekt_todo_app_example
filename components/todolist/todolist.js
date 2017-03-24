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
  
  /* EVENTS */
  
  /* each sort button fires this */
  this.onSort = function(sorter)
  {
    var sorts = ['Descending','Ascending'];
    for(var x=0,len=self.sorters.length;x<len;x++)
    {
      if(sorts.indexOf(sorter) === -1 && sorts.indexOf(self.sorters[x].title) === -1)
      {
        self.sorters[x].active = (self.sorters[x].title === sorter);
      }
      else if(sorts.indexOf(sorter) !== -1 && sorts.indexOf(self.sorters[x].title) !== -1)
      {
        self.sorters[x].active = (self.sorters[x].title === sorter);
      }
    }
    self[sorter](self.items);
  }
  
  /* this input keyup fires this */
  this.onAdd = function(e)
  {
    var keyCode = (e.which || e.keyCode),
        itemtitles = self.items.map(function(item){return item.title;});
    self.isError = false;
    
    if(keyCode === 13)
    {
      if(itemtitles.indexOf(self.text) !== -1)
      {
        self.isError = true;
        self.error = "This already exists!";
      }
      if(!self.isError)
      {
        self.items.push({
          title:self.text,
          hide:false,
          complete:false,
          favorite:false,
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
    var id = self.items.map(function(item){return item.title;}).indexOf(title);
    if(self.items[id].complete) self.complete -= 1;
    self.items.del(id);
    self.total -= 1;
  }
  
  /* the sorting items */
  this.sorters = [
    {title:'All',active:true,onSort:this.onSort},
    {title:'Todo',active:false,onSort:this.onSort},
    {title:'Completed',active:false,onSort:this.onSort},
    {title:'Favorites',active:false,onSort:this.onSort},
    {title:'Ascending',active:false,onSort:this.onSort},
    {title:'Descending',active:false,onSort:this.onSort}
  ];
  
  this.filters.toDisplay = function(v)
  {
    return (!v ? 'none' : 'inherit');
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
  items.sort(function(a,b){
    return (a.title > b.title ? -1 : 1);
  });
}

todolist.prototype.Descending = function(items)
{
  items.sort(function(a,b){
    return (a.title > b.title ? 1 : -1);
  });
}

todolist.prototype.Todo = function(items)
{
  for(var x=0,len=this.items.length;x<len;x++)
  {
    this.items[x].hide = (!!this.items[x].complete);
  }
}

todolist.prototype.Completed = function(items)
{
  for(var x=0,len=this.items.length;x<len;x++)
  {
    this.items[x].hide = (!this.items[x].complete);
  }
}

todolist.prototype.Favorites = function(items)
{
  for(var x=0,len=this.items.length;x<len;x++)
  {
    this.items[x].hide = (!this.items[x].favorite);
  }
}