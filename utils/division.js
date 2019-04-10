
class Division{
  division1(n,m){
    if (n < m) {
      return this.division1(m, n);
    } //交换n，m的值
    else if (n == m) {
      return n;
    }
    else {
      const temp = n;
      n = m;
      m = temp - n;
      return this.division1(n, m); //重复上述过程
    }
  }
}
export{Division}