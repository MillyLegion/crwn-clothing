import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import {selectCollections} from '../../redux/shop/shop.selectors';
import CollectionsPreview from '../preview-collection/collection-preview';

import './collections-overview.scss';

const CollectionsOverview = ({ collections, match }) => {
  console.log('collections', match);
  return (
    <div className='collection-overview'>
      {
        collections.map(({ id, ...otherCollectionProps }) => {
          return (
            <CollectionsPreview key={id} {...otherCollectionProps} />
          )
        })
      }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);