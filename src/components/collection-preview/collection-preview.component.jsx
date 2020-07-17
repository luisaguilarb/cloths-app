import React from 'react';
import './collection-preview.styles.scss';
import ColletionItem from '../collection-item/collection-item.component';
function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItem }) => (
            <ColletionItem key={id} {...otherItem} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
