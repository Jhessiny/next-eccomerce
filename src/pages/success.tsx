import { useEffect } from "react";
import { useRouter } from "next/router";
import { AiFillCheckCircle } from "react-icons/ai";
import {
  useCartSelector,
  useCheckoutPaymentSession,
} from "@/app/presentation/hooks";

const Success = () => {
  const {
    query: { session_id },
  } = useRouter();

  const { clearCart } = useCartSelector();

  const { isSuccess, data, isError, isLoading } = useCheckoutPaymentSession(
    session_id as string
  );

  useEffect(() => {
    if (isSuccess) {
      clearCart();
    }
  }, [data, clearCart, isSuccess]);

  const successToast = (
    <div className="py-4 px-8 rounded-md bg-gray-100 max-w-lg mx-auto">
      <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
        <AiFillCheckCircle className="w-12 h-12 flex-shrink-0 text-green-600" />
        <span>Thanks for your order!</span>
      </h2>
      <p className="text-lg mt-3">Check your inbox for the receipt.</p>
    </div>
  );

  return (
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6 text-center">
      {isError && (
        <div className="p-2 rounded-md bg-rose-100 text-rose-500 max-w-md mx-auto">
          <p className="text-lg">Sorry, something went wrong!</p>
        </div>
      )}
      {isLoading && (
        <div className="p-2 rounded-md bg-gray-100 text-gray-500 max-w-md mx-auto">
          <p className="text-lg animate-pulse">Loading...</p>
        </div>
      )}
      {isSuccess && successToast}
    </div>
  );
};

export default Success;
