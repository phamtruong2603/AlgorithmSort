import { useEffect, useState } from 'react';
import './App.css';
import {
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort,
  selectionSort
} from './AlgorithmSort';

function App() {

  const [arrString, setArrString] = useState([])
  const [arrStringSort, setArrStringSort] = useState([])
  const [sort, setSort] = useState('bubble')
  const [timeRun, setTimeRun] = useState(0)

  //tao 1 ky tu
  const randomChar = () => {
    const string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const len = string.length
    const index = Math.floor(Math.random() * len);

    return string[index]
  }

  //tao 1 phan tu
  const randomString = () => {
    const len = Math.floor(Math.random() * 5) + 1

    let string = ''
    for (let i = 0; i < len; i++) {
      string += randomChar();
    }

    return string
  }

  //tao mang
  const randomArray = (size) => {
    let arr = []
    for (let i = 0; i < size; i++) {
      arr.push(randomString());
    }

    return arr
  }

  const random = () => {
    setArrString(randomArray(1000))
  }

  useEffect(() => {
    setArrString(randomArray(1000))
  },[])

  const sortArray = () => {
    const time = new Date()
    switch (sort) {
      case "bubble":
        setArrStringSort(bubbleSort(arrString))
        break
      case "insertion":
        setArrStringSort(insertionSort(arrString))
        break
      case "selection":
        setArrStringSort(selectionSort(arrString))
        break
      case "merge":
        setArrStringSort(mergeSort(arrString))
        break
      case "quick":
        setArrStringSort(quickSort(arrString))
        break
      default:
        break
    }
    setTimeRun(new Date() - time,'abc')
  }
  return (
    <div className="App">
      <div className='arr-random'>
        <button onClick={random}>random 1000 string</button>
        <div>
          {arrString.map((arr, index) => <p key={index}>{arr}</p>)}
        </div>
      </div>

      <div className='arr-sort'>
        <div>
          <label htmlFor="selectSort">Lựa chọn thuật toán:</label>
          <select name="selectSort" id="selectSort" onChange={(event) => setSort(event.target.value)}>
            <option value="bubble">bubble</option>
            <option value="insertion">insertion</option>
            <option value="selection">selection</option>
            <option value="merge">merge</option>
            <option value="quick">quick</option>
          </select>

          <button onClick={sortArray}>Sắp xếp</button>
        </div>

        <div>
          <h4>Thời gian chạy: {timeRun}</h4>
          {arrStringSort.map((arr, index) => <p key={index}>{arr}</p>)}
        </div>
      </div>
    </div>
  );
}

export default App;
