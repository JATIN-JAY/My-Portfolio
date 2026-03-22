import Lottie from 'lottie-react';

export default function LottieAnimation({ 
  animationData, 
  loop = true, 
  autoplay = true, 
  className = "",
  speed = 1 
}) {
  return (
    <div className={className}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        speed={speed}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
