import "./styles/index.css";
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import Card from "./components/Card";
import { useState } from "react";
import { arrayMoveImmutable } from "array-move";

const SortableItem = SortableElement(({value, count}) => (
  <div className={count}>{value}</div>
));

const SortableList = SortableContainer(({items, setitems}) => {
  return (
    <div>
      {items.map((value, index) => (
        <SortableItem key={index} index={index} value={ <Card id={value.id} status={value.status} item={value} setitems={setitems}/>} />
      ))}
    </div>
  );
});

const App = () => {
  const [items, setitems] = useState(
    {
      items:[
        {
          id: '1',
          status:false
        },
        {
          id: '2',
          status:false
        },
        {
          id: '3',
          status:false
        },
        {
          id: '4',
          status:false
        }
      ]
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
      axis="y"
      setitems={setitems}
    />
  );
};

export default App;
