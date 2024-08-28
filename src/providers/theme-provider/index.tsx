import {ConfigProvider} from 'antd'

export default function ThemeProvider({children}: {children: React.ReactNode}) {
    return (
      <ConfigProvider
      theme={{
          token: {
            colorPrimary: '#000',
          },
          components: {
            Button: {
              controlHeight:45,
              borderRadius: 0,
              controlOutline: 'none',
              defaultBorderColor: '#000',
            },
            Input: {
              borderRadius: 0,
              controlHeight: 45,
              controlOutline: 'none',            
            }
          }
        }}
      >
          {children}
      </ConfigProvider>
          
    )
  }