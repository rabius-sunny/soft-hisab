import { AntdRegistry } from '@ant-design/nextjs-registry'

export default function Providers({ children }: TChildren) {
  return (
    <div>
      <AntdRegistry>{children}</AntdRegistry>
    </div>
  )
}
