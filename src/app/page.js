import ClickableDotLottie from '@/components/ClickableDotLottie';
import LottieBackground from '@/components/LottieBackground';

const lottieStyles = {
  position: 'absolute',
  width: '150vw',
  height: '150vw',
};

const responsiveConfigs = {
  flower: {
    extraLarge: { bottom: '9%', right: '26%', maxWidth: '200px', maxHeight: '200px' },
    large: { bottom: '10%', right: '27%', maxWidth: '150px', maxHeight: '150px' },
    medium: { bottom: '5%', right: '26%', maxWidth: '120px', maxHeight: '120px' },
    small: { bottom: '3%', right: '26%', maxWidth: '80px', maxHeight: '80px' },
    xsmall: { bottom: '3.3%', right: '26%', maxWidth: '50px', maxHeight: '50px' },
  },
  loti: {
    extraLarge: { bottom: '5%', right: '2%', maxWidth: '500px', maxHeight: '500px' },
    large: { bottom: '8%', right: '3%', maxWidth: '360px', maxHeight: '360px' },
    medium: { bottom: '3%', right: '1%', maxWidth: '280px', maxHeight: '280px' },
    small: { bottom: '1.5%', right: '1%', maxWidth: '180px', maxHeight: '180px' },
    xsmall: { bottom: '3%', right: '2%', maxWidth: '100px', maxHeight: '100px' },
  },
  comp: {
    extraLarge: { bottom: '2%', left: '-3.5%', maxWidth: '650px', maxHeight: '650px' },
    large: { bottom: '2%', left: '-5%', maxWidth: '550px', maxHeight: '550px' },
    medium: { bottom: '2%', left: '-2.5%', maxWidth: '400px', maxHeight: '400px' },
    small: { bottom: '2%', left: '-1.5%', maxWidth: '250px', maxHeight: '250px' },
    xsmall: { bottom: '2%', left: '-5.5%', maxWidth: '200px', maxHeight: '200px' },
  },
  punipuri: {
    extraLarge: { left: '30%', bottom: '-1%', maxWidth: '350px', maxHeight: '350px' },
    large: { left: '27%', bottom: '1%', maxWidth: '300px', maxHeight: '300px' },
    medium: { left: '26%', bottom: '-2%', maxWidth: '250px', maxHeight: '250px' },
    small: { left: '27%', bottom: '-2%', maxWidth: '180px', maxHeight: '180px' },
    xsmall: { left: '28%', bottom: '0%', maxWidth: '100px', maxHeight: '100px' },
  },
};

export default function Home() {
  const speed = 0.8;
  return (
    <div className="max-w-7xl mx-[13%] overflow-hidden">
      <LottieBackground />

      <ClickableDotLottie
        lottieFilePath="/images/flower.lottie"
        speed={speed}
        style={lottieStyles}
        responsiveSizes={responsiveConfigs.flower}
      />
      <ClickableDotLottie
        lottieFilePath="/images/loti.lottie"
        speed={speed}
        style={lottieStyles}
        responsiveSizes={responsiveConfigs.loti}
      />
      <ClickableDotLottie
        lottieFilePath="/images/comp.lottie"
        speed={speed}
        style={lottieStyles}
        responsiveSizes={responsiveConfigs.comp}
      />
      <ClickableDotLottie
        lottieFilePath="/images/punipuri.lottie"
        speed={speed + 1}
        style={lottieStyles}
        responsiveSizes={responsiveConfigs.punipuri}
      />

      <ClickableDotLottie
        autoplay={true}
        loop={true}
        lottieFilePath="/images/panipuri-left.lottie"
        speed={speed}
        style={{
          position: 'absolute',
          bottom: '0%',
          left: '0%',
          width: '40vw',
          height: '40vw',
          maxWidth: '500px',
          maxHeight: '500px',
          pointerEvents: 'none',
        }}
      />

      <ClickableDotLottie
        autoplay={true}
        loop={true}
        lottieFilePath="/images/panipuri-right.lottie"
        speed={speed}
        style={{
          position: 'absolute',
          bottom: '0%',
          right: '0%',
          width: '40vw',
          height: '40vw',
          maxWidth: '350px',
          maxHeight: '350px',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}