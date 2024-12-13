import { useDeleteCar } from "../../hooks/car-hooks/useDeleteCar";
import { useState, useRef, useEffect } from "react";
import useEditCar from "../../hooks/car-hooks/useEditCars";
import { Car } from "../../types/datatypes";

const CarListCard = ({ car }: { car: Car }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCar, setEditedCar] = useState<Car>(car);
  const { deleteCar } = useDeleteCar();
  const { updateCar } = useEditCar();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedCar((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeleteCar = () => {
    deleteCar(car.id!);
    setIsMenuOpen(false);
  };

  const handleEditButton = () => {
    if (isEditing) {
      handleEditCar();
    } else {
      setIsEditing(true);
    }
  };

  const handleEditCar = () => {
    updateCar(editedCar);
    setIsEditing(false);
    setIsMenuOpen(false);
  };

  const handleCancelEdit = () => { 
    if (isEditing){ 
      setIsEditing(false);
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ul className="border-b-2 border-t-2 border-t-transparent border-b-inputfield space-y-[10px] relative">
      <div className="ml-2 space-y-3 p-3">
        <div className="flex space-x-4">
          <div className="flex-1">
            <h1 className="text-white font-syke-light text-xl">License Number:</h1>
            {isEditing ? (
              <input
                type="text"
                name="license_number"
                value={editedCar.license_number}
                onChange={handleInputChange}
                className="text-input"
              />
            ) : (
              <h1 className="text-textgreen font-syke-medium text-xl">{car.license_number}</h1>
            )}
          </div>
          <div className="flex-1">
            <h1 className="text-white font-syke-light text-xl">Plate Number:</h1>
            {isEditing ? (
              <input
                type="text"
                name="license_plate"
                value={editedCar.license_plate}
                onChange={handleInputChange}
                className="text-input"
              />
            ) : (
              <h1 className="text-textgreen font-syke-medium text-xl">{car.license_plate}</h1>
            )}
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <h1 className="text-white font-syke-light text-xl">Brand:</h1>
            {isEditing ? (
              <input
                type="text"
                name="brand"
                value={editedCar.brand}
                onChange={handleInputChange}
                className="text-input"
              />
            ) : (
              <h1 className="text-textgreen font-syke-medium text-xl">{car.brand}</h1>
            )}
          </div>

          <div className="flex-1">
            <h1 className="text-white font-syke-light text-xl">Model:</h1>
            {isEditing ? (
              <input
                type="text"
                name="car_model"
                value={editedCar.car_model}
                onChange={handleInputChange}
                className="text-input"
              />
            ) : (
              <h1 className="text-textgreen font-syke-medium text-xl">{car.car_model}</h1>
            )}
          </div>

          <div className="flex-1">
            <h1 className="text-white font-syke-light text-xl">Color:</h1>
            {isEditing ? (
              <input
                type="text"
                name="color"
                value={editedCar.color}
                onChange={handleInputChange}
                className="text-input"
              />
            ) : (
              <h1 className="text-textgreen font-syke-medium text-xl">{car.color}</h1>
            )}
          </div>
        </div>
      </div>

      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-50"
        ref={dropdownRef}
      >
        <button
          className="text-white px-2 py-1 rounded-full hover:bg-lime-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-2xl">⋮</span>
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-md shadow-lg z-10">
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-700"
              onClick={handleEditButton}
            >
              {isEditing ? "Update" : "Edit"}
            </button>
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-700 text-red-500"
              onClick={isEditing ? handleCancelEdit : handleDeleteCar}
            >
              {isEditing ? "Cancel" : "Delete"}
            </button>
          </div>
        )}
      </div>
    </ul>
  );
};

export default CarListCard;
