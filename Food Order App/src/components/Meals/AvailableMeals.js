import { useEffect, useState } from 'react';

import classes from './AvailableMeals.module.css';

import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchAvailableMeals = async () => {
      const response = await fetch('https://react-food-app-2dddb-default-rtdb.firebaseio.com/meals.json');

      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();

      const loadedAvailableMeals = [];

      for (let key in data) {
          loadedAvailableMeals.push({
              id: key,
              name: data[key].name,
              description: data[key].description,
              price: data[key].price
          })
      }
      setMeals(loadedAvailableMeals);
      setIsLoading(false);
    };

    fetchAvailableMeals().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [])

  if(isLoading) {
    return (
    <section className={classes['meals-loading']}>
      <p>Loading ...</p>
    </section>);
  }
  if(httpError){
    return (
      <section className={classes['meals-error']}>
        <p>{httpError}</p>
      </section>
    );
  }
  const mealsList = meals.map((mealItem) => (
    <MealItem
      id={mealItem.id}
      key={mealItem.id}
      name={mealItem.name}
      description={mealItem.description}
      price={mealItem.price}
    />
    ));
    return (
        <section className={classes.meals}>
          <Card><ul>{mealsList}</ul></Card>
            
        </section>
    );
}

export default AvailableMeals