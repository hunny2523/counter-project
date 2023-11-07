import React from 'react';
import Counter from '../../components/counter/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { createCounter, deleteCounter } from '../../store/countersSlice';
import styles from './Home.module.css'

const Home = () => {
    const counters = useSelector((state) => state.counters);
    const dispatch = useDispatch();

    const handleAddCounter = () => {
        dispatch(createCounter());
    }

    const handleDeleteCounter = (id) => {
        dispatch(deleteCounter(id));
    }

    return (
        <>
            <h1 id={styles.title}>Tally Counter</h1>
            <button className={`btn ${styles.addBtn}`} onClick={() => handleAddCounter()}>Add Counter</button>
            <div className={styles.countersBox}>
                {counters?.length > 0 ? (
                    counters.map((counter) => (
                        <Counter key={counter.id} counter={counter} onDelete={handleDeleteCounter} />
                    ))
                ) : (
                    <h1>No Counters, Create One !</h1>
                )}
            </div>
        </>
    )
}

export default Home;
