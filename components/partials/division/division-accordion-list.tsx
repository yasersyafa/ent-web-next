import { DivisionItem } from "@/data/divisions"
import DivisionAccordion from "./division-accordion"

interface Props {
    items: DivisionItem[]
    activeId: number | null
    onToggle: (id: number) => void
}

export default function DivisionAccordionList({ items, activeId, onToggle }: Props) {
    return (
        <div className="flex flex-col gap-y-5">
            {items.map((item) => (
                <DivisionAccordion
                    key={item.id}
                    {...item}
                    isOpen={activeId === item.id}
                    onToggle={() => onToggle(item.id)}
                />
            ))}
        </div>
    )
}