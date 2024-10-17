export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page")) || 1;
  const pageSize = 8; // Number of items per page
  const start = (page - 1) * pageSize;

  // Example data (replace this with your actual data source)
  const data = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
  }));

  const paginatedData = data.slice(start, start + pageSize);
  return new Response(JSON.stringify(paginatedData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
