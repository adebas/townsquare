(function($) {

Drupal.behaviors.FreeGeekReport = {
  attach: function(context) {
    $('.table', context).tablechart({
      height: 360,
      plotOptions: {
        seriesColors: ['#dddddd'],
        legend: {
            show: false
        },
        seriesDefaults: {
          lineWidth: 4,
          markerOptions: {
            shadow: false,
            color: '#0088cc'
          }
        },
        axes: {
          xaxis: {
            tickRenderer: $.jqplot.CanvasAxisTickRenderer ,
            tickOptions: {
              angle: 90,
                fontSize: '8pt'
              }
          },
          yaxis: {
            numberTicks: 15
          }
        },
        highlighter: {
          show: true,
          showTooltip: true,
          tooltipLocation: 'n'
        }
      }
    }).wrap($('<div class="scrolly-table">'));
  }
};

})(jQuery);
