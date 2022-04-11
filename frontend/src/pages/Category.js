import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  AreaSeries,
  LineSeries,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
Legend
} from '@devexpress/dx-react-chart-material-ui'; 
import { ValueScale, Stack, Animation } from '@devexpress/dx-react-chart';


import { categoryData as categorydata } from '../demo-data/category';

const Root = props => (
    <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
  );
  const LabelA = props => (
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

    // Education
    // Entertainment
    // Casual
    // Business
    // Productivity
    // Music and Audio
    // Tools
    // Arcade
    // Lifestyle
    // Puzzle
    // Books and Reference
    // Personalization
m2009.set("Education", 0);
m2009.set("Entertainment", 0);
m2009.set("Casual", 0)
m2009.set("Business", 0)
m2009.set("Productivity", 0)
m2009.set("Music and Audio", 0)
m2009.set("Tools", 0)
m2009.set("Arcade", 0)
m2009.set("Lifestyle", 0)
m2009.set("Puzzle", 0)
m2009.set("Books and Reference", 0)
m2009.set("Personalization", 0)




    categorydata.rows.forEach((row) => {
      if (row.RELEASED_YEAR === 2021) {
        m2021.set("Category", row.CATEGORY);
        m2021.set("Category Count", row.CATEGORY_COUNT);
        m2021.set("Total", row.TOTAL_APPLICATION);
        m2021.set("Rank", row.RANK);
        m2021.set('year', '2021');
      } else if (row.RELEASED_YEAR === 2020) {
        m2020.set("Category", row.CATEGORY);
        m2020.set("Category Count", row.CATEGORY_COUNT);
        m2020.set("Total", row.TOTAL_APPLICATION);
        m2020.set('year', '2020');
      } else if (row.RELEASED_YEAR === 2019) {
        m2019.set("Category", row.CATEGORY);
        m2019.set("Category Count", row.CATEGORY_COUNT);
        m2019.set("Total", row.TOTAL_APPLICATION);
        m2019.set('year', '2019');
      } else if (row.RELEASED_YEAR === 2018) {
        m2018.set("Category", row.CATEGORY);
        m2018.set("Category Count", row.CATEGORY_COUNT);
        m2018.set("Total", row.TOTAL_APPLICATION);
        m2018.set('year', '2018');
      } else if (row.RELEASED_YEAR === 2017) {
        m2017.set("Category", row.CATEGORY);
        m2017.set("Category Count", row.CATEGORY_COUNT);
        m2017.set("Total", row.TOTAL_APPLICATION);
        m2017.set('year', '2017');
      } else if (row.RELEASED_YEAR === 2016) {
        m2016.set("Category", row.CATEGORY);
        m2016.set("Category Count", row.CATEGORY_COUNT);
        m2016.set("Total", row.TOTAL_APPLICATION);
        m2016.set('year', '2016');
      } else if (row.RELEASED_YEAR === 2015) {
        m2015.set("Category", row.CATEGORY);
        m2015.set("Category Count", row.CATEGORY_COUNT);
        m2015.set("Total", row.TOTAL_APPLICATION);
        m2015.set('year', '2015');
      } else if (row.RELEASED_YEAR === 2014) {
        m2014.set("Category", row.CATEGORY);
        m2014.set("Category Count", row.CATEGORY_COUNT);
        m2014.set("Total", row.TOTAL_APPLICATION);
        m2014.set('year', '2014');
      } else if (row.RELEASED_YEAR === 2013) {
        m2013.set("Category", row.CATEGORY);
        m2013.set("Category Count", row.CATEGORY_COUNT);
        m2013.set("Total", row.TOTAL_APPLICATION);
        m2013.set('year', '2013');
      } else if (row.RELEASED_YEAR === 2012) {
        m2012.set("Category", row.CATEGORY);
        m2012.set("Category Count", row.CATEGORY_COUNT);
        m2012.set("Total", row.TOTAL_APPLICATION);
        m2012.set('year', '2012');
      } else if (row.RELEASED_YEAR === 2011) {
        m2011.set("Category", row.CATEGORY);
        m2011.set("Category Count", row.CATEGORY_COUNT);
        m2011.set("Total", row.TOTAL_APPLICATION);
        m2011.set('year', '2011');
      } else if (row.RELEASED_YEAR === 2010) {
        m2010.set("Category", row.CATEGORY);
        m2010.set("Category Count", row.CATEGORY_COUNT);
        m2010.set("Total", row.TOTAL_APPLICATION);
        m2010.set('year', '2010');
      } else if (row.RELEASED_YEAR === 2009) {
        m2009.set("Category", row.CATEGORY);
        m2009.set("Category Count", row.CATEGORY_COUNT);
        m2009.set("Total", row.TOTAL_APPLICATION);
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

    const Label = symbol => (props) => {
      const { text } = props;
      return (
        <ValueAxis.Label
          {...props}
          text={text + symbol}
        />
      );
    };
    
    const PriceLabel = Label(' $');
    const modifyCatCountDomain = domain => [domain[0], 100000];
const modifyTotalDomain = () => [0, 10000000]
console.log(combinedVersdata);
export default function PaidApps() {
   
    return (
      <Paper>
        <Chart
          data={combinedVersdata}
        >
           <ValueScale name="Total" modifyDomain={modifyTotalDomain} />
                   <ValueScale name="Category Count" modifyDomain={modifyCatCountDomain} />
         
          <ArgumentAxis />
          <ValueAxis scaleName='Category Count'  />
          <ValueAxis
            scaleName="Total"
            position="right"
            labelComponent={PriceLabel}
          />

          <BarSeries
            name="Category Count"
            valueField="Category Count"
            argumentField="year"
            // color='orange'
            scaleName='Category Count'
          />
          <LineSeries
            name="Total"
            valueField="Total"
            argumentField="year"
           scaleName='Total'
          />
          
          {/* <Animation /> */}
          {/* <Stack
            stacks={[
              { series: ['Paid', 'Price'] },
            ]}
          /> */}
         <Legend position="bottom" rootComponent={Root} labelComponent={LabelA} itemComponent={Item} />
          <Title text="Paid Application Launches and Avg Price over the years" />

        </Chart>

      
      </Paper>
    );

}