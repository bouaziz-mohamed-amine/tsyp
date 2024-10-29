import CustomImage from "../components/CustomImage";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function TNChallengePage() {
  const [tasksData, setTasksData] = useState([]);
  const [taskSelected, settaskSelected] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const getData = async () => {
      fetch("/assets/tn-tasks.json")
        .then((response) => response.json())
        .then((response) => {
          setTasksData(response);
          settaskSelected(0);
        })
        .catch((err) => console.error(err));
    };
    getData();
  }, []);

  const handleNextSlide = () => {
    if (tasksData[taskSelected].sessions) {
      setCurrentSlide((prev) => (prev + 1) % tasksData[taskSelected].sessions.length);
    }
  };

  const handlePrevSlide = () => {
    if (tasksData[taskSelected].sessions) {
      setCurrentSlide((prev) => (prev - 1 + tasksData[taskSelected].sessions.length) % tasksData[taskSelected].sessions.length);
    }
  };

  return (
    <div className="h-full">
      <div className="col-span-12 lg:py-20 md:mx-auto">
        <h1 className="text-center text-4xl font-bold tracking-tight lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
          Tunisia 2056 Challenge
        </h1>
      </div>

     

      <div className="col-span-12 pb-16 md:mx-auto">
        <h1 className="text-center text-4xl font-bold tracking-tight lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
          TN 2056 Tasks
        </h1>
      </div>
      
      <div className="flex flex-row gap-4 w-4/5 mx-auto">
        <div className="basis-1/3 hidden md:block">
          {tasksData.map((task, index) => (
            <div
              key={index}
              className="cursor-pointer border rounded-lg dark:bg-neutral-900 dark:border-neutral-900 my-4 hover:bg-slate-100"
              onClick={() => {
                settaskSelected(index);
                setCurrentSlide(0); // Reset slide index when selecting a new task
              }}
            >
              <div className="text-xs text-center text-gray-800 transition duration-700 dark:text-white py-4">
                <span>{task.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="basis-3/3 md:basis-2/3 py-4">
          <div className="hidden md:block">
            {taskSelected != null && (
              tasksData[taskSelected].sessions ? (
                <div className="relative">
                  <img
                    src={tasksData[taskSelected].sessions[currentSlide].url}
                    alt={tasksData[taskSelected].sessions[currentSlide].sessionName}
                    className="border rounded-lg h-3-5"
                  />
                  <button onClick={handlePrevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded">
				  &lt;
                  </button>
                  <button onClick={handleNextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded">
                   &gt;
                  </button>
                </div>
              ) : (
                <img src={tasksData[taskSelected].url} alt={tasksData[taskSelected].name} className="border rounded-lg h-3-5" />
              )
            )}
          </div>

          
          <div className="block md:hidden">
            {tasksData.map((task, index) =>
              task.sessions ? (
                <div key={index}>
                  {task.sessions.map((session, sessionIndex) => (
                    <img key={sessionIndex} src={session.url} alt={session.sessionName} className="border rounded-lg h-3-5 my-2" />
                  ))}
                </div>
              ) : (
                <img key={index} src={task.url} alt={task.name} className="border rounded-lg h-3-5 my-2" />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
