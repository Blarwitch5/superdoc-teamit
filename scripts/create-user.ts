import { auth } from '../src/lib/auth'

const [,, name, email, password] = process.argv

if (!name || !email || !password) {
  console.error('Usage: pnpm create-user "Prénom Nom" email@example.com motdepasse')
  process.exit(1)
}

if (password.length < 8) {
  console.error('Le mot de passe doit contenir au moins 8 caractères.')
  process.exit(1)
}

try {
  await auth.api.signUpEmail({ body: { name, email, password } })
  console.log(`Utilisateur créé : ${name} (${email})`)
} catch (error) {
  console.error('Erreur :', error instanceof Error ? error.message : String(error))
  process.exit(1)
}
