import React from 'react'
import {
    // Card,
    TextField,
    MenuItem,
    // IconButton,
    // Icon,
    Grid,
} from '@material-ui/core'
import StatCard3 from './shared/StatCard3'
// import ComparisonChart2 from './shared/ComparisonChart2'
import TopSellingTable from './shared/TopSellingTable'
import RowCards from './shared/RowCards'
import GaugeProgressCard from './shared/GuageProgressCard'
import FollowerCard from './shared/FollowerCard'
import FollowerCard2 from './shared/FollowerCard2'

const Analytics2 = () => {
    return (
        <div className="analytics m-sm-30">
            <div className="flex justify-between items-center items-center mb-6">
                <h3 className="m-0">Overview</h3>
                <TextField
                    defaultValue="1"
                    variant="outlined"
                    size="small"
                    select
                >
                    <MenuItem value="1">This Month</MenuItem>
                    <MenuItem value="2">Last Month</MenuItem>
                    <MenuItem value="3">Six Month</MenuItem>
                    <MenuItem value="4">Last Year</MenuItem>
                </TextField>
            </div>

            <StatCard3 />

            {/* <Card className="mt-5 mb-6" elevation={3}>
                <div className=" px-4 py-3 mb-6 flex justify-between items-center bg-light-gray">
                    <span className="font-medium text-muted">STATISTICS</span>
                    <IconButton size="small">
                        <Icon>more_horiz</Icon>
                    </IconButton>
                </div>
                <ComparisonChart2 height={400} />
            </Card> */}
            <Grid container spacing={3}>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <h4 className="card-title text-muted mb-4">
                        Outreach Program
                    </h4>
                    <RowCards />
                </Grid>
                <Grid item md={4} xs={12}>
                    <GaugeProgressCard />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <TopSellingTable title={'Top Selling Products'} />
                </Grid>
                <Grid item md={4} xs={12}>
                    <FollowerCard />
                    <FollowerCard2 />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <TopSellingTable title={'Top Service Offers'} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Analytics2
