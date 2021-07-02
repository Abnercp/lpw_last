import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../Dashboard'
import Totais from '../Total'

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/Total' component={Totais} />
        <Route path='/Total' component={Totais} />
    </Switch>
)

export default Routes 







