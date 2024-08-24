import { NextRequestWithAuth, withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        if(request.nextUrl.pathname.startsWith("/dashboard")) {
            return NextResponse.next()
        } else {
            return NextResponse.rewrite(new URL("/page-not-found", request.url)) 
        }     
    },
)
export const config = { matcher: ["/dashboard/:path*"] }