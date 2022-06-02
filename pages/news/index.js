import Link from 'next/link';
//NB: 'Link' is a default export, it is provided by NextJS directly i.e we don't have to install a package like React-Router-Dom

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