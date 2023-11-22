import { useEffect, useState } from "react";
import CarouselHome from "../components/CarouselHome/CarouselHome"
import CategoriasSelector from "../components/CategoriasSelector/CategoriasSelector"
import CategoriasTareas from "../components/CategoriasTareas/CategoriasTareas"
import { Task } from "../types/Task";
import { TaskService } from "../services/TaskService";


const LandingPages = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<String>('');

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await TaskService.getAllTasks();
      setTasks(tasksData)
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toUpperCase());
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks);
    }
  }, [selectedCategory, tasks])




  return (
    <>
        <CarouselHome/>
        <CategoriasSelector OnSelectedCategory={setSelectedCategory} />
        <CategoriasTareas tasks={filteredTasks.length > 0 ? filteredTasks : tasks}/>

    </>
  )
}

export default LandingPages


