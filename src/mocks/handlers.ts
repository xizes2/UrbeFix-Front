import { rest } from "msw";

const complaintId = "654654jhgjhg";
const nonExistingComplaintId = "ff0ds312uxh";

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
        ctx.status(201),
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

  rest.get(
    `${process.env.REACT_APP_API_URL}complaints/details/${complaintId}`,
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          complaint: {
            category: "Contenedores de Resíduos",
            countComplaints: "1",
            creationDate: "2022-09-06T11:13:00.000Z",
            description: "contenedor lleno",
            image:
              "https://thumbs.dreamstime.com/z/contenedor-lleno-dos-y-muchos-bolsos-de-basura-en-la-calle-ciudad-monta%C3%B1a-146937943.jpg",
            title: "Contenedor lleno",
            id: "654654jhgjhg",
          },
        })
      );
    }
  ),

  rest.delete(
    `${process.env.REACT_APP_API_URL}complaints/delete/${complaintId}`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          complaintDelete: {
            id: complaintId,
          },
        })
      );
    }
  ),

  rest.delete(
    `${process.env.REACT_APP_API_URL}complaints/delete/${nonExistingComplaintId}`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(404),
        ctx.json({
          error: "Complaint not found",
        })
      );
    }
  ),

  rest.post(
    `${process.env.REACT_APP_API_URL}complaints/`,
    async (req, res, ctx) => {
      const headerTestError = req.headers.get("IsTestError");

      if (headerTestError) {
        return res(
          ctx.status(400),
          ctx.json({
            error: "Error creating complaint",
          })
        );
      }

      return res(
        ctx.status(201),
        ctx.json([
          {
            category: "Plaga en via pública",
            title: "ratas en el jardin",
            description:
              "Especialmente por la noche se ve muchas ratas paseando por el jardin",
            countComplaints: 1,
            image:
              "https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2022/07/28/62e2d7628699e.jpeg",
            location: [41, 2.15],
          },
        ])
      );
    }
  ),
];
