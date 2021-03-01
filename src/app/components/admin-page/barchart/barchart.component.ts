import {AfterViewInit, Component, OnInit} from '@angular/core';
import { getInstanceByDom, connect } from 'echarts';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements AfterViewInit {
  isShowChart: boolean;

  options = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['Networking', 'Java', 'PMAT', 'Database\n Design', 'Interactive\n application', 'Requirement\n Engineering', 'Management\n for SE'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Counters',
        type: 'bar',
        barWidth: '60%',
        data: [40, 32, 20, 33, 39, 30, 22],
      },
    ],
  };
  constructor() {}

  ngAfterViewInit = () => {
    setTimeout(() => {
      const chartElement1 = document.getElementById('chart1');
      const chart1 = getInstanceByDom(chartElement1);
      connect([chart1]);
    });

    this.isShowChart = false;
  }

  handleOnIsBarChartShow = () => {
    this.isShowChart = !this.isShowChart;
  }
}
