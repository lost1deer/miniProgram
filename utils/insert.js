
class Insert
{
  insertstr(soure, start, newStr) {
  return soure.slice(0, start) + newStr + soure.slice(start);
}
}
export{Insert}