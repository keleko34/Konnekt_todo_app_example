/*********************************
 *  sortitem
 *  Created by keleko34
 *  a button used for sorting the list
 ********************************/

function sortitem()
{
  var self = this;
  
  /* ATTRIBUTES */
  this.title = "";
  this.active = false;
  this.onSort = function(){};
  this.filters.activeText = function(v)
  {
    return (v ? 'active' : 'inactive');
  }
  this.sortClick = function(e)
  {
    self.onSort(self.title);
  };
}

/* PROTOTYPES */
