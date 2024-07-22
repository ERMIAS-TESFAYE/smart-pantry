import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const deleteToastMessage = () => {
  toast.success('Item Deleted Successfully !');
};

export const errorToastMessage = () => {
  toast.error("Item Can't Be Empty!");
};

export const showToastMessage = () => {
  toast.success('Item Added Successfully !');
};

export function calculateDaysBetween(date1, date2) {
  // Parse the dates
  const startDate = new Date(date1);
  const endDate = new Date(date2);

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = endDate - startDate;

  // Convert milliseconds to days
  const differenceInDays = Math.ceil(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  return differenceInDays < 0
    ? "Dates Can't be negative"
    : differenceInDays + " day's left";
}
