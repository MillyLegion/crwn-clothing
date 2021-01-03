import React from 'react';
import { Route } from "react-router-dom";

import CollectionsOverview from '../../components/collections-overview/collections-overview';
// import CollectionPage from '../collection/CollectionPage';

const ShopPage = ({ match }) => {
  // console.log(match);
  return (
    <div className='shop-page'>
      {/* <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
    </div>
  )
};

export default ShopPage;