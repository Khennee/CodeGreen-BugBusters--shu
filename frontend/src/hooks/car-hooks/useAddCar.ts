import { Car } from "../../types/datatypes";
import { fetchWithAuth } from "../../utils/fetch";
import useFetchWithAuthExports from "../context-hooks/useFetchWithAuthExports";
import { toast } from "react-toastify";
import { LoadingContextType } from "../../types/loading.types";
import useLoading from "../context-hooks/useLoading";

const useAddCar = () => {
  const { auth, refresh, navigate } = useFetchWithAuthExports();
  const { setAppLoading }: LoadingContextType = useLoading();

  const postCar = async (formData: Car) => {
    setAppLoading!(true);

    try {
      const response = await fetchWithAuth(
        navigate,
        refresh,
        auth,
        "/car/add",
        "post",
        formData,
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response from server:", errorData); // Log server response
        toast.error(errorData.message);
        return;
      }

      const notificationAPI = await response.json();

      toast.success(notificationAPI.message);
      return; // Return true on success
    } catch (err: unknown) {
      // Narrow down `err` to ensure it has a `message` property
      const errorMessage =
        err instanceof Error ? err.message : "Failed to connect to the server";
      toast.error(errorMessage);
    } finally {
      setAppLoading!(false);
    }
  };

  return { postCar };
};

export default useAddCar;
