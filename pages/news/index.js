import Link from 'next/link';


function NewsPage () {
    return <>
      <h1>The News Page</h1>
      <ul>
      <li><Link href='/news/yooo'>Next is cool</Link></li>
   <  li><a href=''>Next is cool</a></li>
      </ul>
    </>
}
export default NewsPage;