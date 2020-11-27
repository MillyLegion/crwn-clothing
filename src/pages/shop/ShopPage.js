import React from 'react';

import SHOP_DATA from './shop-data';
import CollectionsPreview from '../../components/preview-collection/collection-preview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const {collections} = this.state; // destructuring
    return (
      <div>
        {
          collections.map(({ id, ...otherCollectionProps }) => {
            return (
              <CollectionsPreview key={id} {...otherCollectionProps} />
            )
          })
        }
      </div>
    )
  }
}

export default ShopPage;