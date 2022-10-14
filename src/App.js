import logo from './logo.svg';
import './App.css';
import {List, CellMeasurer, CellMeasurerCache, InfiniteLoader, AutoSizer} from 'react-virtualized';
import ResizeObserver from 'rc-resize-observer';
import {data} from './data'
import RowContent from './RowContent';
import RowContentLine from './RowContentLine';

const cache = new CellMeasurerCache({
  defaultHeight: 50,
  fixedWidth: 300,
  minWidth: 300,
  defaultWidth: 300
});

function rowRenderer({
  key, // Unique key within array of rows
  parent,
  index, // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  style, // Style object to be applied to row (to position it)
}) {

  return (
    <CellMeasurer
      cache={cache}
      columnIndex={0}
      key={key}
      parent={parent}
      rowIndex={index}
    >
      {({measure, registerChild }) => (
        // 'style' attribute required to position cell (within parent List)
        <div ref={registerChild} style={{...style, backgroundColor: 'pink',  border: '1px solid black'}}>
          
          <ResizeObserver onResize={measure}>
            <RowContentLine rowData={data[index]}/>
          </ResizeObserver>
          
        </div>
      )}
    </CellMeasurer>
  );
}

function App() {

  return (
    <div style={{display: 'flex', flexDirection: 'column', height: 'calc(100vh - 20px)', padding:'10px 20%'}}>
      <div style={{flex: '1 1 auto'}}>
        <AutoSizer>
          {
            ({height, width}) => (
              <List
                style={{margin: 'auto', border: '1px solid gray'}}
                width={width}
                height={height}
                deferredMeasurementCache={cache}
                rowCount={data.length}
                rowHeight={cache.rowHeight}
                rowRenderer={rowRenderer}
              />
            )
          }
        </AutoSizer>
      </div>
    </div>
  );
}

export default App;
