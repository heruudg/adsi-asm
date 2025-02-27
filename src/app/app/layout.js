import Sidemenu from "./sidemenu"
export default function DashboardLayout({ children }) {
    return (
        <div id="app">
          <div className="flex h-screen overflow-hidden">
            <Sidemenu />
            <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
              <main>
                <div className="p-4 mx-auto max-w-screen-2xl md:p-6">
                 {children}
                </div>
              </main>
            </div>
          </div>
        </div>
    )
  }