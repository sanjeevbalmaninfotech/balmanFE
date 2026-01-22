export interface Lead {
    id: number;
    name: string;
    title: string;
    image: string;
}

export interface LeadCardProps {
    lead: Lead;
}