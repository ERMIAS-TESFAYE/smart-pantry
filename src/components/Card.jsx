import { useContext } from 'react';
import { ItemContext } from './Items';
import { calculateDaysBetween } from '../utils.js';

const Card = ({ itemKey, removeItem }) => {
  const itemData = useContext(ItemContext);
  const item = itemData.find((item) => item.id === itemKey);

  if (!item) return null;

  const { itemName, expireDate, registryDate, image } = item;

  return (
    <div className="bg-black text-white py-6 px-4 my-2 rounded overflow-hidden">
      <div className="flex flex-col  gap-4">
        <img
          src={image}
          className="w-full lg:w-[400px] border h-[200px] object-cover"
          alt={itemName}
        />
        <div className="flex flex-col gap-4 overflow-hidden">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl capitalize font-bold break-words">
              {itemName}
            </h1>
            <span>{calculateDaysBetween(registryDate, expireDate)}</span>
          </div>
          <h3 className="capitalize break-words ">
            Registration Date: {registryDate}
          </h3>
          <h2 className="capitalize break-words">Expiry Date: {expireDate}</h2>
        </div>
      </div>
      <button
        className="mt-6 px-4 py-3 font-bold capitalize rounded-md text-lg bg-white w-full text-black flex items-center justify-center gap-1 hover:bg-red-300"
        onClick={() => removeItem(itemKey)}
      >
        <span className="material-symbols-outlined">delete</span>
        delete
      </button>
    </div>
  );
};
export default Card;
