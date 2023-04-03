import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

function App() {
  const course = "IT-RUN React Web Dev"
  const part1 = "Вводный курс по React"
  const task1 = 7
  const part2 = "Состояние компонента"
  const task2 = 10
  const part3 = "Декомпозиция компонентов"
  const task3 = 5

  return (
    <div>
        <Header course={course}/>
        <Content part={part1}/>
        <Total/>
    </div>
  );
}

export default App;
