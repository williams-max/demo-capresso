import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { DesktopDatePicker } from '@mui/x-date-pickers';
//import Campaigns from './shared/Campaigns';
//import DoughnutChart from './shared/Doughnut';
//import RowCards from './shared/RowCards';
//import StatCards from './shared/StatCards';
//import StatCards2 from './shared/StatCards2';
//import TopSellingTable from './shared/TopSellingTable';
//import UpgradeCard from './shared/UpgradeCard';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginRight: '.5rem',
  textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));

const H4 = styled('h4')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginBottom: '16px',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
}));

const Analytics = () => {
  const { palette } = useTheme();

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <div>funcionando</div>

          {/*<LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker sx={{ width: '190px', height: '10px' }}
              onChange={(newValue: any) => {
              }}
              slotProps={{ textField: { size: 'small' } }}

            />
          </LocalizationProvider>*/}
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Analytics;

/*
 <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <StatCards />
            <TopSellingTable />
            <StatCards2 />

            <H4>Ongoing Projects</H4>
            <RowCards />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Traffic Sources</Title>
              <SubTitle>Last 30 days</SubTitle>

              <DoughnutChart
                height="300px"
                color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
              />
            </Card>

            <UpgradeCard />
            <Campaigns />
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
*/