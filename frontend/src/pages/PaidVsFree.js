import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  AreaSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
Legend
} from '@devexpress/dx-react-chart-material-ui'; 
import { Stack, Animation } from '@devexpress/dx-react-chart';


import { paidVsFreeData as paidvsfreedata } from '../demo-data/paid-vs-free';

const Root = props => (
    <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
  );
  const Label = props => (
    <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />
  );
  const Item = (props) => <Legend.Item {...props} sx={{ flexDirection: 'column-reverse' }} />;



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

    paidvsfreedata.rows.forEach((row) => {
      if (row.RELEASED_YEAR === 2021) {
        m2021.set("Free", row.FREE);
        m2021.set("Paid", row.PAID);
        m2021.set('year', '2021');
      } else if (row.RELEASED_YEAR === 2020) {
        m2020.set("Free", row.FREE);
        m2020.set("Paid", row.PAID);
      
        m2020.set('year', '2020');
      } else if (row.RELEASED_YEAR === 2019) {
        m2019.set("Free", row.FREE);
        m2019.set("Paid", row.PAID);
     
        m2019.set('year', '2019');
      } else if (row.RELEASED_YEAR === 2018) {
        m2018.set("Free", row.FREE);
        m2018.set("Paid", row.PAID);
   
        m2018.set('year', '2018');
      } else if (row.RELEASED_YEAR === 2017) {
        m2017.set("Free", row.FREE);
        m2017.set("Paid", row.PAID);
        m2017.set('year', '2017');
      } else if (row.RELEASED_YEAR === 2016) {
        m2016.set("Free", row.FREE);
        m2016.set("Paid", row.PAID);
        m2016.set('year', '2016');
      } else if (row.RELEASED_YEAR === 2015) {
        m2015.set("Free", row.FREE);
        m2015.set("Paid", row.PAID);
        m2015.set('year', '2015');
      } else if (row.RELEASED_YEAR === 2014) {
        m2014.set("Free", row.FREE);
        m2014.set("Paid", row.PAID);
        m2014.set('year', '2014');
      } else if (row.RELEASED_YEAR === 2013) {
        m2013.set("Free", row.FREE);
        m2013.set("Paid", row.PAID);
        m2013.set('year', '2013');
      } else if (row.RELEASED_YEAR === 2012) {
        m2012.set("Free", row.FREE);
        m2012.set("Paid", row.PAID);
        m2012.set('year', '2012');
      } else if (row.RELEASED_YEAR === 2011) {
        m2011.set("Free", row.FREE);
        m2011.set("Paid", row.PAID);
        m2011.set('year', '2011');
      } else if (row.RELEASED_YEAR === 2010) {
        m2010.set("Free", row.FREE);
        m2010.set("Paid", row.PAID);
        m2010.set('year', '2010');
      } else if (row.RELEASED_YEAR === 2009) {
        m2009.set("Free", row.FREE);
        m2009.set("Paid", row.PAID);
        m2009.set('year', '2009');
      }

    });

    const combinedVersdata = [
      //   Object.fromEntries(m2009),
      // Object.fromEntries(m2010),
      Object.fromEntries(m2011),
      Object.fromEntries(m2012),
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
    
    
console.log(combinedVersdata);
export default function PaidVsFree() {
   
    return (
      <Paper>
        <Chart
          data={combinedVersdata}
        >
         
          <ArgumentAxis />
          <ValueAxis max={8000000}  />

          <AreaSeries
            name="Free"
            valueField="Free"
            argumentField="year"
          />
          <AreaSeries
            name="Paid"
            valueField="Paid"
            argumentField="year"
          />
        
          
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} itemComponent={Item} />
          <Title text="Paid Vs Free Applications launched over the years" />

        </Chart>
      </Paper>
    );

}
