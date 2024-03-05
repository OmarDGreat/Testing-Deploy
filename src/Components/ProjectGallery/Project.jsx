

export default function Project({item}){
const displayCard = (item) => {
return (
    <div className="card" style="width: 18rem;">
  <div className="card-body">
    <h5 className="card-title">{item.projectName}</h5>
    <p className="card-text">{item.description}</p>
    <a href={item.github} className="card-link">GitHub link</a>
    <a href={item.deployed} className="card-link">Deployed link</a>
  </div>
</div>
)
}
    return (
        <li className="list-group-item">
            <button type="button" onClick={displayCard}><a href={displayCard}>{item.projectName}</a></button>
          </li>
    )
}