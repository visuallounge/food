import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const categories = [
  { name: "Eis", path: "/Eis/" },
  { name: "Hauptgerichte", path: "/Hauptgerichte/" },
  { name: "Vorspeisen", path: "/Vorspeisen/" },
  { name: "Suppen", path: "/Suppen/" },
  { name: "Kids", path: "/Kids/" },
  { name: "Salate", path: "/Salate/" },
  { name: "Desserts", path: "/Desserts/" },
]

export default (() => {
  const Navigation: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <nav class={`nav-menu ${displayClass ?? ""}`}>
        {categories.map(({ name, path }) => (
          <a href={path}>{name}</a>
        ))}
      </nav>
    )
  }

  return Navigation
}) satisfies QuartzComponentConstructor
