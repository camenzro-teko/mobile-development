import { View, type ViewProps } from 'react-native';

type WebViewProps = ViewProps & { className?: string };

export function ScreenSafeArea({ style, ...props }: ViewProps) {
  const webProps: WebViewProps = { ...props, style, className: 'safe-area-content' };
  return <View {...webProps} />;
}
