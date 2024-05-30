export default function ImproveSkills() {
  const list = [
    "Learn new recepies",
    "Ecperiment with food wand rite your own recipies",
    "Know nutrition facts and get ranked",
  ];

  return (
    <div className="section improve-skills">
      <div className="col img">
        <img src="/img/gallery/img_10.jpg"></img>
      </div>
      <div className="col typography">
        <h1 className="title">Improve your skills</h1>
        {list.map((item, index) => (
          <p className="skill-item" key={index}>
            {item}
          </p>
        ))}
        <button className="btn">Sign up now</button>
      </div>
    </div>
  );
}
