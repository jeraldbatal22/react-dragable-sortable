import "./styles/index.css";
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import Card from "./components/Card";
import { useState } from "react";
import { arrayMoveImmutable } from "array-move";

const SortableItem = SortableElement(({value}) => (
  <div>{value}</div>
));

const SortableList = SortableContainer(({items}) => {
  return (
    <div>
      {items.map((value, index) => (
        <SortableItem key={index} index={index} value={value} />
      ))}
    </div>
  );
});

const App = () => {
  const [items, setitems] = useState(
    {
      items:[<Card title="1"/>, <Card title="2"/>, <Card title="3"/>, <Card title="4"/>]
    }
  )
    
  const onSortEnd = ({oldIndex, newIndex}) => {
    setitems(({items}) => ({
      items: arrayMoveImmutable(items, oldIndex, newIndex),
    }));
  };

  return (
    <SortableList 
      items={items.items} 
      onSortEnd={onSortEnd} 
      distance={1}
    />
  );
};

export default App;
