import './App.css'
import moment from 'moment'

function App() {

  return (
    <div className="App">
      <h1>
        คำนวน Prorate รายวัน
      </h1>
      <h2 id='prorate'>
        {(moment().format('D')/moment().daysInMonth()*100).toFixed(2)} %
      </h2>
      <h3>of {moment().format('MMMM')} {moment().format('YYYY')}</h3>
      <p>MS Excel : https://web.facebook.com/reportingengineer/posts/761079775384860</p>
    </div>
  )
}

export default App
