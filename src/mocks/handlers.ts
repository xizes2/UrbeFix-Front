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

  rest.post(
    `${process.env.REACT_APP_API_URL}users/login`,
    async (req, res, ctx) => {
      const body = await req.json();
      if (!body.userEmail || !body.password) {
        return res(
          ctx.status(403),
          ctx.json({
            error: "Wrong data",
          })
        );
      }

      return res(
        ctx.status(200),
        ctx.json({
          user: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTY0Yzc2OTQ2NDAwNGNmNzhjZmFiMiIsInVzZXJFbWFpbCI6Im1penVraUBnbWFpbWl6dWtpbC5jb20iLCJpYXQiOjE2NjI0ODk3Mjd9.Z_cDzD8Xh4zSfooYAHtmx0vEIrwfFtDfTMs-ZqiRYJU",
          },
        })
      );
    }
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}complaints`,
    async (req, res, ctx) => {
      const headerTestError = req.headers.get("IsTestError");

      if (headerTestError) {
        return res(
          ctx.status(500),
          ctx.json({
            error: "Something went wrong",
          })
        );
      }

      return res(
        ctx.status(200),
        ctx.json({
          complaints: [
            {
              category: "fuentes",
              title: "fuente rota",
              description: "",
              countComplaints: 1,
              image: "fuente.jpg",
              creationDate: new Date(),
              id: "987654",
            },
          ],
        })
      );
    }
  ),
];
