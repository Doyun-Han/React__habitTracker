import Habit from './habit';
import HabbitAddForm from './habitAddForm';
import React from 'react';

const Habits = ({
    habits,
    onIncrement,
    onDecrement,
    onDelete,
    onAdd,
    onReset,
    }) => {

    return (
<div className="habits">
        <HabbitAddForm onAdd={onAdd} />
        <ul>
        {habits.map(habit => (
            <Habit
            key={habit.id}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            />
        ))}
        </ul>
        <button className="habits-reset" onClick={onReset}>
        Reset All
        </button>
    </div>
    );
};
export default Habits;