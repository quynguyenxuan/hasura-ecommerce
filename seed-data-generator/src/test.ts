// const openclient = require("../utils/generated/client").openclient;
import { Chain, order_insert_input, user } from "./graphql-client-sdk-node";
import type {
  product,
  order_product_insert_input,
} from "./graphql-client-sdk-node";

// TODO: This script should probably just be able to generate data for all of the core tables

///////////////////////////////////////////////////////////

const NUM_ORDERS_PER_USER = 5;
const NUM_PRODUCTS_PER_ORDER_MIN = 1;
const NUM_PRODUCTS_PER_ORDER_MAX = 5;

const client = Chain("http://localhost:8060/v1/graphql", {
  headers: { "X-Hasura-Admin-Secret": "my-secret" },
});

const sendRequest = async () => {
  const username = "xuanquy";
  const password = "123456";
  const response = await client.mutation({
    actionLoginTest: [
      {
        params: {
          username,
          password,
        },
      },
      {
        accessToken: true,
      },
    ],
  });
  const products = await client.query({
    product: [
      {
        limit: 10,
        where: {
          id: {
            _gt: 1,
            _lt: 12,
          },
          name: {
            _gt: '',          
          }
        }
      },
      {
        id: true,
        name: true,
        category: {
          name: true,
        },
      }
    ]
  })
  console.log("Res: ", response);
};

function main() {
  sendRequest();
}

main();
