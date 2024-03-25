import React from 'react';

export default class CollectionList extends React.Component {
    render() {
      return (
        <div className="collection-list">
          <h1>Collection List</h1>
          <div>
            <button className="collection-button">Tags</button>
            <button className="collection-button">Tag Indexes</button>
            <button className="collection-button">Sources</button>
            <button className="collection-button">Files</button>
          </div>
        </div>
      );
    }
  };
  
// Example usage: <CollectionList />