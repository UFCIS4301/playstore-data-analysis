// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import {
//   Chart,
//   ArgumentAxis,
//   ValueAxis,
//   BarSeries,
//   Title,
//   Legend
// } from '@devexpress/dx-react-chart-material-ui';
// import { Stack, Animation } from '@devexpress/dx-react-chart';
// import { stackOffsetExpand } from 'd3-shape';

// import { oilProduction as data } from '../demo-data/data-vizualization';

// import { appVersData as appversdata } from '../demo-data/app-vers';

// const Root = (props) => (
//   <Legend.Root {...props} sx={{ display: 'flex', marginTop:'100px', flexDirection: 'row' }} />
// );

// const Label = (props) => <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />;

// const yearsVsVersions = new Map();

// // console.log(appversdata.rows)
// const counts = [];
// appversdata.rows.forEach((ele) => {
//   counts[ele.MIN_ANDROID * 10] = ele.COUNT;

//   yearsVsVersions.set(ele.RELEASED_YEAR, counts);
// });

// // const m2009 = new Map();
// const m2009 = new Map();
// const m2010 = new Map();
// const m2011 = new Map();
// const m2012 = new Map();
// const m2013 = new Map();
// const m2014 = new Map();
// const m2015 = new Map();
// const m2016 = new Map();
// const m2017 = new Map();
// const m2018 = new Map();
// const m2019 = new Map();
// const m2020 = new Map();
// const m2021 = new Map();

// appversdata.rows.forEach((row) => {
//   if (row.RELEASED_YEAR === 2021) {
//     m2021.set(row.MIN_ANDROID, row.COUNT);
//     m2021.set('year', 2021);
//   } else if (row.RELEASED_YEAR === 2020) {
//     m2020.set(row.MIN_ANDROID, row.COUNT);
//     m2020.set('year', 2020);
//   } else if (row.RELEASED_YEAR === 2019) {
//     m2019.set(row.MIN_ANDROID, row.COUNT);
//     m2019.set('year', 2019);
//   } else if (row.RELEASED_YEAR === 2018) {
//     m2018.set(row.MIN_ANDROID, row.COUNT);
//     m2018.set('year', 2018);
//   } else if (row.RELEASED_YEAR === 2017) {
//     m2017.set(row.MIN_ANDROID, row.COUNT);
//     m2017.set('year', 2017);
//   } else if (row.RELEASED_YEAR === 2016) {
//     m2016.set(row.MIN_ANDROID, row.COUNT);
//     m2016.set('year', 2016);
//   } else if (row.RELEASED_YEAR === 2015) {
//     m2015.set(row.MIN_ANDROID, row.COUNT);
//     m2015.set('year', 2015);
//   } else if (row.RELEASED_YEAR === 2014) {
//     m2014.set(row.MIN_ANDROID, row.COUNT);
//     m2014.set('year', 2014);
//   } else if (row.RELEASED_YEAR === 2013) {
//     m2013.set(row.MIN_ANDROID, row.COUNT);
//     m2013.set('year', 2013);
//   } else if (row.RELEASED_YEAR === 2012) {
//     m2012.set(row.MIN_ANDROID, row.COUNT);
//     m2012.set('year', 2012);
//   } else if (row.RELEASED_YEAR === 2011) {
//     m2011.set(row.MIN_ANDROID, row.COUNT);
//     m2011.set('year', 2011);
//   } else if (row.RELEASED_YEAR === 2010) {
//     m2010.set(row.MIN_ANDROID, row.COUNT);
//     m2010.set('year', 2010);
//   } else if (row.RELEASED_YEAR === 2009) {
//     m2009.set(row.MIN_ANDROID, row.COUNT);
//     m2009.set('year', 2009);
//   }
// });

// console.log(m2021);
// const combinedVersdata = [
//   Object.fromEntries(m2020),
// // Object.fromEntries(m2021),
// //   m2013,
// //   m2014,
// //   m2015,
// //   m2016,
// //   m2017,
// //   m2018,
// //   m2019,
// //   m2020,
// //   m2021
// ];
// console.log(combinedVersdata);
// // const obj = Object.fromEntries(m2009)
// // console.log(obj);

// // appversdata.rows.forEach((ele)=>{
// // // const c = new Map([
// // //     ele.MIN_ANDROID, ele.COUNT
// // // ]);
// // const datas  = new Map();

// // datas.set(ele.MIN_ANDROID, ele.COUNT)

// //     // yearsVsVersions[ele.RELEASED_YEAR];
// //     yearsVsVersions.set(ele.RELEASED_YEAR, datas);
// // })
// // console.log(yearsVsVersions)

// export default class Demo extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       // data,
//       combinedVersdata
//     };
//   }

//   render() {
//     // const { data: chartData } = this.state;
//     const { combinedVersdata: chartData } = this.state;

//     // return(
//     //     <Paper>
//     //         <Chart>
//     //         {appversdata.rows.forEach((element) => {
//     //           console.log(element);
//     //         <BarSeries name={MIN_ANDROID} valueField={COUNT} argumentField={RELEASED_YEAR} />;
//     //       })}
//     //         </Chart>

//     //     </Paper>
//     // );

//     return (
//       <Paper>
//         <Chart

//           data={this.state.combinedVersdata}
//           // appversdata={chartData}
//           // data={appversdata.rows}
//         >
//           <ArgumentAxis />
//           <ValueAxis  max={240} />
//           {/* {appversdata.rows.forEach((element) => {
//               console.log(element);
//             <BarSeries name='MIN_ANDROID' valueField='COUNT' argumentField='RELEASED_YEAR' />;
//           })}  */}

//           {/* {appversdata.rows.map((r)=>{
//               if(r.RELEASED_YEAR === 2021){
//                 return(

// <BarSeries name={r.MIN_ANDROID} valueField="COUNT" argumentField="RELEASED_YEAR" />
//                 );
//               }
//               return (
//                   <div/>

//               )
//           })} */}
//           {/*
// <BarSeries name='1' valueField='COUNT' argumentField='RELEASED_YEAR' />; */}
//           {/* <BarSeries name='2' valueField='COUNT' argumentField='RELEASED_YEAR' />; */}
//           <BarSeries
//             name="10"
//             valueField= "10"
//             argumentField="year"
//           />
//           {/* <BarSeries
//             name="6"
//             valueField="6"
//             argumentField="year"
//           /> */}
//           <BarSeries
//             name="7"
//             valueField= "7"
//             argumentField="year"
//           />
//           {/* <BarSeries
//             name="Mexico"
//             valueField="mexico"
//             argumentField="year"
//           />
//           <BarSeries
//             name="Russia"
//             valueField="russia"
//             argumentField="year"
//           /> */}
//           <Animation />
//           <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
//           <Title text="Android Version SUpport Change" />
//           <Stack stacks={[{ series: ['1', '2'] }]} offset={stackOffsetExpand} />
//         </Chart>
//       </Paper>
//     );
//   }
// }

import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend
} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';

import { energyConsumption as data } from '../demo-data/data-vizualization';
import { appVersData as appversdata } from '../demo-data/app-vers';

const Root = (props) => (
  <Legend.Root
    {...props}
    sx={{ display: 'flex', margin: 'auto', justifyContent: 'center', flexDirection: 'row' }}
  />
);
const Label = (props) => <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />;

const m2009 = new Map();
const m2010 = new Map();
const m2011 = new Map();
const m2012 = new Map();
const m2013 = new Map();
const m2014 = new Map();
const m2015 = new Map();
const m2016 = new Map();
const m2017 = new Map();
const m2018 = new Map();
const m2019 = new Map();
const m2020 = new Map();
const m2021 = new Map();

appversdata.rows.forEach((row) => {
  if (row.RELEASED_YEAR === 2021) {
    m2021.set(row.MIN_ANDROID.toString(), row.COUNT);
    m2021.set('year', '2021');
  } else if (row.RELEASED_YEAR === 2020) {
    m2020.set(row.MIN_ANDROID.toString(), row.COUNT);
    m2020.set('year', '2020');
  } else if (row.RELEASED_YEAR === 2019) {
    m2019.set(row.MIN_ANDROID.toString(), row.COUNT);
    m2019.set('year', '2019');
  } else if (row.RELEASED_YEAR === 2018) {
    m2018.set(row.MIN_ANDROID, row.COUNT);
    m2018.set('year', '2018');
  } else if (row.RELEASED_YEAR === 2017) {
    m2017.set(row.MIN_ANDROID, row.COUNT);
    m2017.set('year', '2017');
  } else if (row.RELEASED_YEAR === 2016) {
    m2016.set(row.MIN_ANDROID, row.COUNT);
    m2016.set('year', '2016');
  } else if (row.RELEASED_YEAR === 2015) {
    m2015.set(row.MIN_ANDROID, row.COUNT);
    m2015.set('year', '2015');
  } else if (row.RELEASED_YEAR === 2014) {
    m2014.set(row.MIN_ANDROID, row.COUNT);
    m2014.set('year', '2014');
  } else if (row.RELEASED_YEAR === 2013) {
    m2013.set(row.MIN_ANDROID, row.COUNT);
    m2013.set('year', '2013');
  } else if (row.RELEASED_YEAR === 2012) {
    m2012.set(row.MIN_ANDROID, row.COUNT);
    m2012.set('year', '2012');
  } else if (row.RELEASED_YEAR === 2011) {
    m2011.set(row.MIN_ANDROID, row.COUNT);
    m2011.set('year', '2011');
  } else if (row.RELEASED_YEAR === 2010) {
    m2010.set(row.MIN_ANDROID, row.COUNT);
    m2010.set('year', '2010');
  } else if (row.RELEASED_YEAR === 2009) {
    m2009.set(row.MIN_ANDROID, row.COUNT);
    m2009.set('year', '2009');
  }
});

console.log(m2021);
const combinedVersdata = [
  Object.fromEntries(m2020),
  Object.fromEntries(m2021),
  Object.fromEntries(m2013),
  Object.fromEntries(m2014),
  Object.fromEntries(m2015),
  Object.fromEntries(m2016),
  Object.fromEntries(m2017),
  Object.fromEntries(m2018),
  Object.fromEntries(m2019),
  Object.fromEntries(m2020),
  Object.fromEntries(m2021)
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      combinedVersdata
    };
  }

  render() {
    const { combinedVersdata: chartData } = this.state;

    return (
      <Paper>
        <Chart data={this.state.combinedVersdata}>
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries name="10" valueField="10" argumentField="year" />
          <BarSeries name="8" valueField="8" argumentField="year" />
          <BarSeries name="7" valueField="7" argumentField="year" />
          {/* <BarSeries
            name="Coal"
            valueField="coal"
            argumentField="country"
          />
          <BarSeries
            name="Nuclear"
            valueField="nuclear"
            argumentField="country"
          /> */}
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Title text="Energy Consumption in 2004 (Millions of Tons, Oil Equivalent)" />
          <Stack
            stacks={[{ series: ['10', '8', '7'] }]}
          />
        </Chart>
      </Paper>
    );
  }
}
