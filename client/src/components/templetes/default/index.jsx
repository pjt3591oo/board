const Default = props => {
  return (
    <div style={{width: "100%"}}>
       <div style={{width: "100%", height: 100, backgroundColor: '#8e8e8e'}}>
        임시헤더
      </div>

      <div style={{}}>
        {props.center}
      </div>

      <div style={{width: "100%", height: 100, backgroundColor: '#e8e8e8'}}>
        임시푸터
      </div>
    </div>
  )
}

export default Default