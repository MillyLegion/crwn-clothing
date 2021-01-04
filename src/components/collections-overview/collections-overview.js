import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { selectCOllectionsPreview } from '../../redux/shop/shop.selectors';
import CollectionsPreview from '../preview-collection/collection-preview';

import './collections-overview.scss';

const CollectionsOverview = ({ collections }) => {
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
  collections: selectCOllectionsPreview
});

export default connect(mapStateToProps)(CollectionsOverview);