import React from 'react'
import { App } from '@/components/App'
import { Label } from '@/components/lv1/Label'


export default () => (
  <App>
    Hello Next.js with Firebase Hosting x CloudRun x TypeScript x Express!
    <div>
      <Label text="heyhey" />
      <img src="/icon.png" alt="アイコン"/>
    </div>
  </App>
)
