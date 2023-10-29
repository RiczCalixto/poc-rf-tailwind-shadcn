import { Menu, Search, LifeBuoy, Cog } from 'lucide-react'
import { Input } from './input'
import { Logo } from './logo'

import SideMenu from './side-menu'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './collapsible'
import { Button } from './button'

export default function Sidebar() {
  return (
    <Collapsible
      className="scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-zinc-300 fixed left-0 right-0 top-0 z-20 flex 
    flex-col gap-4 overflow-hidden border-b border-zinc-200 bg-white p-4 
    data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 
    lg:bottom-0 lg:right-auto lg:h-auto lg:w-80 lg:overflow-auto lg:border-b-0 lg:border-r lg:px-4 lg:py-8
    "
    >
      <strong className="flex items-center justify-between gap-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100 lg:justify-start">
        <Logo />
        <h2 className="sr-only lg:not-sr-only">Logo UI</h2>
        <CollapsibleTrigger className="lg:hidden">
          <Menu />
        </CollapsibleTrigger>
      </strong>
      <CollapsibleContent
        className="flex h-full 
         flex-col justify-between data-[state=closed]:hidden data-[state=closed]:animate-slideUpAndFade data-[state=open]:animate-slideDownAndFade 
        lg:data-[state=closed]:flex
        "
        forceMount
      >
        <div>
          <Input
            type="search"
            placeholder="Search"
            icon={<Search className="text-zinc-500" />}
            className="mb-6"
          />
          <SideMenu />
        </div>

        <div className="flex flex-col ">
          <Button variant="ghost" className="justify-start gap-2">
            <LifeBuoy />
            Support
          </Button>
          <Button variant="ghost" className="justify-start gap-2">
            <Cog />
            Settings
          </Button>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
