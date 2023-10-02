function Albums({albums,crear}) {
  console.log(albums)
  return (
    <div>
      <button onClick={crear}>Crear</button>
    </div>
  )
}

export default Albums
