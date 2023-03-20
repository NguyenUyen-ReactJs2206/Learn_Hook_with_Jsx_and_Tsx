export default function ProductInput({
  name,
  onChangeName
}: {
  name: string
  onChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div>
      <input type='text' onChange={onChangeName} value={name} placeholder='type to render' autoFocus />
      <h1>{name}</h1>
    </div>
  )
}
