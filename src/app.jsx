import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

const App = () => {
  const [habits, setHabits] = useState([
    {id : 1, name : 'Reading', count : 0},
    {id : 2, name : 'Running', count : 0},
    {id : 3, name : 'Coding', count : 0},
])

  const handleIncrease = useCallback(habit => {
    setHabits(habits => 
      habits.map(item => {
        if(item.id === habit.id) {
          return {...habit, count : habit.count + 1}
        }
        return item;
      })
      );
  }, [])

  const handleDecrease = useCallback(habit => {
    setHabits(habits => 
      habits.map(item => {
        if(item.id === habit.id) {
          const count = habit.count - 1
          return {...habit, count : count < 0 ? 0 : count}
        }
        return item;
      })
      );
  }, [])

  const handleDelete = useCallback(habit => {
    setHabits(habits => habits.filter(item => item.id !== habit.id))
  }, [])

  const handleAdd = useCallback(name => {
    setHabits(habits => [...habits, {id : Date.now(), name, count : 0}]);
  }, [])

  const reset = useCallback(() => {
    setHabits(habits =>
      habits.map(habit => {
        if(habit.count !== 0) {
          return {...habit, count : 0}
        }
      return habit
      })
    )
  }, [])
  return (
    <>
          <Navbar totalCount = {habits.filter(item => item.count > 0).length}/>
          <Habits
        habits={habits}
        onIncrement = {handleIncrease}
        onDecrement = {handleDecrease}
        onDelete = {handleDelete}
        onAdd={handleAdd} 
        onReset = {reset}/>
        </>
  )
};

export default App;
