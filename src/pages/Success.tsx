import { useEffect } from "react";

// Success page component for Ko-fi redirects
const Success = () => {
  useEffect(() => {
    // Track purchase completion
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Purchase", {
        value: 47, // Replace with your actual product price
        currency: "USD",
        content_name: "Studio21 Digital Product Vault",
        content_category: "Digital Products",
        content_ids: ["studio21-vault"],
        content_type: "product",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <div className="text-6xl mb-6">??</div>
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Thank You for Your Purchase!
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Your Studio21 Digital Product Vault is being prepared. You'll
            receive access details via email shortly.
          </p>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-800 font-medium">
              Check your email for download instructions and your complete
              strategy guide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
