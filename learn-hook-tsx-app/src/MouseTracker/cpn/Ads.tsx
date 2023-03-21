import websiteUI from '../img/learning-website-ui.png'
import { withMouseTracker } from '../MouseTracker'

function Ads({ x, y }: { x: number; y: number }) {
  return (
    <div>
      <img src={websiteUI} alt='website ui' style={{ width: '100rem', height: 'auto' }} />
      <p>Position Mouse</p>
      <ul>
        <li>x: {x}</li>
        <li>y:{y}</li>
      </ul>
    </div>
  )
}
export default withMouseTracker(Ads)