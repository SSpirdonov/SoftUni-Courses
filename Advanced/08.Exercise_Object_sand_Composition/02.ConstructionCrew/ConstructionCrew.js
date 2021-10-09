function constructionCrew(o) {
  if ( o.dizziness )  {
    o.levelOfHydrated += o.experience * o.weight * 0.1 ;
    o.dizziness = false;  
  }
  //console.log(o);
  return o;
}

constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  );