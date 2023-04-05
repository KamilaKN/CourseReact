import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Total from "./components/Total/Total";

function App() {
    const course = [
        {
            id: 1,
            name: "IT-RUN React Web Dev",
            tasks: [
                {
                    part: "Вводный курс по React",
                    task: 7,
                },
                {
                    part: "Состояние компонента",
                    task: 10,
                },
                {
                    part: "Декомпозиция компонентов",
                    task: 5,
                },
            ],
        },

        {
          id: 2,
          name: "IT-RUN Python Web Dev",
          tasks: [
              {
                  part: "Вводный курс по Python",
                  task: 5,
              },
              {
                  part: "Переменные циклы Python",
                  task: 12,
              },
              {
                  part: "Фреймворк Django",
                  task: 17,
              },
          ],
      },
    ];
    return (
        <div className="App">
          {course.map((c) => {
            return(
              <>
              <Header course={c} />
            <Content tasks={c.tasks} />
            <Total tasks={c.tasks}/>
              </>
            )
          })}
        </div>
    );
}

export default App;
