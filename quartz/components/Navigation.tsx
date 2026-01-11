import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { pathToRoot } from "../util/path"

const categories = [
  { name: "Eis", path: "Eis" },
  { name: "Hauptgerichte", path: "Hauptgerichte" },
  { name: "Vorspeisen", path: "Vorspeisen" },
  { name: "Suppen", path: "Suppen" },
  { name: "Kids", path: "Kids" },
  { name: "Salate", path: "Salate" },
  { name: "Desserts", path: "Desserts" },
]

export default (() => {
  const Navigation: QuartzComponent = ({ displayClass, fileData }: QuartzComponentProps) => {
    const baseDir = pathToRoot(fileData.slug!)
    return (
      <nav class={`nav-menu ${displayClass ?? ""}`}>
        {categories.map(({ name, path }) => (
          <a href={`${baseDir}/${path}/`}>{name}</a>
        ))}
      </nav>
    )
  }

  return Navigation
}) satisfies QuartzComponentConstructor
