export function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export const displayRazorpay = async (price) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  const paymentObject = new window.Razorpay(
    getOptions({
      amount: price * 100,
      currency: "INR",
    })
  );
  paymentObject.open();
};

const getOptions = (data) => {
  return {
    key: "rzp_test_LrETNSXpN23O0r", // Enter the Key ID generated from the Dashboard
    amount: data.amount.toString(),
    currency: data.currency,
    name: "My First App",
    description: "Test Transaction",
    handler: async function (response) {
        const data = {
           razorpayPaymentId: response.razorpay_payment_id,
           
        };

      alert(JSON.stringify(response));
    },
    prefill: {
      name: "Dheraj",
      email: "dheeraj17@gmail.com",
      contact: "7010265689",
    },
    notes: {
      address: "Test address",
    },
    theme: {
      color: "#61dafb",
    },
  };
};
