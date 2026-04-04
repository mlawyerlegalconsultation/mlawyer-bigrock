import React from 'react';
import PopIn from '../../../components/animations/PopIn';
import lawyerData from '../../../data/lawyer.json';

const ItemCard = ({ area }) => (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl text-center hover:bg-white/20 transition-colors cursor-pointer group relative w-56 shrink-0 flex flex-col items-center justify-center min-h-[100px]">
        {area.highDemand && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm z-10">
                HIGH DEMAND
            </span>
        )}
        <span className="font-medium text-base leading-tight">{area.name}</span>
    </div>
);

const InfiniteRow = ({ items, direction = 'left' }) => {
    // Repeat items to ensure they cover wide screens (4x 5 items = 20 items)
    const set = [...items, ...items, ...items, ...items];
    
    return (
        <div className="overflow-hidden py-4 w-full">
            <div className={`flex gap-6 w-max ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'} hover-pause`}>
                {/* Two sets of content for seamless looping */}
                <div className="flex gap-6 shrink-0">
                    {set.map((area, i) => <ItemCard key={`s1-${i}`} area={area} />)}
                </div>
                <div className="flex gap-6 shrink-0">
                    {set.map((area, i) => <ItemCard key={`s2-${i}`} area={area} />)}
                </div>
            </div>
        </div>
    );
};

const PracticeAreas = () => {
    const { practiceAreas } = lawyerData;
    const firstRow = practiceAreas.areas.slice(0, 5);
    const secondRow = practiceAreas.areas.slice(5, 10);

    return (
        <section className="py-20 bg-primary text-white relative overflow-hidden">
            <style>{`
                @keyframes scrollRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                @keyframes scrollLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll-right {
                    animation: scrollRight 40s linear infinite;
                }
                .animate-scroll-left {
                    animation: scrollLeft 40s linear infinite;
                }
                .hover-pause:hover {
                    animation-play-state: paused;
                }
            `}</style>
            
            {/* Abstract shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container-fluid relative z-10">
                <PopIn>
                    <div className="container mx-auto px-6 text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{practiceAreas.title}</h2>
                        <p className="text-teal-100">{practiceAreas.subtitle}</p>
                    </div>
                </PopIn>

                <div className="space-y-4">
                    <InfiniteRow items={firstRow} direction="right" />
                    <InfiniteRow items={secondRow} direction="left" />
                </div>
            </div>
        </section>
    );
};

export default PracticeAreas;
