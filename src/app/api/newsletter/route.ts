import dbClient from "@/prisma/dbClient";

const GET = async () => {
  try {
    const dbResponse = await dbClient.newsletter.findMany();
    console.log("Response: ", dbResponse);
    return new Response(JSON.stringify(dbResponse), { status: 200 });
  } catch (err) {
    console.log("Error: ", err);
    return new Response("error fetching data from db", { status: 500 });
  }
};

const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { email } = body;

    const emailExists = await dbClient.newsletter.findFirst({
      where: { email: email },
    });

    const dbResponse =
      emailExists ??
      (await dbClient.newsletter.create({
        data: { email: email },
      }));

    const responseData = {
      dbResponse: dbResponse,
      emailExists: emailExists,
    };

    console.log("Response: ", dbResponse);
    return new Response(JSON.stringify(responseData), { status: 200 });
  } catch (err) {
    console.log("Error: ", err);
    return new Response("error adding data to db", { status: 500 });
  }
};

const DELETE = async (request: Request) => {
  try {
    const { id }: { id: string } = await request.json();

    const dbResponse = await dbClient.newsletter.delete({
      where: { id: id },
    });

    return new Response(JSON.stringify(dbResponse), { status: 200 });
  } catch (err) {
    console.log("Error: ", err);
    return new Response("error deleting data from db", { status: 500 });
  }
};

export { GET, POST, DELETE };
