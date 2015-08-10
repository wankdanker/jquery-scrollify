(function ($, window, document, undefined) {
  'use strict';

  $.fn.extend({
    scrollify: function (settings) {

      return this.each(function () {
        var $table = $(this);
        
        var savedSettings = $table.data('scrollify');
        
        settings = settings || savedSettings;
        
        $table.data('scrollify', settings);
        
        reflow($table);
        
        //if we have saved settings that means we already
        //registerd the resize handler which we don't 
        //need to do again.
        if (savedSettings) {
          return;
        }
        
        $(window).resize(function () { 
          reflow.bind(null, $table)
        });
      });
    }
  });

  function reflow ($table) {
    var settings = $table.data('scrollify');
    
    //reset table to normal display
    $table.find('thead').css({ display : 'table-header-group' });
    $table.find('tbody').css({ display : 'table-row-group' });
    $table.find('tfoot').css({ display : 'table-footer-group' });
    
    //clear manually set widths
    var $headCells = $table.find('thead tr:first').children().width('');
    var $bodyCells = $table.find('tbody tr:first').children().width('');
    var $footCells = $table.find('tfoot tr:first').children().width('');
    
    var bodyColWidth = [];
    var headColWidth = [];
    var footColWidth = [];
    
    //get column widths as they flow naturally
    $bodyCells.each(function() {
      bodyColWidth.push($(this).width());
    });
    
    $headCells.each(function() {
      headColWidth.push($(this).width());
    });
    
    $footCells.each(function() {
      footColWidth.push($(this).width());
    });
    
    //set columns widths manually
    $bodyCells.each(function (i) {
      $(this).width(bodyColWidth[i]);
    });
    
    $headCells.each(function (i) {
      $(this).width(headColWidth[i]);
    });
    
    $footCells.each(function (i) {
      $(this).width(footColWidth[i]);
    });
    
    //enable scrolling
    $table.find('thead, tbody, tfoot').css({ display : 'block' })
    
    var maxHeight = (typeof settings.maxHeight === 'function')
      ? settings.maxHeight($table)
      : settings.maxHeight
      ;
    
    $table.find('tbody').css({
      maxHeight : maxHeight
      , overflow : 'auto'
    });
  }
})(jQuery, window, document);
