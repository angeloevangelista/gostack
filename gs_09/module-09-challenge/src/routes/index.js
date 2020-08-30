import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '~/pages/SignIn';

import Deliveries from '~/pages/Deliveries';
import DeliveryRegister from '~/pages/Deliveries/DeliveryRegister';
import Deliverymans from '~/pages/Deliverymans';
import DeliverymanRegister from '~/pages/Deliverymans/DeliverymanRegister';
import DeliverymanEdition from '~/pages/Deliverymans/DeliverymanEdition';
import Recipients from '~/pages/Recipients';
import RecipientRegister from '~/pages/Recipients/RecipientRegister';
import Problems from '~/pages/Problems';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />

      <Route exact path="/deliveries" component={Deliveries} isPrivate />
      <Route
        path="/deliveries/register"
        component={DeliveryRegister}
        isPrivate
      />

      <Route exact path="/deliverymans" component={Deliverymans} isPrivate />
      <Route
        path="/deliverymans/register"
        component={DeliverymanRegister}
        isPrivate
      />
      <Route
        path="/deliverymans/edit"
        component={DeliverymanEdition}
        isPrivate
      />

      <Route exact path="/recipients" component={Recipients} isPrivate />
      <Route
        path="/recipients/register"
        component={RecipientRegister}
        isPrivate
      />

      <Route path="/problems" component={Problems} isPrivate />
    </Switch>
  );
}
