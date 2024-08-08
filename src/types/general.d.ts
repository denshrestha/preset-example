type TIndexedObject<T = any> = {
  [key: string]: T
}

interface IDropdown {
  label: string
  icon?: any
  action: () => void
}

type TEntity = IWorkshopMarketing & ICourseMarketing & IBookMarketing & IWebinarMarketing

type TNavigation = Array<{
  label: string
  icon: FunctionalComponent<SVGAttributes>
  route: RouteLocationRaw
}>

type TElTranslatePair = {
  [key: string]: string | string[] | TElTranslatePair
}

interface IEntityStateListItem<T = any> {
  title: string
  list: T[]
}
