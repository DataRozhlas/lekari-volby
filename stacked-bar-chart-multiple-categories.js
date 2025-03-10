// let chartWidth =
//   document.getElementById("vis-stacked-bar-multiple-categories").offsetWidth > 600
//     ? 600
//     : document.getElementById("vis-stacked-bar-multiple-categories").offsetWidth;

Highcharts.chart('vis-stacked-bar-multiple-categories', {
  chart: {
      type: 'bar',
      width: chartWidth, 
      height: 600 // comment out if not necessary
  },
  title: {
      text: 'Zubní lékaři podle věku a pohlaví', 
      useHTML: true,
  },
  subtitle: {
      useHTML: true,
      text: 'Mezi zubaři do pětatřiceti převládají ženy' + '<br><span style="color: #fff">.</span>'
  },
  credits: {
    href : 'https://www.dent.cz/',
    text : 'Zdroj: Česká stomatologická komora'
  },
  xAxis: {
      categories: ['24-29 let', '30-34 let', '35-39 let', '40-44 let', '45-49 let', '50-54 let', '55-59 let', '60-64 let', '65-69 let', '70-99 let']
  },
  yAxis: {
      title: false,
      // title: {
      //     text: 'nepovolené jízdy za návěstidla'
      // },
      min: 0,
      // showFirstLabel: false,
      labels: {
        formatter: function() {
        //   if (this.isLast) {
        //     return this.value + '<br>' +
        //                 '<span class="light-gray-text">jízd za</span>' + '<br>' +
        //                 '<span class="light-gray-text">návěstidla</span>'
        //   } else {
            return this.value + ''
        //   }
        } 
      }
  }, 
  tooltip: {
    valueSuffix: ' ',
    shared: true
  },
  exporting: {
      enabled: false
  },
  legend: {
    reversed: true  
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
          stacking: 'normal'
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
    name: 'muži',
    data :[285, 482, 384, 325, 226, 190, 170, 237, 506, 242],

    color: colors['2019']
  },
  {
    name: 'ženy',
    data :[980, 984, 430, 317, 383, 393, 297, 616, 945, 321],

    color: colors['2020']
    
  },
]
});