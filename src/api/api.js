import axios from "axios";
const BASE_URL = "https://involve-it.com/test_front/api";
let config = {
  headers: {
    "Content-Type": "application/json",
  },
};
export async function getPayMethods() {
  return await axios.get(`${BASE_URL}/payMethods`, config).then((response) => {
    return response.data;
  });
}

export async function calculate({
  base,
  amount,
  invoicePayMethod,
  withdrawPayMethod,
}) {
  // let dataToQuery = new URLSearchParams(data);

  return await axios
    .get(
      `${BASE_URL}/payMethods/calculate?base=${base}&amount=${amount}&invoicePayMethod=${invoicePayMethod}&withdrawPayMethod=${withdrawPayMethod}`,
      config
    )
    .then((response) => {
      return response.data;
    });
}

export async function confirmExchange(data) {
  return await axios
    .post(
      `${BASE_URL}/bids`,
      data,
      config
    )
    .then((response) => {
      return response.data;
    });
}
