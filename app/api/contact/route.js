export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch("https://office.imaker.technology/api/demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.text();

    return new Response(data, {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return Response.json({ error: "Failed to submit form" }, { status: 500 });
  }
}
