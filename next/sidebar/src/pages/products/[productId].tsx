import { useRouter } from "next/router";
import React, { useEffect } from "react";

function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productId;

  useEffect(() => {
    console.log(productId);
  }, [productId]);

  return <div>ProductDetail: {productId}</div>;
}

export default ProductDetail;
