import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { incrementCount, decrementCount, setName, setCount } from '../../store/countersSlice';
import styles from './Counter.module.css'

const Counter = ({ counter, onDelete }) => {
    const dispatch = useDispatch();
    const { id, name, count } = counter;

    const [editingName, setEditingName] = useState(false);
    const [editingCount, setEditingCount] = useState(false);
    const [newName, setNewName] = useState(name);
    const [newCount, setNewCount] = useState(count);

    const handleSaveName = () => {
        dispatch(setName({ id, name: newName }));
        setEditingName(false);
    };

    const handleSaveCount = () => {
        dispatch(setCount({ id, value: Number(newCount) }));
        setEditingCount(false);
    };

    return (
        <div className={styles.counter}>
            <h2 className={styles.counterTitle}>{name}</h2>
            <h1 className={styles.counterBox}>{count}</h1>
            <button className='btn' onClick={() => dispatch(incrementCount(id))}>Increment Count</button>
            <button className='btn' onClick={() => dispatch(decrementCount(id))}>Decrement Count</button>
            <div className='d-flex my-1'>
                {editingName ? (
                    <>
                        <input className='flex-grow' type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
                        <button className='btn' onClick={handleSaveName}>Save Name</button>
                    </>
                ) : <button className='btn w-100' onClick={() => setEditingName(true)}>Edit Name</button>}
            </div>
            <div className='d-flex my-1'>
                {editingCount ? (
                    <>
                        <input className='flex-grow' type="number" value={newCount} onChange={(e) => setNewCount(e.target.value)} />
                        <button className='btn' onClick={handleSaveCount}>Save Count</button>
                    </>
                ) : <button className='btn w-100  ' onClick={() => setEditingCount(true)}>Edit Count</button>}
            </div>
            <button onClick={() => onDelete(id)} className={`btn w-100 ${styles.deleteBtn}`}>Delete</button>
        </div>
    )
}

export default Counter;
