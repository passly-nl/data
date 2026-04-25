export type InsightCardType =
    | 'executive_summary'
    | 'top_opportunities'
    | 'risk_anomalies'
    | 'buyer_behavior'
    | 'best_timing'
    | 'forecast';

export type InsightStatus =
    | 'pending'
    | 'generating'
    | 'ready'
    | 'failed'
    | 'insufficient_data'
    | 'budget_exceeded';

export type InsightSignalKind =
    | 'positive'
    | 'negative'
    | 'neutral';

export type InsightLanguage =
    | 'en'
    | 'nl';
