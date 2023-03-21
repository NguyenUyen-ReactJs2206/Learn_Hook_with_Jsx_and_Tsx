import websiteUI from '../img/learning-website-ui.png'

export default function Ads({ x, y }: { x: number; y: number }) {
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
