import { useState, useCallback } from "react";
import { deliveryAreas } from "../site";

export function useSubscription() {
  const [state, setState] = useState({
    milk: 1.0,
    ghee: 0.5,
  });

  const updateProduct = useCallback((productKey, value) => {
    setState((prev) => ({ ...prev, [productKey]: parseFloat(value) }));
  }, []);

  const validateAddress = (address) => {
    const lower = address.toLowerCase();
    return deliveryAreas.some((area) => lower.includes(area));
  };

  return {
    state,
    updateProduct,
    validateAddress,
  };
}
