# Smart Pantry

Smart Pantry is a web application designed to help users manage their pantry items efficiently. It allows users to add, view, and delete items, complete with their details including images, registration dates, and expiration dates. The app provides visual feedback with toast notifications and dynamically updates the user interface.

## Features

- **Add New Items**: Users can input the name, registration date, expiry date, and image of the item.
- **View Items**: Displays a list of items with their details and an image.
- **Delete Items**: Remove items from the list with a confirmation toast message.
- **Toast Notifications**: Visual feedback using toast messages for actions such as item addition and deletion.
- **Date Calculations**: Calculate and display the number of days remaining until the expiry date.
- **Local Storage**: Items are persisted in the browser's local storage, so they remain available even after a page refresh.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a fast development environment.
- **TailwindCSS**: A utility-first CSS framework for creating custom designs quickly.
- **React Toastify**: A library for displaying toast notifications.

## Installation

To get started with Smart Pantry, follow these steps:

1. **Clone the repository:**
    ```bash
    https://github.com/ERMIAS-TESFAYE/smart-pantry.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd smart-pantry
    ```

3. **Install the dependencies:**
    ```bash
    npm install
    ```

4. **Run the development server:**
    ```bash
    npm run dev
    ```

5. **Open your browser and go to:**
    ```
    http://localhost:3000
    ```

## Usage

- **Adding Items**: Fill out the form with the item name, registration date, expiry date, and select an image file. Click "Add Item" to add it to the list. The item details are saved to local storage.
- **Viewing Items**: Items will be displayed with their details and image. The number of days remaining until the expiry date is calculated and shown.
- **Deleting Items**: Click the delete button on an item card to remove it from the list. The item is also removed from local storage.

## Local Storage

Smart Pantry uses the browser's local storage to persist items between page reloads. When an item is added, it is stored in local storage, and the list of items is retrieved from local storage when the app is loaded. The local storage key used is `itemData`.

- **Saving Items**: When a new item is added, the app updates `localStorage` with the new list of items.
- **Retrieving Items**: On initial load, the app reads the `itemData` from `localStorage` and populates the item list.
- **Deleting Items**: When an item is deleted, the app updates `localStorage` to remove the deleted item from storage.

## Contributing

If you'd like to contribute to Smart Pantry, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
