Highcharts.chart('vis-bar-multiple-categories', {
  chart: {
      type: 'bar',
      width: chartWidth, 
      height: 600 // comment out if not necessary
  },
  title: {
      text: 'Bar Chart Multiple Categories', 
      useHTML: true,
  },
  subtitle: {
      useHTML: true,
      text: 'Meziroční srovnání nepovolených jízd za návěstidla po měsících'
              // + '<br><span style="color: #fff">.</span>',
  },
  credits: {
    href : 'http://www.dicr.cz/statistiky-mimoradnych-udalosti',
    text : 'Zdroj: Drážní inspekce'
  },
  xAxis: {
      categories: ['Praha', 'Jihomoravský', 'Olomoucký', 'Průměr ČR', 'Karlovarský', 'Královéhradecký', 'Plzeňský', 'Moravskoslezský', 'Jihočeský', 'Pardubický', 'Vysočina', 'Zlínský', 'Liberecký', 'Ústecký', 'Středočeský'],
  },
  yAxis: {
      title: {
          text: 'nepovolené jízdy za návěstidla'
      },
      max: 50 // 
      // showFirstLabel: false,
      // labels: {
        // formatter: function() {
        //   if (this.isLast) {
        //     return this.value + '<br>' +
        //                 '<span class="light-gray-text">jízd za</span>' + '<br>' +
        //                 '<span class="light-gray-text">návěstidla</span>'
        //   } else {
        //     return this.value
        //   }
        // } 
      // }
  }, 
  tooltip: {
    valueSuffix: ' jízd',
    shared: true
  },
  exporting: {
      enabled: false
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: false
          },
          enableMouseTracking: true,
          pointPadding: 0.1,
          groupPadding: 0.15,
          borderWidth: 0,
      }
  },
  series: [
  /*{ Mockup
    name: 'název řady',
    data: [44, 38, 48, 42, 69, 79, 88, 80, 58, 43, 49, 50],
    color: colors.avg,  // pokud chceš nastavit spešl barvu pro sérii dat
    lineWidth: 2, 
    dashStyle: 'ShortDash',
    zIndex: 8000,
    marker: {
      symbol: 'circle', 
      radius: 2
    }
  },*/
  {
    name: '2018',
    data :[6.72, 4.51, 4.29, 4, 3.95, 3.95, 3.91 3.78, 3.52, 3.49, 3.37, 3.36, 3.29, 3.25, 2.68],
    color: colors['2018']
  },
  {
    name: '2017',
    data :[6.72, 4.46, 4.11, 3.97, 4.03, 3.86, 3.96, 3.72, 3.53, 3.51, 3.37, 3.26, 3.24, 3.13, 2,76],
    color: colors['2019']
    
  },
]
});