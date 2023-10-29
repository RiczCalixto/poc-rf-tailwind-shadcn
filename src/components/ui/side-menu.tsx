import {
  Home,
  BarChart,
  SquareStack,
  CheckSquare,
  Flag,
  Users,
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion'

export default function SideMenu() {
  return (
    <Accordion type="single" collapsible>
      {sidebarItems.map(({ icon: Icon, description }) => (
        <AccordionItem value={description} key={description}>
          <AccordionTrigger className="gap-2">
            <Icon />
            <p className="flex flex-1">{description}</p>
          </AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

const sidebarItems = [
  {
    icon: Home,
    description: 'Home',
  },
  {
    icon: BarChart,
    description: 'Dashboard',
  },
  {
    icon: SquareStack,
    description: 'Projects',
  },
  {
    icon: CheckSquare,
    description: 'Tasks',
  },
  {
    icon: Flag,
    description: 'Reporting',
  },
  {
    icon: Users,
    description: 'Users',
  },
]
