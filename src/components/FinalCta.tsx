import React from 'react';
import { ArrowRight } from 'lucide-react';
interface FinalCtaProps { onFindJob: () => void; onHireStaff: () => void; }
export const FinalCta: React.FC<FinalCtaProps> = ({ onFindJob, onHireStaff }) => <section className="final-cta"><div><p className="eyebrow">Take your next step</p><h2>Ready for your next opportunity?</h2><div className="final-actions"><button onClick={onFindJob}>Find a Job<ArrowRight size={17}/></button><button onClick={onHireStaff}>Hire Staff<ArrowRight size={17}/></button></div></div></section>;
