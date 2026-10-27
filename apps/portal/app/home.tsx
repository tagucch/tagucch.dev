import type { Route } from "./+types/home"

export function meta(_: Route.MetaArgs) {
  return [{ title: "tagucch.dev" }]
}

export default function Home() {
  return (
    <main>
      <h1>tagucch.dev</h1>
      <ul>
        <li>
          <a href="https://diary.tagucch.dev">diary</a>
        </li>
      </ul>
    </main>
  )
}
