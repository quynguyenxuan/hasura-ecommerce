import { openclient } from "../utils/generated/client";

const sendRequest = async () => {
    const username = 'xuanquy';
    const password = '123456';
    const response = await openclient.mutation({
        login: [
          {
            params: {
                username,
              password,
            },
          },
          {
            name: true,
            email: true,
            token: true,
            refreshToken: true,
          },
        ],
      });

}

function main() {
    sendRequest();
} 

main();