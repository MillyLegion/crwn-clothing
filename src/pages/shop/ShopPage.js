import React from 'react';
import { Route } from "react-router-dom";

import CollectionsOverview from '../../components/collections-overview/collections-overview';
// import CollectionPage from '../collection/CollectionPage';

import { firestore, convertCollectionsSnapshot } from '../../firebase/firebase.utils';

class ShopPage extends React.Component {
  // unsubscribe will be unmounted once the page is closed
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    // whenewhere code updates or render this code will activate
    collectionRef.onSnapshot(async snapshot => {
      // console.log('snapshot', snapshot);
      convertCollectionsSnapshot(snapshot);
    })
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        {/* <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
      </div>

    )
  }
}

export default ShopPage;