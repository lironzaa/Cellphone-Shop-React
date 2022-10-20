import classes from "./AvailablePhones.Module.css";
import Card from "../UI/Card";
import PhoneItem from "./PhoneItem/PhoneItem";

const DUMMY_PHONES = [
    {
        id: 'm1',
        name: 'Iphone 14',
        description: 'Apple Flagship',
        price: 699.99,
    },
    {
        id: 'm2',
        name: 'Galaxy S22',
        description: 'Best Camera in the world',
        price: 649,
    },
    {
        id: 'm3',
        name: 'Xiaomi T11 Pro',
        description: 'Xiaomi latest technology',
        price: 559.99,
    },
    {
        id: 'm4',
        name: 'Google Pixel 6',
        description: 'Best google phone',
        price: 600,
    },
];

const AvailablePhones = () => {
    const phonesList = DUMMY_PHONES.map(phone => (
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