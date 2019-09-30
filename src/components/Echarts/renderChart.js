// 修改后
import echarts from './echarts.min';
import toString from '../../util/toString';
import chinaJson from '../map/chinaJson';

var myChart = null;
export default function renderChart(props, isFirst) {
  // const height = props.height || 400;
  const height = `${props.height || 400}px`;
  const width = props.width ? `${props.width}px` : 'auto';
  echarts.registerMap('china', `${JSON.stringify(chinaJson)}`);
  if (isFirst) {
    return `
    document.getElementById('main').style.height = "${height}";
    document.getElementById('main').style.width = "${width}";
    myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(${toString(props.option)});
  `;
  } else {
    return `
    document.getElementById('main').style.height = "${height}";
    document.getElementById('main').style.width = "${width}";
    myChart.clear();
    myChart.resize();
    myChart.setOption(${toString(props.option)});
  `;
  }
}
