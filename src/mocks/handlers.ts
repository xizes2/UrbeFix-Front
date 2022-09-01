import { rest } from "msw";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}users/register`,
    async (req, res, ctx) => {
      const body = await req.json();
      if (
        !body.firstName ||
        !body.firstSurname ||
        !body.userEmail ||
        !body.password
      ) {
        return res(
          ctx.status(400),
          ctx.json({
            error: "Wrong data",
          })
        );
      }

      return res(
        ctx.status(201),
        ctx.json([
          {
            firstName: "Adam",
            firstSurname: "Super",
            userEmail: "adam@gmail.com",
            password: "adampass",
          },
        ])
      );
    }
  ),
];
