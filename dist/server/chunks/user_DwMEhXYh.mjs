import { a as auth } from './auth_DnJXfvn4.mjs';

const POST = async ({ request, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: "Non autorisé" }), { status: 401, headers: { "Content-Type": "application/json" } });
  }
  const { name, email, password } = await request.json();
  if (!name || !email || !password) {
    return new Response(JSON.stringify({ error: "Tous les champs sont requis." }), { status: 400, headers: { "Content-Type": "application/json" } });
  }
  if (password.length < 8) {
    return new Response(JSON.stringify({ error: "Le mot de passe doit contenir au moins 8 caractères." }), { status: 400, headers: { "Content-Type": "application/json" } });
  }
  try {
    await auth.api.signUpEmail({ body: { name, email, password } });
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Erreur inconnue.";
    return new Response(JSON.stringify({ error: msg }), { status: 400, headers: { "Content-Type": "application/json" } });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
