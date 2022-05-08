import { Link } from 'react-router-dom';
import useItems from '../hook/useItems';
import Item from '../Item/Item';

const Items = () => {
    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //     fetch('https://secure-retreat-48774.herokuapp.com/items')
    //         .then(res => res.json())
    //         .then(data => setItems(data));
    // }, [])
    const [items] = useItems();
    return (
        <div className='container'>
            <div className='row'>
                <h2 className='mt-28 text-5xl text-white text-center'>
                    Our Inventory
                </h2>
                <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3'>
                    {
                        items.slice(0, 6).map(item => <Item key={item._id} item={item} ></Item>)
                    }


                </div>
                <div>
                    <Link className='text-slate-100   justify-center content-center flex items-center border-b border-teal-500 py-2  mt-5' to='/manageinventories'>Manage Inventories</Link>
                </div>


            </div>

        </div>

    );
};

export default Items;