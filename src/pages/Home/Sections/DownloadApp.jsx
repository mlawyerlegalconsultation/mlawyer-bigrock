import React, { useRef } from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'motion/react';
import QRCodeImage from '../../../assets/img/qr.png';
import PopIn from '../../../components/animations/PopIn';

const downloadApp = {
  badge: 'Available on iOS & Android',
  titlePrefix: 'Legal Help in ',
  titleSuffix: 'Your Pocket',
  description:
    'Upgrade your legal consultation with MLawyer. Download the app and connect with trusted advocates on demand.',
  qrText: 'Scan to download',
  qrSubbox: 'For iOS & Android'
};

const DownloadApp = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-primary dark:bg-gray-800 rounded-3xl p-8 md:p-16 relative overflow-hidden max-w-6xl mx-auto shadow-2xl transition-colors duration-300">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-warning/10 border border-white/20 text-success text-sm font-semibold mb-6 backdrop-blur-sm">
                {downloadApp.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {downloadApp.titlePrefix} <br />
                <span className="text-secondary">{downloadApp.titleSuffix}</span>
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {downloadApp.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <PopIn delay={0.2}>
                  <button className="flex items-center gap-3 bg-white text-gray-900 px-6 py-3.5 rounded-xl font-bold hover:bg-gray-100 transition-all hover:-translate-y-1 shadow-lg w-48 justify-center cursor-pointer">
                    <FaGooglePlay className="text-xl" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-semibold text-gray-500">Get it on</div>
                      <div className="text-sm leading-none">Google Play</div>
                    </div>
                  </button>
                </PopIn>
                <PopIn delay={0.1}>
                  <button className="flex items-center gap-3 bg-transparent border border-white/30 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all hover:-translate-y-1 w-48 justify-center cursor-pointer">
                    <FaApple className="text-2xl" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-semibold text-white/60">Download on the</div>
                      <div className="text-sm leading-none">App Store</div>
                    </div>
                  </button>
                </PopIn>

              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end items-center">
              <motion.div style={{ y }}>
                <div className="bg-white p-6 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 group">
                  <div className="bg-gray-100 rounded-xl p-4 mb-4 border-2 border-dashed border-gray-300 group-hover:border-primary/30 transition-colors">
                    <img src={QRCodeImage} alt="best app for lawyers" loading="lazy" className="w-40 h-40 object-contain" />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-gray-900">{downloadApp.qrText}</p>
                    <p className="text-sm text-gray-500">{downloadApp.qrSubbox}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
