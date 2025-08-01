// Типы для правил
export interface SubRule {
    id: string // например "2.1", "2.2"
    title: string
    content: string | React.ReactNode
}

export interface Rule {
    id: string // например "2", "3"
    title: string
    content?: string | React.ReactNode
    subRules?: SubRule[]
} 