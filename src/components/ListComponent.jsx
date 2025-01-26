import PropTypes from 'prop-types';
import { memo, useState } from 'react';
import { RenderVisualizer } from './RenderVisualizer';

export function ListComponent() {
  const [items, setItems] = useState([1, 2, 3]);

  const addItem = () => {
    setItems((prevItems) => [...prevItems, prevItems.length + 1]);
  };

  const shuffleItems = () => {
    setItems([...items].reverse());
  };

  return (
    <div className="container">
      <h2>List Updates</h2>
      <p>Watch how list items re-render when new items are added</p>

      <RenderVisualizer>
        <h4>List Parent Component</h4>
        <button onClick={addItem} style={{ marginRight: 8 }}>
          Add Item
        </button>
        <button onClick={shuffleItems}>Shuffle Items</button>

        <ul>
          {items.map((item) => (
            <MemoizedListItem key={item} value={item} />
          ))}
        </ul>
      </RenderVisualizer>
    </div>
  );
}

ListItem.propTypes = {
  value: PropTypes.number.isRequired,
};
function ListItem({ value }) {
  return (
    <li>
      <h4>Memoized List Item Component</h4>
      <p>
        Item <b>{value}</b>
      </p>
    </li>
  );
}

const MemoizedListItem = memo(ListItem);
