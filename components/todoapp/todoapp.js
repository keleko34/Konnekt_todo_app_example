/*********************************
 *  todoapp
 *  Created by keleko34
 *  This is the main initiator for the todoapp
 ********************************/

function todoapp()
{
  var self = this;
  /* the main title */
  this.title = "todo";
  this.fontSize = 40;
  
  this.multiple = true;
  
  /* a simple filter that returns uppercase string */
  this.filters.toUpperCase = function(v)
  {
    return v.toUpperCase();
  }
  
  this.filters.addExC = function(v)
  {
    return v+"!!!!!";
  }
  
  this.makebigger = function()
  {
    self.fontSize += 5;
  }
}

/* PROTOTYPES */
