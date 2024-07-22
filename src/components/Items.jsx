import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './Card';
import {
  deleteToastMessage,
  errorToastMessage,
  showToastMessage,
} from '../utils';
import { createContext } from 'react';
export const ItemContext = createContext();

const Items = () => {
  const [itemName, setItemName] = useState('');
  const [registryDate, setRegistryDate] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [image, setImage] = useState(null);
  const [itemData, setItemData] = useState(() => {
    const savedItems = localStorage.getItem('itemData');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const submit = (e) => {
    e.preventDefault();
    if (!itemName || !registryDate || !expireDate || !image) {
      errorToastMessage();
      return;
    }

    const newItem = {
      itemName,
      registryDate,
      expireDate,
      image: URL.createObjectURL(image),
      id: Date.now(),
    };
    const newItemData = [...itemData, newItem];

    setItemData(newItemData);
    localStorage.setItem('itemData', JSON.stringify(newItemData));
    showToastMessage();

    setItemName('');
    setRegistryDate('');
    setExpireDate('');
    setImage(null);
  };

  useEffect(() => {
    localStorage.setItem('itemData', JSON.stringify(itemData));
  }, [itemData]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const removeItem = (id) => {
    const newItems = itemData.filter((item) => item.id !== id);
    setItemData(newItems);
    deleteToastMessage();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <main className=" max-w-[800px] mx-auto ">
      <section className="bg-[#283618] text-[#fefae0] max-w-[800px] mx-auto py-8 mt-4 px-8 rounded mb-8">
        <h1 className="text-4xl font-bold text-center mb-4 font-heading tracking-widest">
          Smart Pantry
        </h1>
        <section className="w-full">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <label htmlFor="itemName">Goods Name</label>
              <input
                className="text-[#283618] "
                type="text"
                name="itemName"
                id="itemName"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Item Name"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1 space-y-4">
                <label htmlFor="registryDate">Registry Date</label>
                <input
                  className="w-full text-[#283618]"
                  type="date"
                  name="registryDate"
                  id="registryDate"
                  value={registryDate}
                  onChange={(e) => setRegistryDate(e.target.value)}
                  placeholder="Registry Date"
                />
              </div>
              <div className="flex-1 space-y-4">
                <label htmlFor="expDate">Expiry Date</label>
                <input
                  className="w-full text-[#283618]"
                  type="date"
                  name="expDate"
                  id="expDate"
                  value={expireDate}
                  onChange={(e) => setExpireDate(e.target.value)}
                  placeholder="Expiry Date"
                />
              </div>
            </div>
            <div>
              <label htmlFor="itemImage">Item Image</label>
              <input
                className=""
                type="file"
                name="itemImage"
                id="itemImage"
                onChange={handleImageChange}
              />
            </div>
            <button
              onClick={submit}
              className="w-full text-lg my-4 bg-white text-[#283618] px-4 py-2 rounded-md font-bold flex items-center justify-center gap-1 hover:bg-green-200 hover:text-black"
            >
              <span className="material-symbols-outlined">add</span>
              Add Item
            </button>
            <ToastContainer />
          </form>
        </section>
      </section>

      <div className="small:grid grid-cols-1 small:grid-cols-2 gap-4">
        {itemData.length > 0 ? (
          <ItemContext.Provider value={itemData}>
            {itemData.map((item) => (
              <Card
                key={item.id}
                itemKey={item.id}
                removeItem={removeItem}
                deleteToastMessage={deleteToastMessage}
              />
            ))}
          </ItemContext.Provider>
        ) : null}
      </div>
    </main>
  );
};
export default Items;
