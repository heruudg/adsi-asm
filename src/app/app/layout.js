import Sidemenu from "./sidemenu"
export default function DashboardLayout({ children }) {
    return (
        <div id="app">
          <div className="min-h-screen xl:flex">
            <Sidemenu />
          </div>
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          <main>{children}</main>
        </div>
    )
  }