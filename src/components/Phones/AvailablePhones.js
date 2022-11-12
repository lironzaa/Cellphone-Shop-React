import classes from "./AvailablePhones.Module.css";
import Card from "../UI/Card";
import PhoneItem from "./PhoneItem/PhoneItem";
import { useEffect, useState } from "react";

const AvailablePhones = () => {
  const [ phones, setPhones ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError ] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("https://cellphone-shop-react-default-rtdb.firebaseio.com/phones.json");

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();
      const loadedPhones = [];

      for (const key in responseData) {
        loadedPhones.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setPhones(loadedPhones);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.phonesLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className={classes.phonesError}>
        <p>failed to fetch</p>
      </section>
    )
  }

  const phonesList = phones.map(phone => (
    <PhoneItem
      id={phone.id}
      key={phone.id}
      name={phone.name}
      description={phone.description}
      price={phone.price}
    />
  ));

  return (
    <section className={classes.phones}>
      <Card>
        <ul>
          {phonesList}
        </ul>
      </Card>
    </section>
  )
};

export default AvailablePhones;