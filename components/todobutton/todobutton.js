/*********************************
 *  todobutton
 *  Created by keleko34
 *  a button for todo items
 ********************************/

function todobutton()
{
  /* ATTRIBUTES */
  this.isActive = false;
  this.title = "";
  this.filters.activeText = function(v)
  {
    return (v ? 'active' : 'inactive');
  }
  this.onclick = function(){};
}

/* PROTOTYPES */
