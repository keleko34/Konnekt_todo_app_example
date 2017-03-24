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
