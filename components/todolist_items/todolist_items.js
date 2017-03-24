/*********************************
 *  todolist_items
 *  Created by keleko34
 *  an item that holds an input and controls for todos
 ********************************/

function todolist_items(node)
{
  var self = this;
  
  /* ATTRIBUTES */
  this.title = "";
  this.complete = false;
  this.hide = false;
  this.favorite = false;
  this.onComplete = function(){};
  this.onDelete = function(){};
  
  /* FILTERS */
  this.filters.isHidden = function(v)
  {
    return (v ? 'none' : 'inherit');
  }
  
  this.filters.statusBackground = function(v)
  {
    v = (typeof v === 'string' ? (v === 'true') : v);
    return (v ? '#5a8451' : '#FFF');
  }
  
  this.filters.statusColor = function(v)
  {
    v = (typeof v === 'string' ? (v === 'true') : v);
    return (v ? '#FFF' : '#888787');
  }
  
  this.filters.placecheck = function(v)
  {
    node.querySelector('input').checked = v;
    return v;
  }
  
  this.filters.activeFav = function(v)
  {
    return (v ? 'active' : '');
  }
  
  this.filters.prependDash = function(v)
  {
    return (v.length !== 0 ? '-'+v : v);
  }
  
  /* EVENTS */
  this.onClickComplete = function(e)
  {
    self.complete = this.checked;
    self.onComplete(self.complete);
  }
  
  this.onClickFavorite = function(e)
  {
    self.favorite = !self.favorite;
  }
  
  this.onClickDelete = function(e)
  {
    self.onDelete(self.title);
  }
}

/* PROTOTYPES */
