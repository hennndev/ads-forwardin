import { NextRequestWithAuth, withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        if(request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/register")) {
            return NextResponse.rewrite(new URL("/admin/dashboard", request.url)) 
        }
        if(request.nextUrl.pathname.startsWith("/admin")) {
            return NextResponse.next()
        } else {
            return NextResponse.rewrite(new URL("/page-not-found", request.url)) 
        }     
    },
)
export const config = { matcher: ["/admin/:path*"] }