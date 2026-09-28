import React from 'react';
import { ArrowRight } from 'lucide-react';
interface AboutSectionProps { onLearnMore?: () => void; onRequestQuote?: () => void; }
export const AboutSection: React.FC<AboutSectionProps> = () => <section id="about" className="about-section"><div className="about-inner"><div><p className="eyebrow">A people-first partner</p><h2>More than recruitment.</h2></div><div><p>We connect good people with meaningful work and help organisations find the talent to move forward. With a personal approach and a focus on doing things properly, we make every working relationship count.</p><a className="text-link" href="#contact">About Us<ArrowRight size={17}/></a></div></div></section>;
