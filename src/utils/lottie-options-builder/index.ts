import { LottieProps } from 'react-lottie'
export default function defaultLottieOptionsBuilder({ ...options }: LottieProps) {
  return {
    loop: true,
    autoplay: true,
    animationData: options.options.animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
    ...options
  }
}
