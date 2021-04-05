import './App.css';
import DataTable from './DataTable/DataTable';

function App() {
  const tableColumns = [
    {
      key: 'title',
      sortable: true,
      title: (
        <div className="custom-header">
          <span>bla bla bla fixedColumnsAndHeaderRtl</span>
          <button onClick={() => { infoHandler('title') }}>!</button>
          <button onClick={() => { infoHandler('title') }}>!</button>
        </div>
      ),
      fixed: 'left',
      customSortHandler: (columnIndex, columnKey) => {
        console.log('custom sort', columnIndex, columnKey)
      },
      onSort: ((columnIndex, columnKey, sortBy) => {
        console.log(columnIndex, columnKey, sortBy);
      })
    },
    {
      title: 'header fixedColumnsAndHeaderRtl',
      key: 'director',
    },
    {
      title: 'Genres',
      key: 'genres',
    },
    {
      title: 'Header',
      key: 'header',
    },
    {
      title: 'Header2',
      key: 'header2',
    },
    {
      title: 'Header3',
      key: 'header3',
    },
    {
      title: 'Header4',
      key: 'header4',
      sortable: true,
      customColumnLogic: (cellValue) => {
        if (cellValue > 0) {
          return <span className="custom-red">{cellValue}</span>
        } else {
          return <span className="custom-green">{cellValue}</span>
        }
      },
      fixed: 'right'
    },

  ];


  const data = [
    {
      'title': 'Title100',
      'director': 'director',
      'genres': 'genres',
      'header': (
        <div>
          header fixedColumnsAndHeaderRtl header fixedColumnsAndHeaderRtl
        </div>
      ),
      'header2': (
        <span className="sample-class">
          Header 2
        </span>
      ),
      'header4': -45
    },
    {
      'title': 'Title56',
      'director': 'director',
      'genres': 'genres',
      'header': (
        <div>
          header fixedColumnsAndHeaderRtl
        </div>
      ),
      'header2': (
        <span className="sample-class">
          Header 2
        </span>
      ),
      'header4': 3
    },
    {
      'title': 'Title1',
      'director': 'director',
      'genres': 'genres',
      'header': (
        <div>
          header fixedColumnsAndHeaderRtl
        </div>
      ),
      'header2': (
        <span className="sample-class">
          Header 2
        </span>
      ),
      'header4': 2
    },
    {
      'title': 'title3',
      'director': 'director',
      'genres': 'genres',
      'header': (
        <div>
          header fixedColumnsAndHeaderRtl
        </div>
      ),
      'header2': (
        <span className="sample-class">
          Header 2
        </span>
      ),
      'header4': 7
    },
    {
      'title': '0Title1',
      'director': 'director',
      'genres': 'genres',
      'header': (
        <div>
          header fixedColumnsAndHeaderRtl
        </div>
      ),
      'header2': (
        <span className="sample-class">
          Header 2
        </span>
      ),
      'header4': 9
    },
    {
      'title': '11Title',
      'director': 'director',
      'genres': 'genres',
      'header': (
        <div>
          header fixedColumnsAndHeaderRtl
        </div>
      ),
      'header2': (
        <span className="sample-class">
          Header 2
        </span>
      ),
      'header4': 6
    },
    {
      title: (
        <span className="custom-header">
          <span>Name9999</span>
          <button onClick={() => { infoHandler('title') }}>!</button>
        </span>
      ),
      'director': 'director',
      'genres': 'genres',
      'header': (
        <div>
          header fixedColumnsAndHeaderRtl
        </div>
      ),
      'header2': (
        <span className="sample-class">
          Header 2
        </span>
      ),
      'header4': 81
    }
  ];



  const infoHandler = (columnName) => {
    console.log(columnName);
  }


  return (
    <div className="App">
      <DataTable
        columns={tableColumns}
        data={data}
        fixedHeader={true}
        searching={true}
        
      />
    </div>
  );
}

export default App;
