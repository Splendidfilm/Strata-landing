import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/mockData';
interface EmployerSectionProps { onRequestServices: () => void; onOpenDocumentsModal?: () => void; }
export const EmployerSection: React.FC<EmployerSectionProps> = ({ onRequestServices }) => <section id="employers" className="employer-section"><div className="employer-inner"><div className="employer-copy"><p className="eyebrow">For employers</p><h2>The right people can change everything.</h2><p>Build a stronger team with recruitment shaped around your goals. We make it easier to find capable people and keep your organisation moving.</p><button className="button button-light" onClick={onRequestServices}>Request Our Services<ArrowRight size={17}/></button></div><img src={ASSETS.employer} alt="Workforce professionals planning recruitment together"/></div></section>;
