export async function GET() {
  const stream = new ReadableStream({
    start(controller) {
      const enc = new TextEncoder();
      const interval = setInterval(() => {
        const payload = { at: new Date().toISOString(), delta: Math.floor(Math.random() * 7) - 2 };
        controller.enqueue(enc.encode(`data: ${JSON.stringify(payload)}\n\n`));
      }, 3500);
      return () => clearInterval(interval);
    }
  });
  return new Response(stream, { headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' } });
}
