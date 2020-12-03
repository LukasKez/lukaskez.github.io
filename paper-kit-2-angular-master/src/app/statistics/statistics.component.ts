import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chartOptions: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      name: 'Month',
    },
    yAxis: {
      type: 'value',
      name: 'Reactites'
    },
    series: [
      {
        data: [0, 157, 230, 350, 650, 600, 781, 901, 934, 1290, 1100, 1320],
        type: 'line',
        areaStyle: {},
      },
    ],
  };

  chartOptions2: EChartsOption = {
    color: 'indigo',
    xAxis: {
      type: 'category',
      data: ['Mars', 'Uranus', 'Moon', 'Mercury', 'Pluto'],
      name: 'Planet',
    },
    yAxis: {
      type: 'value',
      name: 'Times booked'
    },
    series: [
      {
        data: [35, 15, 21, 7, 18],
        type: 'bar',
      },
    ],
  };
}
