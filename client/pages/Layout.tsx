import { Link, Outlet } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Nav from './components/Nav'

export default function Layout() {
  return (
    <>
      <header className="head-container">
        <h1>All the Ghibli Things!</h1>
        <Link to="/">
          {/* img needs alt text despite being decorative as it is providing functionality (link to home page) */}
          <img
            src="https://www.ghibli-museum.jp/en/img/mainimg.png"
            alt="link to home page"
          />
        </Link>
      </header>
      <main>
        <DndProvider backend={HTML5Backend}>
          <Nav />
          <Outlet />
        </DndProvider>
      </main>
      <footer></footer>
    </>
  )
}
